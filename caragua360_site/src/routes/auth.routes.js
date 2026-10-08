import { Router } from 'express';
import bcrypt from 'bcryptjs';
import { z } from 'zod';
import { store, createUser, publicUser } from '../data/store.js';
import { createToken, requireAuth } from '../middlewares/auth.js';

const router = Router();
const registerSchema = z.object({ name: z.string().min(2), username: z.string().min(3), email: z.email(), password: z.string().min(6) });

router.post('/register', async (req, res) => {
  const parsed = registerSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: 'Nome, usuário, e-mail e senha são obrigatórios.', details: parsed.error.issues });
  const { name, username, email, password } = parsed.data;
  if (store.users.some((u) => u.email === email)) return res.status(409).json({ error: 'Este e-mail já está cadastrado.' });
  if (store.users.some((u) => u.username === username)) return res.status(409).json({ error: 'Este nome de usuário já está em uso.' });
  const user = await createUser({ name, username, email, password });
  return res.status(201).json({ message: 'Cadastro realizado com sucesso.', user: publicUser(user), token: createToken(user.id) });
});

router.post('/login', async (req, res) => {
  const parsed = z.object({ email: z.email(), password: z.string().min(1) }).safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: 'Informe um e-mail e uma senha válidos.' });
  const user = store.users.find((u) => u.email === parsed.data.email);
  if (!user || !(await bcrypt.compare(parsed.data.password, user.passwordHash))) return res.status(401).json({ error: 'E-mail ou senha incorretos.' });
  return res.json({ message: 'Login realizado com sucesso.', user: publicUser(user), token: createToken(user.id) });
});

router.post('/forgot-password', (req, res) => {
  if (!z.email().safeParse(req.body?.email).success) return res.status(400).json({ error: 'Informe um e-mail válido.' });
  return res.json({ message: 'Se o e-mail estiver cadastrado, enviaremos instruções de recuperação.' });
});

router.get('/me', requireAuth, (req, res) => {
  const user = store.users.find((u) => u.id === req.userId);
  if (!user) return res.status(404).json({ error: 'Usuário não encontrado.' });
  return res.json({ user: publicUser(user) });
});

export default router;
