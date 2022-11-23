import React from "react";
import styled from 'styled-components'


// CSS-in-JS
const Container = styled.header`
  background: #000;
`

const Content = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 3rem 0;
  color: #f8f9fa;
  display: grid;
  grid-template-columns: 40% 60%;

  h1 {
    padding-bottom: 1.5rem;
    font-size: 64px;
  }

  p {
    padding: 0 0 1rem;
    line-height: 1.5rem;
  }

`
const Section = styled.section`
  place-self: center;
`

const Button = styled.button`
 background: #02b0c7;
 padding: 1rem;
 transition: filter 0.2s;

 &:hover {
  filter: brightness(0.7);
  cursor: pointer;
 }
`
const ButtonSave = styled.button`
 background: #4fa451;
 padding: 1rem;
 margin-left: .5rem;
 transition: filter 0.2s;

 &:hover {
  filter: brightness(0.7);
  cursor: pointer;
 }
`

const Banner = () => {
  return (
    <Container>
      <Content>
        <h1>Rick and Morty</h1>
        <Section>
          <p>
            Rick and Morty (em português Rick e Morty) é uma série de animação
            adulta norte-americana de comédia e ficção científica criada por Justin
            Roiland e Dan Harmon para o bloco de programação noturno Adult Swim,
            exibido no canal Cartoon Network.
          </p>
          <Button>Assistir trailer</Button>
          <ButtonSave>Salvar no favoritos</ButtonSave>
        </Section>
      </Content>
    </Container>
  );
};

export default Banner;
