import React from "react";


// CSS-in-JS

const Container = {
  padding: 124,
  backgroundImage: 'url(../../../public/wallpaper.png)'
}

const Paragraph = {
  lineHeight: 2
}

const Button = {
  padding: 12,
  marginTop: 8,
  marginRight: 8,
  cursor: 'pointer',
  background: 'purple',
  border: 'none',
  color: 'white'
}

const Button1 = {
  padding: 12,
  marginTop: 8,
  marginRight: 8,
  cursor: 'pointer',
  background: 'yellow',
  border: 'none',
  color: 'black'
}


const Banner = () => {
  return (
    <>
      <div style={Container}>
        <h1>Rick and Morty</h1>
        <section>
          <p style={Paragraph}>
            Rick and Morty (em português Rick e Morty) é uma série de animação
            adulta norte-americana de comédia e ficção científica criada por Justin
            Roiland e Dan Harmon para o bloco de programação noturno Adult Swim,
            exibido no canal Cartoon Network.
          </p>
          <button style={Button}>Assistir trailer</button>
          <button style={Button1}>Salvar no favoritos</button>
        </section>
      </div>
    </>
  );
};

export default Banner;
