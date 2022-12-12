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
import { Botao, Input, AutorCita, ContainerCita, TextoCita, ValidationErrorMessage } from "./styled";


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
    <ContainerCita aria-label="form" onSubmit={(e) => e.preventDefault()}>

      <TextoCita>{getMessage(quote, estadoPedido)}</TextoCita>
      <AutorCita>{character}</AutorCita>
      <Input
        aria-label="Autor da citação."
        value={inputValue}
        // onChange={(e) => setInputValue(e.target.value)}
        onChange={onSearch}
        placeholder="Digite o autor: Homer, Bart, Lisa, Maggie, Marge..."
      />

      {regexValidation ? <ValidationErrorMessage>Números não são aceitos.</ValidationErrorMessage > : null}

      <Botao
        aria-label={inputValue ? "Obter citação" : "Obter citação aleatória"}
        onClick={onClickShowQuote}
      >
        {inputValue ? "Obter citação" : "Obter citação aleatória"}
      </Botao>
      <Botao aria-label="Apagar" onClick={onClickClear} secondary={true}>
        Apagar
      </Botao>
    </ContainerCita>
  );
}
