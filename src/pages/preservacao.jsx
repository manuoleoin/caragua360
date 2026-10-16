import "./preservacao.css";

function Preservacao() {
  return (
    <main className="preservacao">
      <section className="preservacao-hero">
        <div className="preservacao-intro">
          <h1>PRESERVAÇÃO</h1>
          <p>
            Essencial para garantir um futuro sustentável para o planeta.
          </p>
        </div>

        <div className="preservacao-texto">
          Caraguatatuba recebe milhares de visitantes todos os anos, que vêm
          em busca de suas praias, trilhas e belezas naturais. Com o aumento do
          turismo, também surgem impactos no meio ambiente, como o acúmulo de
          lixo e a poluição. <br /> Por isso, preservar esses espaços é importante
          para manter a cidade bonita e saudável para todos.
        </div>
      </section>

      <section className="preservacao-consequencias">
        <div className="consequencias-texto">
          <h2>CONSEQUÊNCIAS</h2>

          <p>
            O crescimento do turismo sem os devidos cuidados pode trazer
            diversas consequências para o meio ambiente e para a cidade,
            como o acúmulo e descarte irregular de lixo, a poluição das
            praias, rios e cachoeiras, a degradação de trilhas e áreas
            naturais, os danos à fauna e à flora, a perda de biodiversidade
            e a contaminação do solo e da água. Esses impactos também podem
            prejudicar a qualidade dos espaços turísticos e afetar a
            experiência de moradores e visitantes.
          </p>
        </div>

        <img
          className="consequencias-imagem"
          src="/images/lixo.jpeg"
        />
      </section>

      <section className="preservacao-cuidados">
        <h2>COMO CUIDAR?</h2>

        <div className="cuidados-lista">
          <article className="cuidado">
            <img
              src="/images/lixeira.jpeg"
            />
            <p>Descarte seu lixo corretamente</p>
          </article>

          <article className="cuidado">
            <img
              src="/images/planta.jpeg"
            />
            <p>Respeite a natureza e seus recursos</p>
          </article>

          <article className="cuidado">
            <img
              src="/images/reciclavel.jpeg"
            />
            <p>Priorize materiais recicláveis</p>
          </article>

          <article className="cuidado">
            <img
              src="/images/trilha.jpeg"
            />
            <p>Preserve as trilhas e áreas naturais</p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Preservacao;