import { ChangeEvent, useEffect, useState } from "react";
import { shallowEqual } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { getMessage } from "./utils";
import {
  getQuoteState,
  clear,
  getQuoteFromAPI,
  getStateRequest,
  filterQuoteFromAPI,
} from "./citaSlice";
import { Input, Container, ValidationErrorMessage, CharacterName, QuoteText } from "./styled";
import { QuoteButton } from "./quoteButton";


export const Quote = () => {

  const [inputValue, setInputValue] = useState("");

  const [regexValidation, setRegexValidation] = useState(false);

  const { quote = "", character = "" } = useAppSelector(getQuoteState, shallowEqual) || {};

  const estadoPedido = useAppSelector(getStateRequest);

  const dispatch = useAppDispatch();

  const onClickShowQuote = () => dispatch(getQuoteFromAPI(inputValue));

  const onClickClear = () => {
    dispatch(clear());
    setInputValue("");
  };

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setTimeout(() => {
      dispatch(filterQuoteFromAPI(e.target.value))
    }, 1000)

    dispatch(clear());
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
      <QuoteText>{getMessage(quote, estadoPedido)}</QuoteText>
      <CharacterName>{character}</CharacterName>
      <Input
        aria-label="personagem"
        value={inputValue}
        // onChange={(e) => setInputValue(e.target.value)}
        onChange={onSearch}
        placeholder="Digite o nome do personagem: Homer, Bart, Lisa, Maggie, Marge..."
      />
      {regexValidation ? <ValidationErrorMessage>Números não são aceitos.</ValidationErrorMessage > : null}

      <QuoteButton
        arialabel={inputValue}
        primaryBtn={true}
        onClick={() => onClickShowQuote()}
      />
      <QuoteButton
        primaryBtn={false}
        onClick={() => onClickClear()}
      />
    </Container>
  );
}
