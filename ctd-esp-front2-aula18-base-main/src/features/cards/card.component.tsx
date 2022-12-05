import { FC } from "react";
import { Character } from "../../types/character.types";

export type CardProps = {
  character: Character;
};

const Card: FC<CardProps> = ({ character }: CardProps) => {
  return (
    <div>
      <h2>{character.name}</h2>
      {
        character.image !== null
          ? <img src={character.image} alt={character.name} />
          : null
      }
      <p>{character.followers} followers</p>
    </div>
  );
};

export default Card;
