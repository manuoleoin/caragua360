import { apiRequest } from '../auth/api.jsx';
import { useAuth } from '../auth/AuthContext.jsx';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

import './cadastro.css';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erro, setErro] = useState('');
  const [enviando, setEnviando] = useState(false);

  const { saveSession } = useAuth();
  const navigate = useNavigate();

  async function handleCadastro(event) {
    event.preventDefault();
    setErro('');

    if (senha !== confirmarSenha) {
      setErro('As senhas não coincidem.');
      return;
    }

    setEnviando(true);

    try {
      const data = await apiRequest('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({
          name: nome.trim(),
          username: usuario.trim(),
          email: email.trim(),
          password: senha,
        }),
      });

      saveSession(data);
      navigate('/perfil', { replace: true });
    } catch (error) {
      setErro(error.message);
    } finally {
      setEnviando(false);
    }
  }

    return (
        <main className="cadastro-pagina">
            <section className="cadastro-conteudo">
                <h1>BEM VINDO!</h1>

                <div className="cadastro-card">
                    <p>Cadastre-se:</p>

                    <form onSubmit={handleCadastro}>
                        <div className="cadastro-campo">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                            />
                        </div>

                        <div className="cadastro-campo">
                            <label htmlFor="senha">Senha:</label>
                            <input
                                type="password"
                                id="senha"
                                name="senha"
                                required
                            />
                        </div>

                        <div className="cadastro-campo">
                            <label htmlFor="confirmarSenha">
                                Confirme sua senha:
                            </label>
                            <input
                                type="password"
                                id="confirmarSenha"
                                name="confirmarSenha"
                                required
                            />
                        </div>

                        <p className="cadastro-login">
                            Já possui uma conta?{' '}
                            <Link to="/login">Login</Link>
                        </p>

                        <button type="submit" className='cadastro-botao'>Cadastrar</button>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default Cadastro;
