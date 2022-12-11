import {
  STATE_FETCH,
  INVALID_NAME,
  LOADING_MSG,
  NOT_FOUND,
} from "./constants";

export const getMessage: (
  cita: string,
  estadoPedido: STATE_FETCH
) => string = (cita, estadoPedido) => {
  if (estadoPedido === STATE_FETCH.CARREGANDO) {
    return LOADING_MSG;
  }

  if (estadoPedido === STATE_FETCH.ERROR) {
    return INVALID_NAME;
  }

  return cita ? `${cita}` : NOT_FOUND;
};
