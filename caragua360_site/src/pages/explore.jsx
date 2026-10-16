import './explore.css';

const categorias = [
  { id: 'praias', nome: 'praias', img: '/images/praias.png', alt: 'Praias' },
  { id: 'pontos', nome: 'pontos', img: '/images/pontos.png', alt: 'Pontos turísticos' },
  { id: 'atividades', nome: 'atividades', img: '/images/atividades.png', alt: 'Atividades' },
  { id: 'onde-comer', nome: 'onde comer', img: '/images/ondecomer.png', alt: 'Onde comer' },
  { id: 'hospedagem', nome: 'hospedagem', img: '/images/hospedagem.png', alt: 'Hospedagem' },
];

// Cada seção usa o mesmo layout (grade de 4 colunas, igual a "Praias").
// Troque as imagens/nomes dos itens de atividades, onde comer e hospedagem
// quando tiver as fotos reais.
const secoes = [
  {
    id: 'praias',
    titulo: 'PRAIAS',
    itens: [
      { nome: 'Martim de Sá', img: '/images/martin.png' },
      { nome: 'Praia Brava', img: '/images/brava.png' },
      { nome: 'Praia da Freira', img: '/images/freira.png' },
      { nome: 'Cocanha', img: '/images/cocanha.png' },
      { nome: 'Massaguaçu', img: '/images/massagua.png' },
      { nome: 'Mococa', img: '/images/mococa.png' },
      { nome: 'Prainha', img: '/images/prainha.png' },
      { nome: 'Tabatinga', img: '/images/tabatinga.png' },
    ],
  },
  {
    id: 'pontos',
    titulo: 'PONTOS TURÍSTICOS',
    itens: [
      { nome: 'Morro Santo Antônio', img: '/images/morro.png' },
      { nome: 'Camaroeiro', img: '/images/camaroeiro.png' },
      { nome: 'Parque Trombini', img: '/images/mac.png' },
      { nome: 'MACC', img: '/images/macc.png' },
      { nome: 'Morro Santo Antônio', img: '/images/morro.png' },
      { nome: 'Camaroeiro', img: '/images/camaroeiro.png' },
      { nome: 'Parque Trombini', img: '/images/mac.png' },
      { nome: 'MACC', img: '/images/macc.png' }
    ],
  },
  {
    id: 'atividades',
    titulo: 'ATIVIDADES',
    itens: [
      { nome: 'Atividade 1', img: '/images/atividades.png' },
      { nome: 'Atividade 2', img: '/images/atividades.png' },
      { nome: 'Atividade 3', img: '/images/atividades.png' },
      { nome: 'Atividade 4', img: '/images/atividades.png' },
      { nome: 'Atividade 1', img: '/images/atividades.png' },
      { nome: 'Atividade 2', img: '/images/atividades.png' },
      { nome: 'Atividade 3', img: '/images/atividades.png' },
      { nome: 'Atividade 4', img: '/images/atividades.png' }
    ],
  },
  {
    id: 'onde-comer',
    titulo: 'ONDE COMER',
    itens: [
      { nome: 'Restaurante 1', img: '/images/ondecomer.png' },
      { nome: 'Restaurante 2', img: '/images/ondecomer.png' },
      { nome: 'Restaurante 3', img: '/images/ondecomer.png' },
      { nome: 'Restaurante 4', img: '/images/ondecomer.png' },
       { nome: 'Restaurante 1', img: '/images/ondecomer.png' },
      { nome: 'Restaurante 2', img: '/images/ondecomer.png' },
      { nome: 'Restaurante 3', img: '/images/ondecomer.png' },
      { nome: 'Restaurante 4', img: '/images/ondecomer.png' }
    ],
  },
  {
    id: 'hospedagem',
    titulo: 'HOSPEDAGEM',
    itens: [
      { nome: 'Hospedagem 1', img: '/images/hospedagem.png' },
      { nome: 'Hospedagem 2', img: '/images/hospedagem.png' },
      { nome: 'Hospedagem 3', img: '/images/hospedagem.png' },
      { nome: 'Hospedagem 4', img: '/images/hospedagem.png' },
      { nome: 'Hospedagem 1', img: '/images/hospedagem.png' },
      { nome: 'Hospedagem 2', img: '/images/hospedagem.png' },
      { nome: 'Hospedagem 3', img: '/images/hospedagem.png' },
      { nome: 'Hospedagem 4', img: '/images/hospedagem.png' }
    ],
  },
];

function Explore() {
  return (
    <main className="explore-pagina">
      <section className="explore-interesses">
        <h2>QUAL SEU INTERESSE HOJE?</h2>

        <div className="explore-categorias">
          {categorias.map((cat) => (
            <a href={`#${cat.id}`} key={cat.id}>
              <img src={cat.img} alt={cat.alt} />
              <span>{cat.nome}</span>
            </a>
          ))}
        </div>
      </section>

      {secoes.map((secao) => (
        <section className="explore-secao" id={secao.id} key={secao.id}>
          <h2>{secao.titulo}</h2>

          <div className="explore-grade">
            {secao.itens.map((item, i) => (
              <div className="explore-card" key={`${item.nome}-${i}`}>
                <img src={item.img} alt={item.nome} />
                <span>{item.nome}</span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

export default Explore;
