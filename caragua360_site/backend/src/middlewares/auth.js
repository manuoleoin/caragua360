import jwt from 'jsonwebtoken';

const secret = () => process.env.JWT_SECRET || 'dev-secret';

export function createToken(userId) {
  return jwt.sign({ sub: userId }, secret(), { expiresIn: '7d' });
}

export function requireAuth(req, res, next) {
  const header = req.headers.authorization;
  if (!header?.startsWith('Bearer ')) return res.status(401).json({ error: 'Faça login para continuar.' });
  try {
    const payload = jwt.verify(header.slice(7), secret());
    req.userId = Number(payload.sub);
    next();
  } catch {
    return res.status(401).json({ error: 'Token inválido ou expirado.' });
  }
}
