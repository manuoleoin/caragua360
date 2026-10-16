import { Router } from 'express';
import { z } from 'zod';
import { pool } from '../db.js';
import { publicUser, requireAuth } from '../middleware.js';

const router = Router();

router.use(requireAuth);

router.get('/', async (req, res, next) => {
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

router.patch('/', async (req, res, next) => {
  const parsed = z.object({
    name: z.string().trim().min(2).max(120).optional(),
    username: z.string()
      .trim()
      .min(3)
      .max(40)
      .regex(/^[a-zA-Z0-9_.-]+$/)
      .optional(),
  }).refine(
    (data) => Object.keys(data).length > 0,
    'Informe pelo menos um campo para alterar.'
  ).safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      error: 'Dados inválidos.',
    });
  }

  try {
    const { name, username } = parsed.data;

    const result = await pool.query(
      `UPDATE users
       SET name = COALESCE($1, name),
           username = COALESCE($2, username),
           updated_at = NOW()
       WHERE id = $3
       RETURNING id, name, username, email, created_at`,
      [
        name ?? null,
        username?.toLowerCase() ?? null,
        req.userId,
      ]
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
    if (error.code === '23505') {
      return res.status(409).json({
        error: 'Este nome de usuário já está em uso.',
      });
    }

    return next(error);
  }
});

router.delete('/', async (req, res, next) => {
  try {
    const result = await pool.query(
      'DELETE FROM users WHERE id = $1',
      [req.userId]
    );

    if (!result.rowCount) {
      return res.status(404).json({
        error: 'Usuário não encontrado.',
      });
    }

    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
});

export default router;