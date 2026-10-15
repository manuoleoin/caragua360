import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { apiRequest } from '../auth/api.js';
import { useAuth } from '../auth/AuthContext.jsx';

import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [enviando, setEnviando] = useState(false);

  const { user, saveSession, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!loading && user) {
      navigate('/perfil', { replace: true });
    }
  }, [user, loading, navigate]);

  async function handleLogin(event) {
    event.preventDefault();

    setErro('');
    setEnviando(true);

    try {
      const data = await apiRequest('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          email: email.trim(),
          password: senha,
        }),
      });

      saveSession(data);

      navigate(location.state?.from || '/perfil', {
        replace: true,
      });
    } catch (error) {
      setErro(error.message);
    } finally {
      setEnviando(false);
    }
  }

  return (
    <main className="login-pagina">
      <section className="login-conteudo">
        <h1>BEM VINDO NOVAMENTE!</h1>

        <div className="login-card">
          <h2>Login:</h2>

          <form onSubmit={handleLogin}>
            <div className="login-campo">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
              />
            </div>

            <div className="login-campo">
              <label htmlFor="senha">Senha:</label>
              <input
                type="password"
                id="senha"
                name="senha"
                autoComplete="current-password"
                required
              />
            </div>

            <div className="login-esqueci">
              <Link to="/recuperar-senha">esqueci a senha</Link>
            </div>

            <button type="submit" className="login-botao">
              Entrar
            </button>

            <p className="login-cadastro">
              Não possui uma conta? <Link to="/cadastro">Cadastrar</Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Login;
