import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import profileRoutes from './routes/profile.routes.js';
import contentRoutes from './routes/content.routes.js';

const app = express();
app.use(cors({ origin: process.env.CORS_ORIGIN?.split(',') || true }));
app.use(express.json());
app.get('/health', (_req, res) => res.json({ status: 'online', service: 'caragua360' }));
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api', contentRoutes);
app.use((_req, res) => res.status(404).json({ error: 'Rota não encontrada.' }));

function App() {
  return (
    <>
    </>
  )
}

export default App
