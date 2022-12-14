import {
  STATE_FETCH,
  INVALID_NAME,
  LOADING_MSG,
  NOT_FOUND,
} from "./constants";

export const getMessage: (
  quote: string,
  requestState: STATE_FETCH
) => string = (quote, requestState) => {
  if (requestState === STATE_FETCH.LOADING) {
    return LOADING_MSG;
  }

  if (requestState === STATE_FETCH.ERROR) {
    return INVALID_NAME;
  }

  return quote ? `${quote}` : NOT_FOUND;
};
