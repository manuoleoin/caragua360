import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { apiRequest } from '../auth/api.jsx';
import { useAuth } from '../auth/AuthContext.jsx';

import './perfil.css';

function Perfil() {
  const [abaAtiva, setAbaAtiva] = useState('roteiros');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  async function handleExcluirConta() {
    const confirmou = window.confirm(
      'Tem certeza de que deseja excluir sua conta? Essa ação não pode ser desfeita.'
    );

    if (!confirmou) return;

    setErro('');
    setCarregando(true);

    try {
      await apiRequest('/api/profile', {
        method: 'DELETE',
      });

      logout();
      navigate('/', { replace: true });
    } catch (error) {
      setErro(error.message);
    } finally {
      setCarregando(false);
    }
  }

  function handleSair() {
    logout();
    navigate('/', { replace: true });
  }

  return (
    <div className="perfil-pagina">
    <main className="container">
      
      <section className="profile-header">
        <div className="profile-info">
          <div className="avatar-placeholder">
           <img src="https://img.icons8.com/?size=100&id=Hj21JM30swCm&format=png&color=000000*/" alt="foto de perfil" />
          </div>
          <div className="user-details">
            <h2>Fulano de Tal</h2>
            <p>@fulanodetal</p>
          </div>
        </div>
        <button className="btn-excluir-conta" onClick={handleExcluirConta}>
          Excluir conta
        </button>
      </section>

     
      <section className="profile-nav">
        <div className="tabs">
            <span>|</span>

          </div>
        <div className="search-bar">
          <input type="text" placeholder="Procurar..." className='procurar'/>
          <img src="https://img.icons8.com/?size=100&id=84039&format=png&color=000000" alt="Lupa" />
        </div>
      </section>

      <section className="cards-grid">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </section>

    </main>
    </div>
  );

}
export default Perfil;