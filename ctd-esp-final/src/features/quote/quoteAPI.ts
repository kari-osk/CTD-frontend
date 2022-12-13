import { API_URL } from "../../app/constants";
import { IQuote} from "./types";

export const getQuoteApi: (character?: string) => Promise<IQuote> = async (
  character
) => {
  if (character && parseInt(character)) {
    throw new Error("O nome deve ser um texto");
  }

  const url = character ? `${API_URL}?character=${character}` : API_URL;
  const resposta = await fetch(url);
  const [data] = await resposta.json();

  const dataNormalizada = {
    quote: data.quote,
    character: data.character,
    image: data.image,
    characterDirection: data.characterDirection,
  };

  return dataNormalizada;
};
