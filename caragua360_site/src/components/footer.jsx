
import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-marca">
          <Link to="/" className="footer-logo">
            CARAGUA360
          </Link>

          <p>
            Seu guia para descobrir os melhores roteiros.
            <br />
            Explore. Preserve. Viva Caraguá.
          </p>

          <div className="footer-bottom">
            © 2026 Caragua360. Todos os direitos reservados.
          </div>
        </div>

        <div className="footer-contato">
          <h3>CONTATOS</h3>

          <a href="mailto:caragua360@gmail.com">
            caragua360@gmail.com
          </a>

          <a href="tel:+551212345678">
            +55(12)1234-5678
          </a>

          <div className="footer-redes-titulo">
            <h3>REDES SOCIAIS</h3>
          </div>

          <div className="footer-redes">
            <a href="#" aria-label="WhatsApp">
              <img
                src="https://img.icons8.com/?size=100&id=85088&format=png&color=9bb5c9"
                alt="WhatsApp"
              />
            </a>

            <a href="#" aria-label="Instagram">
              <img
                src="https://img.icons8.com/?size=100&id=85154&format=png&color=9bb5c9"
                alt="Instagram"
              />
            </a>

            <a href="#" aria-label="TikTok">
              <img
                src="https://img.icons8.com/?size=100&id=soupkpLfTkZi&format=png&color=9bb5c9"
                alt="TikTok"
              />
            </a>

            <a href="#" aria-label="Facebook">
              <img
                src="https://img.icons8.com/?size=100&id=85024&format=png&color=9bb5c9"
                alt="Facebook"
              />
            </a>
          </div>
        </div>

        <nav className="footer-navegacao">
          <h3>NAVEGUE</h3>

          <Link to="/home">início</Link>
          <Link to="/explore">explore</Link>
          <a href="/eventos">eventos</a>
          <a href="/preservacao">preservação</a>
          <a href="/roteiros">roteiros</a>
          <Link to="/login">login</Link>
        </nav>

      </div>
    </footer>
  );
}

export default Footer;
