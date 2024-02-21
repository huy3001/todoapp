import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ITaskType } from 'features/todo/types';
import { TDataState } from 'features/data/types';
import data from 'data/data.json';

const defaultState: TDataState = {
  todos: [],
  fetchStatus: '',
};

export const fetchData = createAsyncThunk(
  'fetch-data',
  async (apiUrl: string) => {
    const response = await fetch(apiUrl);
    return response.json();
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState: defaultState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchData.fulfilled,
        (state, action: PayloadAction<ITaskType[]>) => {
          state.todos = action.payload;
          state.fetchStatus = 'success';
        }
      )
      .addCase(fetchData.pending, (state) => {
        state.fetchStatus = 'loading';
      })
      .addCase(fetchData.rejected, (state) => {
        state.todos = data.todos;
        state.fetchStatus = 'error';
      });
  },
});

export default dataSlice;
