import { ChangeEvent, useState } from "react";
import { shallowEqual } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  getQuoteState,
  clear,
  getQuoteFromAPI,
  getStateRequest,
  // filterQuote,
  getInput,
  getQuoteAsync,
  filterQuoteFromAPI,
} from "./citaSlice";
import { getMessage } from "./utils";
import { Botao, Input, AutorCita, ContainerCita, TextoCita } from "./styled";


export const Quote = () => {

  const [inputValue, setInputValue] = useState("");

  const { quote = "", character = "" } = useAppSelector(getQuoteState, shallowEqual) || {};

  const estadoPedido = useAppSelector(getStateRequest);

  const getInputState = useAppSelector(getInput)

  const dispatch = useAppDispatch();

  const onClickShowQuote = () => dispatch(getQuoteFromAPI(inputValue));

  const onClickClear = () => {
    dispatch(clear());
    setInputValue("");
  };


  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    // dispatch(filterQuote(e.target.value));
    dispatch(filterQuoteFromAPI(e.target.value))
    setInputValue(e.target.value);
    dispatch(clear());
  }



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
