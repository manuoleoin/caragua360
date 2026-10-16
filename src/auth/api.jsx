const API_URL =
  import.meta.env.VITE_API_URL || 'http://localhost:3333';

export async function apiRequest(path, options = {}) {
  const token = localStorage.getItem('caragua360_token');

  const headers = {
    ...(options.body
      ? { 'Content-Type': 'application/json' }
      : {}),
    ...(token
      ? { Authorization: `Bearer ${token}` }
      : {}),
    ...options.headers,
  };

  let response;

  try {
    response = await fetch(`${API_URL}${path}`, {
      ...options,
      headers,
    });
  } catch {
    throw new Error(
      'Não foi possível conectar ao servidor. Verifique se o backend está ligado.'
    );
  }

  const data = response.status === 204
    ? null
    : await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(
      data?.error || 'Ocorreu um erro. Tente novamente.'
    );
  }

  return data;
}