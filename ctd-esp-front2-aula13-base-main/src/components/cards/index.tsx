import React, { useState, useEffect } from "react";
import styled from 'styled-components'

// CSS-in-JS

const Container = styled.div`
  padding: 2rem;

  h2 {
    margin-bottom: 2rem;
    text-align: center;
  }
`
const Section = styled.section`
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;

  article {
    margin-bottom: 1rem;
  }
`

interface GenderTypeProps {
  genderType: string;
}

const Gender = styled.h3<GenderTypeProps>`
  color: ${(props) => (props.genderType === 'Male' ? '#1e1fcd' : '#b82216')};
`

interface CharacterProps {
  id: number;
  image: string;
  name: string;
  gender: string;
}

const Character = () => {
  const [character, setCharacter] = useState<CharacterProps[]>([]);

  useEffect(() => {
    const fetchCharacter = () =>
      fetch(`https://rickandmortyapi.com/api/character`)
        .then((response) => response.json())
        .then((character) => {
          setCharacter(character.results);
        });
    fetchCharacter();
  }, []);

  return (
    <Container>
      <h2>Alguns personagens da série</h2>
      <Section>
        {character.map((data: CharacterProps) => {
          return (
            <article key={data.id}>
              <img src={data.image} alt={data.name} />
              <div>
                <h3>{data.name}</h3>
                <Gender genderType={data.gender}>{data.gender}</Gender>
              </div>
            </article>
          );
        })}
      </Section>
    </Container>
  );
};

export default Character;
