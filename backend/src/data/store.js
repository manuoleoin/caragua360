import bcrypt from 'bcryptjs';

export const store = {
  users: [],
  nextUserId: 1
};

export async function createUser({ name, username, email, password }) {
  const passwordHash = await bcrypt.hash(password, 12);
  const user = { id: store.nextUserId++, name, username, email, passwordHash, createdAt: new Date().toISOString() };
  store.users.push(user);
  return user;
}

export function publicUser(user) {
  return { id: user.id, name: user.name, username: user.username, email: user.email, createdAt: user.createdAt };
}
