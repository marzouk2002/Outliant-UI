import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './../store';
import { AppState, Book } from './app.types';
import { fetchBooks } from './appService';

const initialState: AppState = {
  apiLoading: false,
  data: {
    books: []
  }
};

export const fetchData = createAsyncThunk<
  any,
  { url: string },
  { state: RootState }
>(
  'app/fetchData',
  async ({ url }, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setApiLoading(true));
      const result = await fetchBooks(url as string);
      
      dispatch(setApiLoading(false));
      return  result.data
    } catch (error) {
      dispatch(setApiLoading(false));
      return rejectWithValue(error);
    }
  }
)

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setApiLoading: (state, action: PayloadAction<boolean>) => {
      state.apiLoading = action.payload;
    },
    setData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    setBooks: (state, action: PayloadAction<Book[]>) => {
      state.data.books = action.payload;
    },
    addBook: (state, action: PayloadAction<Book>) => {
      const books = [...state.data.books]
      books.push(action.payload)
      state.data.books = books.sort((a, b) => a.num_pages - b.num_pages)
    },
    removeBook: (state, action: PayloadAction<string>) => {
      const books = [...state.data.books]
      state.data.books = books.filter(book => book.isbn !== action.payload)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchData.fulfilled,
      (state, action: PayloadAction) => {
        state.data.books = action.payload
      }
    );
  },
});

export const selectApiLoading = (state: RootState) => state.app.apiLoading;
export const selectBooks = (state: RootState) => state.app.data.books
export const {
  setApiLoading,
  setData,
  setBooks,
  addBook,
  removeBook
} = appSlice.actions;
export default appSlice.reducer;