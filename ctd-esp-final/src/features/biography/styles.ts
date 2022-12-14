import styled, { css } from 'styled-components'

export const BioContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   width: 100%;
   height: 100%;
`

export const BioImage = styled.img`
   max-width: 200px;
   max-height: 300px;
   margin-bottom: 1rem;
`

export const BioNome = styled.h3`
   font-size: 2em;
   margin-bottom: 1rem;
`

export const BioDescription = styled.p`
   font-size: 1.3em;
   width: 70%;
   margin: 1rem auto;
`

export const ContainerButton = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   width: 100%;
   margin-bottom: 1rem;
`
export interface IProps {
  isActive: boolean;
}

export const BioButton = styled.button<IProps>`
   border-radius: 5px;
   border: 1px solid #000;
   box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
   padding: 1rem;
   margin: 1rem;
   font-family: "Homer Simpson Revised", sans-serif;
   font-size: 1.4rem;
   background-color: #0000ff;
   color: whitesmoke;
   text-shadow: 2px 2px 0 #000000, 2px -2px 0 #000000, -2px 2px 0 #000000,
        -2px -2px 0 #000000, 2px 0px 0 #000000, 0px 2px 0 #000000,
        -2px 0px 0 #000000, 0px -2px 0 #000000;
  
   &:hover {
    cursor: pointer;
    border: 1px solid #e1e1e1;
    box-shadow: 0px 0px 5px 0px rgba(255, 253, 253, 10);
    }

  ${props => props.isActive &&
      css`
        background-color: #fdd835;
        border: 1px solid #fff;
        box-shadow: 0px 0px 5px 0px rgba(255, 253, 253, 10);
      `
   }

`



