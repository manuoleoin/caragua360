import { useState } from 'react';
import { Link } from 'react-router-dom';
import './perfil.css';

function Perfil() {
  const [abaAtiva, setAbaAtiva] = useState('roteiros');

  function handleExcluirConta(event) {
    event.preventDefault();
    // Lógica para excluir conta
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
            <Link 
              to="#" 
              className={abaAtiva === 'roteiros' ? 'active' : ''} 
              onClick={() => setAbaAtiva('roteiros')}
            >
              Meus roteiros
            </Link>
            <span>|</span>
            <Link 
              to="#" 
              className={abaAtiva === 'favoritos' ? 'active' : ''} 
              onClick={() => setAbaAtiva('favoritos')}
            >
              Favoritos
            </Link>
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