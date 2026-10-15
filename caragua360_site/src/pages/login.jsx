import { Link } from 'react-router-dom';
import './login.css';

function Login() {
  function handleLogin(event) {
    event.preventDefault();
    // Aqui você poderá adicionar a validação do login depois.
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
