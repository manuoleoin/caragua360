import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import profileRoutes from './routes/profile.routes.js';

const app = express();

const allowedOrigin =
  process.env.FRONTEND_URL || 'http://localhost:5173';

app.use(cors({
  origin: allowedOrigin,
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json({ limit: '20kb' }));

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'Caragua360 API',
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);

app.use((error, _req, res, _next) => {
  console.error('Erro na API:', error.message);

  return res.status(500).json({
    error: 'Erro interno do servidor.',
  });
});

export default app;