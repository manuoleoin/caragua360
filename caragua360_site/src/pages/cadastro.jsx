
import { Link } from 'react-router-dom';
import './cadastro.css';

function Cadastro() {
    function validarSenhas(event) {
        event.preventDefault();

        const formulario = event.currentTarget;
        const senha = formulario.senha.value;
        const confirmarSenha = formulario.confirmarSenha.value;

        if (senha !== confirmarSenha) {
            alert('As senhas não coincidem!');
            return;
        }

        alert('Senhas confirmadas! O cadastro ainda precisa ser conectado ao sistema.');
    }

    return (
        <main className="cadastro-pagina">
            <section className="cadastro-conteudo">
                <h1>BEM VINDO!</h1>

                <div className="cadastro-card">
                    <p>Cadastre-se:</p>

                    <form onSubmit={validarSenhas}>
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
