import { Router } from 'express';
const router = Router();

router.get('/navigation', (_req, res) => res.json({ items: [
  { label: 'Início', path: '/' },
  { label: 'Explore', path: '/explore' },
  { label: 'Eventos', path: '/eventos' },
  { label: 'Preservação', path: '/preservacao' },
  { label: 'Roteiros', path: '/roteiros' },
  { label: 'Entrar', path: '/login' }
] }));

router.get('/preservation', (_req, res) => res.json({
  title: 'Preservação',
  subtitle: 'Essencial para garantir um futuro sustentável para o planeta.',
  introduction: 'Caraguatatuba recebe milhares de visitantes todos os anos. Preservar praias, trilhas e áreas naturais mantém a cidade bonita e saudável para todos.',
  consequences: 'O turismo sem os devidos cuidados pode causar acúmulo de lixo, poluição, degradação de trilhas, danos à fauna e perda de biodiversidade.',
  tips: ['Descarte seu lixo corretamente', 'Respeite a natureza e seus recursos', 'Priorize materiais recicláveis', 'Preserve as trilhas e áreas naturais']
}));

export default router;
