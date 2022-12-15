import { ChangeEvent, useEffect, useState } from "react";
import { shallowEqual } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { getMessage } from "./utils";
import { QuoteButton } from "./quoteButton";
import {
  getQuoteState,
  clear,
  getQuoteFromAPI,
  getRequestState,
  filterQuoteFromAPI,
} from "./quoteSlice";
import { Input, Container, ValidationErrorMessage, CharacterName, QuoteText } from "./styled";


// Component Quote possui um campo onde o usuário pode digitar o nome do personagem dos Simpsons e ter uma citação como resposta.
// Ao digitar o nome no campo, o filtro com a pesquisa na API é ativado.
// Clicando no botão "Obter citação aleatória" é mostrado uma citação;
// Clicando no botão "Apagar" o campo e a citação são apagados.


export const Quote = () => {

  const [inputValue, setInputValue] = useState("");

  const [regexIsValid, setRegexIsValid] = useState(true);

  const { quote = "", character = "" } = useAppSelector(getQuoteState, shallowEqual) || {};

  const requestState = useAppSelector(getRequestState);

  const dispatch = useAppDispatch();

  const onClickShowQuote = () => dispatch(getQuoteFromAPI(inputValue));

  const onClickClear = () => {
    dispatch(clear());
    setInputValue("");
  };


  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (regexIsValid === true) {
      setTimeout(() => {
        dispatch(filterQuoteFromAPI(inputValue))
      }, 1000)
    }
  }


  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 8) {
      dispatch(clear());
      setInputValue("");
    }
  }

  useEffect(() => {
    const regex = /^[A-Za-z]*$/i
    if (regex.test(inputValue)) {
      setRegexIsValid(true)
    } else {
      setRegexIsValid(false)
    }
  }, [inputValue])


  return (
    <Container>
      <QuoteText>{getMessage(quote, requestState)}</QuoteText>
      <CharacterName>{character}</CharacterName>
      {
        regexIsValid
          ? null
          : <ValidationErrorMessage>Números não são aceitos.</ValidationErrorMessage>
      }
      <Input
        aria-label="personagem"
        placeholder="Digite o nome do personagem: Homer, Bart, Lisa, Maggie, Marge..."
        value={inputValue}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
      />
      <QuoteButton
        arialabel={inputValue}
        primaryButton={true}
        onClick={() => onClickShowQuote()}
      />
      <QuoteButton
        primaryButton={false}
        onClick={() => onClickClear()}
      />
    </Container>
  );
}
