import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: fit-content;
  margin: 0.5rem 3rem;
  padding: 1rem;
  border: 1px solid darkgrey;
  box-shadow: 4px 4px 5px darkgrey;
  border-radius: 10px;
  background-color: whitesmoke;
`;

export const QuoteText = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin: 1rem auto;
  padding: 1rem;
  min-height: 5rem;
`;


export const ValidationErrorMessage = styled.p`
  font-size: 2rem;
  color: #b82216;
`

export const CharacterName = styled.p`
  font-size: 1.7rem;
  font-weight: bold;
  color: #333;
  margin: 1rem auto;
  padding: 0;
  min-height: 3rem;
`;

export const Input = styled.input`
  width: 90%;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 0 20px;
  font-size: 1.5rem;
  margin: 1rem auto;
  font-family: "Homer Simpson Revised", sans-serif;
`;

export const Button = styled.button<{ secondaryColor?: boolean }>`
  width: 50%;
  min-width: 250px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid darkgray;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  padding: 0 20px;
  margin: 1rem auto;
  font-family: "Homer Simpson Revised", sans-serif;
  font-size: 1.5rem;
  transition: ease-in-out .4s;

  &:hover {
    cursor: pointer;
    filter: brightness(.9);
     border: 1px solid #e1e1e1;
    box-shadow: 0px 0px 5px 0px rgba(255, 253, 253, 10);
  }

  ${(props) =>
    props.secondaryColor
      ? css`
          background-color: #d1b07d;
          color: whitesmoke;
          text-shadow: 2px 2px 0 #000000, 2px -2px 0 #000000, -2px 2px 0 #000000,
            -2px -2px 0 #000000, 2px 0px 0 #000000, 0px 2px 0 #000000,
            -2px 0px 0 #000000, 0px -2px 0 #000000;
        `
      : css`
          background-color: #fdd835;
          color: whitesmoke;
          text-shadow: 2px 2px 0 #000000, 2px -2px 0 #000000, -2px 2px 0 #000000,
            -2px -2px 0 #000000, 2px 0px 0 #000000, 0px 2px 0 #000000,
            -2px 0px 0 #000000, 0px -2px 0 #000000;
        `}
`;
