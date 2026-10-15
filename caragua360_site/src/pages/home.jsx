export default function Home() {
    return (
        <main>
            {/* Banner principal */}
            <section className="hero">
                <div className="hero-conteudo">
                    <h1>DESCUBRA<br />CARAGUATATUBA</h1>
                    <p>
                        Caragua360 é o seu guia para descobrir as melhores experiências
                        <br />
                        da capital do Litoral Norte
                    </p>
                    <a href="/explore" className="botao-claro">
                        Comece a explorar
                    </a>
                </div>
            </section>

            {/* A cidade */}
            <section className="cidade">
                <div className="cidade-texto">
                    <h2>A CIDADE</h2>
                    <p>
                        Caraguatatuba está localizada no Litoral Norte de São Paulo, entre a Serra do Mar e o Oceano Atlântico. Conhecida por suas belas praias e pela rica biodiversidade da Mata Atlântica, a cidade oferece diversas opções de lazer, como trilhas, cachoeiras e passeios. Além das belezas naturais, Caraguatatuba também se destaca por sua cultura caiçara, gastronomia e eventos, tornando-se um destino turístico completo.
                    </p>
                </div>

                <img
                    src="/images/garca.png"
                    alt="Paisagem natural de Caraguatatuba"
                    className="cidade-imagem"
                />
            </section>

            {/* Destinos */}
            <section className="destino">
                <div className="destino-conteudo">
                    <h2>ENCONTRE UM NOVO DESTINO</h2>
                    <a href="/explore" className="botao-azulescuro">
                        surpreenda-se
                    </a>
                    <p className="legendaFoto">Foto: Ilha do Tamanduá</p>
                </div>
            </section>

            {/* Experiências */}
            <section className="experiencias">
                <h2>VIVA NOVAS EXPERIÊNCIAS</h2>
                <img
                    src="/images/macc.png"
                    alt="Museu de Arte e Cultura de Caraguatatuba"
                    className="experiencias-imagem"
                />
                <p className="legenda">
                    Exposição “Carrelli - O tom de uma vida inteira”, no Macc
                </p>
                <a href="/eventos" className="botao-azul">
                    Conhecer
                </a>
            </section>
        </main>
    );
}
