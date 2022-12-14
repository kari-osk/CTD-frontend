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
} from "./quoteSlice";
import { Input, Container, ValidationErrorMessage, CharacterName, QuoteText } from "./styled";


// Component Quote possui um campo onde o usuário pode digitar o nome do personagem dos Simpsons e ter uma citação como resposta.
// Ao digitar o nome no campo, o filtro com a pesquisa na API é ativado.
// Clicando no botão "Obter citação aleatória" é mostrado uma citação;
// Clicando no botão "Apagar" o campo e a citação são apagados.


export const Quote = () => {

  const [inputValue, setInputValue] = useState("");

  const [regexValidation, setRegexValidation] = useState(false);

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
    setTimeout(() => {
      dispatch(getQuoteFromAPI(inputValue))
    }, 500)
    dispatch(clear());
  }


  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 8) {
      dispatch(clear());
      setInputValue("");
    }
  }

  useEffect(() => {
    const regex = /^[a-zA-Z]*$/
    if (regex.test(inputValue)) {
      setRegexValidation(false)
    } else {
      setRegexValidation(true)
    }
  }, [inputValue])


  return (
    <Container aria-label="form" onSubmit={(e) => e.preventDefault()}>
      <QuoteText>{getMessage(quote, requestState)}</QuoteText>
      <CharacterName>{character}</CharacterName>
      <Input
        aria-label="personagem"
        placeholder="Digite o nome do personagem: Homer, Bart, Lisa, Maggie, Marge..."
        value={inputValue}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
      />

      {regexValidation ? <ValidationErrorMessage>Números não são aceitos.</ValidationErrorMessage > : null}

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
