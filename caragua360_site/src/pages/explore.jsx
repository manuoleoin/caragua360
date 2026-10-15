
import "./explore.css";
function Explore() {
  return (
    <main className="explore-pagina">

      <header className="explore-cabecalho">
        <h1>CARAGUA360</h1>
        <span>🇧🇷</span>
      </header>

      <section className="explore-interesses">
        <h2>QUAL SEU INTERESSE HOJE?</h2>

        <div className="explore-categorias">
          <a href="#praias">
            <img src="/images/praias.png" alt="Praias" />
            <span>praias</span>
          </a>

          <a href="#pontos">
            <img src="/images/pontos.png" alt="Pontos turísticos" />
            <span>pontos</span>
          </a>

          <a href="#atividades">
            <img src="/images/atividades.png" alt="Atividades" />
            <span>atividades</span>
          </a>

          <a href="#onde-comer">
            <img src="/images/ondecomer.png" alt="Onde comer" />
            <span>onde comer</span>
          </a>

          <a href="#hospedagem">
            <img src="/images/hospedagem.png" alt="Hospedagem" />
            <span>hospedagem</span>
          </a>
        </div>
      </section>

      <section className="explore-praias" id="praias">
        <h2>PRAIAS</h2>

        <div className="explore-grade-praias">

          <div className="explore-card-praia">
            <img src="/images/martim-de-sa.jpg" alt="Martim de Sá" />
            <span>Martim de Sá</span>
          </div>

          <div className="explore-card-praia">
            <img src="/images/praia-brava.jpg" alt="Praia Brava" />
            <span>Praia Brava</span>
          </div>

          <div className="explore-card-praia">
            <img src="/images/praia-da-freira.jpg" alt="Praia da Freira" />
            <span>Praia da Freira</span>
          </div>

          <div className="explore-card-praia">
            <img src="/images/cocanha.jpg" alt="Cocanha" />
            <span>Cocanha</span>
          </div>

          <div className="explore-card-praia">
            <img src="/images/massaguacu.jpg" alt="Massaguaçu" />
            <span>Massaguaçu</span>
          </div>

          <div className="explore-card-praia">
            <img src="/images/mococa.jpg" alt="Mococa" />
            <span>Mococa</span>
          </div>

          <div className="explore-card-praia">
            <img src="/images/prainha.jpg" alt="Prainha" />
            <span>Prainha</span>
          </div>

          <div className="explore-card-praia">
            <img src="/images/tabatinga.jpg" alt="Tabatinga" />
            <span>Tabatinga</span>
          </div>

        </div>
      </section>

      <section className="explore-outras" id="pontos">
        <h2>PONTOS TURÍSTICOS</h2>
        <p>Descubra lugares incríveis em Caraguatatuba.</p>
      </section>

      <section className="explore-outras" id="atividades">
        <h2>ATIVIDADES</h2>
        <p>Encontre novas experiências na cidade.</p>
      </section>

      <section className="explore-outras" id="onde-comer">
        <h2>ONDE COMER</h2>
        <p>Conheça os restaurantes da região.</p>
      </section>

      <section className="explore-outras" id="hospedagem">
        <h2>HOSPEDAGEM</h2>
        <p>Encontre um lugar para descansar.</p>
      </section>

    </main>
  );
}

export default Explore;
