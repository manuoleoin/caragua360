import { Router } from 'express';
import { z } from 'zod';
import { store, publicUser } from '../data/store.js';
import { requireAuth } from '../middlewares/auth.js';

const router = Router();
router.use(requireAuth);

router.patch('/', (req, res) => {
  const parsed = z.object({ name: z.string().min(2).optional(), username: z.string().min(3).optional() }).safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: 'Dados inválidos.', details: parsed.error.issues });
  const user = store.users.find((u) => u.id === req.userId);
  if (!user) return res.status(404).json({ error: 'Usuário não encontrado.' });
  if (parsed.data.username && store.users.some((u) => u.username === parsed.data.username && u.id !== user.id)) return res.status(409).json({ error: 'Nome de usuário já está em uso.' });
  Object.assign(user, parsed.data);
  return res.json({ user: publicUser(user) });
});

router.delete('/', (req, res) => {
  const index = store.users.findIndex((u) => u.id === req.userId);
  if (index < 0) return res.status(404).json({ error: 'Usuário não encontrado.' });
  store.users.splice(index, 1);
  return res.status(204).send();
});

export default router;
