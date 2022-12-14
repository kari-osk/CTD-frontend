import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../../app/store";
import { STATE_FETCH } from "./constants";
import { getQuoteApi} from "./quoteAPI";
import { IQuote} from "./types";

export interface StateQuote {
  data: IQuote | null;
  stateQuote: STATE_FETCH;
}

const initialState: StateQuote= {
  data: null,
  stateQuote: STATE_FETCH.INACTIVE,
};


export const getQuoteAsync = createAsyncThunk(
  "quote/getQuoteApi",
  async (character: string) => {
    try {
      const responseQuote = await getQuoteApi(character);
      return responseQuote;
    } catch (err) {
      throw err;
    }
  }
);


export const quoteSlice = createSlice({
  name: "citacoes",
  initialState,
  reducers: {
    clear: () => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getQuoteAsync.pending, (state) => {
        state.stateQuote = STATE_FETCH.LOADING;
      })
      .addCase(getQuoteAsync.fulfilled, (state, action) => {
        state.stateQuote = STATE_FETCH.INACTIVE;
        state.data = action.payload;
      })
      .addCase(getQuoteAsync.rejected, (state) => {
        state.stateQuote = STATE_FETCH.ERROR;
      })
  },
});


export const { clear } = quoteSlice.actions;

export const getQuoteFromAPI =
  (character: string) => (dispatch: AppDispatch) => {
    dispatch(getQuoteAsync(character));
    dispatch(clear());
  };


export const getQuoteState = (state: RootState) => state.quote.data;
export const getRequestState = (state: RootState) => state.quote.stateQuote;

export default quoteSlice.reducer;
