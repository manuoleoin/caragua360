import { Router } from 'express';
import bcrypt from 'bcryptjs';
import { z } from 'zod';
import { pool } from '../db.js';
import {
  createToken,
  publicUser,
  requireAuth,
} from '../middleware.js';

const router = Router();

const registerSchema = z.object({
  name: z.string().trim().min(2).max(120),
  username: z.string()
    .trim()
    .min(3)
    .max(40)
    .regex(/^[a-zA-Z0-9_.-]+$/),
  email: z.string().trim().email().max(254),
  password: z.string().min(6).max(72),
});

router.post('/register', async (req, res, next) => {
  const parsed = registerSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      error: 'Confira nome, usuário, e-mail e senha (mínimo 6 caracteres).',
    });
  }

  const { name, username, email, password } = parsed.data;

  try {
    const passwordHash = await bcrypt.hash(password, 12);

    const result = await pool.query(
      `INSERT INTO users (name, username, email, password_hash)
       VALUES ($1, $2, $3, $4)
       RETURNING id, name, username, email, created_at`,
      [
        name,
        username.toLowerCase(),
        email.toLowerCase(),
        passwordHash,
      ]
    );

    const user = publicUser(result.rows[0]);

    return res.status(201).json({
      message: 'Cadastro realizado com sucesso.',
      user,
      token: createToken(user.id),
    });
  } catch (error) {
    if (error.code === '23505') {
      const constraint = error.constraint || '';

      if (constraint.includes('email')) {
        return res.status(409).json({
          error: 'Este e-mail já está cadastrado.',
        });
      }

      if (constraint.includes('username')) {
        return res.status(409).json({
          error: 'Este nome de usuário já está em uso.',
        });
      }

      return res.status(409).json({
        error: 'E-mail ou nome de usuário já cadastrado.',
      });
    }

    return next(error);
  }
});

router.post('/login', async (req, res, next) => {
  const parsed = z.object({
    email: z.string().trim().email().max(254),
    password: z.string().min(1).max(72),
  }).safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      error: 'Informe um e-mail e uma senha válidos.',
    });
  }

  try {
    const result = await pool.query(
      `SELECT id, name, username, email, password_hash, created_at
       FROM users
       WHERE LOWER(email) = LOWER($1)
       LIMIT 1`,
      [parsed.data.email]
    );

    const row = result.rows[0];

    if (!row || !(await bcrypt.compare(
      parsed.data.password,
      row.password_hash
    ))) {
      return res.status(401).json({
        error: 'E-mail ou senha incorretos.',
      });
    }

    const user = publicUser(row);

    return res.json({
      message: 'Login realizado com sucesso.',
      user,
      token: createToken(user.id),
    });
  } catch (error) {
    return next(error);
  }
});

router.get('/me', requireAuth, async (req, res, next) => {
  try {
    const result = await pool.query(
      `SELECT id, name, username, email, created_at
       FROM users
       WHERE id = $1`,
      [req.userId]
    );

    if (!result.rowCount) {
      return res.status(404).json({
        error: 'Usuário não encontrado.',
      });
    }

    return res.json({
      user: publicUser(result.rows[0]),
    });
  } catch (error) {
    return next(error);
  }
});

router.post('/forgot-password', (_req, res) => {
  return res.status(501).json({
    error: 'A recuperação de senha por e-mail ainda precisa ser configurada.',
  });
});

export default router;