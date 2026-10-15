import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { apiRequest } from './api.js';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('caragua360_token');

    if (!token) {
      setLoading(false);
      return;
    }

    apiRequest('/api/auth/me')
      .then((data) => setUser(data.user))
      .catch(() => {
        localStorage.removeItem('caragua360_token');
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  function saveSession(data) {
    localStorage.setItem('caragua360_token', data.token);
    setUser(data.user);
  }

  function logout() {
    localStorage.removeItem('caragua360_token');
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ user, loading, saveSession, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      'useAuth precisa ser usado dentro de AuthProvider.'
    );
  }

  return context;
}