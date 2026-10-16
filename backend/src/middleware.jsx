import jwt from 'jsonwebtoken';

export function createToken(userId) {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error('JWT_SECRET não configurada.');
  }

  return jwt.sign(
    { sub: String(userId) },
    secret,
    { expiresIn: '7d', issuer: 'caragua360' }
  );
}

export function requireAuth(req, res, next) {
  const header = req.headers.authorization;

  if (!header?.startsWith('Bearer ')) {
    return res.status(401).json({
      error: 'Faça login para continuar.',
    });
  }

  try {
    const secret = process.env.JWT_SECRET;

    const payload = jwt.verify(
      header.slice(7),
      secret,
      { issuer: 'caragua360' }
    );

    const id = Number(payload.sub);

    if (!Number.isSafeInteger(id) || id < 1) {
      return res.status(401).json({ error: 'Token inválido.' });
    }

    req.userId = id;
    return next();
  } catch {
    return res.status(401).json({
      error: 'Sessão inválida ou expirada. Entre novamente.',
    });
  }
}

export function publicUser(row) {
  return {
    id: Number(row.id),
    name: row.name,
    username: row.username,
    email: row.email,
    createdAt: row.created_at,
  };
}