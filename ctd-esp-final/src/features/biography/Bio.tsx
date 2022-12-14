import { useState } from "react";
import { NomesSimpsons, INFO_SIMPSONS } from "./constants";
import { BioContainer, ContainerButton, BioImage, BioNome, BioDescription, BioButton } from "./styles";

// Componente Bio apresenta cinco botões com os nomes dos principais personagens de Simpsons. Ao clicar no nome é mostrado a descrição e a imagem do personagem. 


export const Bio = () => {
  const [bioActive, setBioActive] = useState(INFO_SIMPSONS[NomesSimpsons.BART]);

  const onClick: (nome: NomesSimpsons) => void = (nome) => setBioActive(INFO_SIMPSONS[nome]);

  const criarBotoes = () => {
    return Object.keys(INFO_SIMPSONS).map((nome: string) => (
      <BioButton
        isActive={bioActive.id === nome ? true : false}
        onClick={() => onClick(nome as NomesSimpsons)}
      >
        {nome}
      </BioButton>
    ));
  };

  return (
    <BioContainer >
      <ContainerButton>{criarBotoes()}</ContainerButton>
      <div>
        <div>
          <BioImage
            src={bioActive.image}
            alt={bioActive.nome}
          />
        </div>
        <div>
          <BioNome>{bioActive.nome}</BioNome>
          <BioDescription>{bioActive.description}</BioDescription>
        </div>
      </div>
    </BioContainer>
  );
};
