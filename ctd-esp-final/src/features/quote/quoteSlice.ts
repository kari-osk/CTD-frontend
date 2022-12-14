import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../../app/store";
import { STATE_FETCH } from "./constants";
import { getQuoteApi, 
// getSingleQuoteApi
} from "./quoteAPI";
import { IQuote} from "./types";

export interface StateQuote {
  data: IQuote | null;
  stateQuote: STATE_FETCH;
  // query: Array<string>;

}

const initialState: StateQuote= {
  data: null,
  stateQuote: STATE_FETCH.INACTIVE,
  // query: [],

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


// export const getSingleQuoteAsync = createAsyncThunk(
//   "quote/getSingleQuoteApi",
//   async (character: string) => {
//     try {
//       const responseSingleQuote = await getSingleQuoteApi(character);
//       return responseSingleQuote;
//     } catch (err) {
//       throw err;
//     }
//   }
// );


export const quoteSlice = createSlice({
  name: "citacoes",
  initialState,
  reducers: {
    clear: () => initialState,
    // filterQuote: (state, action) => {
    //   state.query = state.query.filter((query) => query.character === action.payload)
    // },
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
      });
  },
});

export const { clear, 
//filterQuote 
} = quoteSlice.actions;

export const getQuoteFromAPI =
  (character: string) => (dispatch: AppDispatch) => {
    dispatch(getQuoteAsync(character));
    dispatch(clear());
  };


export const filterQuoteFromAPI = (character: string) => (dispatch: AppDispatch)=> {
    dispatch(getQuoteAsync(character));
    dispatch(clear());
}

// export const filterQuoteFromAPI = (character: string) => (dispatch: AppDispatch)=> {
//     dispatch(getSingleQuoteAsync(character));
//     dispatch(clear());
// }


export const getQuoteState = (state: RootState) => state.quote.data;
export const getRequestState = (state: RootState) => state.quote.stateQuote;
// export const getInput = (state: RootState) => state.quote.query;

export default quoteSlice.reducer;
