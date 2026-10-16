import { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
    return (
        <header className="header">
            <Link to="/" className="header-logo">
                CARAGUA360
            </Link>

            <img
                src="/images/ingles.jpg"
                alt="bandeira inglaterra"
                className="header-bandeira"
            />

            <nav className="header-nav">
                <Link to="/">Início</Link>
                <Link to="/explore">Explore</Link>
                <Link to="/eventos">Eventos</Link>
                <Link to="/preservacao">Preservação</Link>
                <Link to="/roteiros">Roteiros</Link>
            </nav>
            <Link
                to="/perfil"
                className="botao-perfil"
            >
                Perfil
            </Link>
        </header>
    );
}

export default Header;