import 'dotenv/config';
import app from './app.jsx';
import { pool } from './db.js';

const port = Number(process.env.PORT || 3333);

if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32) {
  throw new Error(
    'Configure JWT_SECRET no .env com pelo menos 32 caracteres.'
  );
}

try {
  await pool.query('SELECT 1');

  app.listen(port, () => {
    console.log(
      `Caragua360 API disponível em http://localhost:${port}`
    );
  });
} catch (error) {
  console.error(
    'Não foi possível conectar ao PostgreSQL. Confira DATABASE_URL e se o banco está ligado.',
    error.message
  );

  process.exit(1);
}