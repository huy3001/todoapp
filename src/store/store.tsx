import { configureStore } from '@reduxjs/toolkit';
import dataSlice from 'features/data/reducer';
import todosSlice from 'features/todo/reducer';
import messageSlice from 'features/user/reducers/message';
import authSlice from 'features/user/reducers/auth';
import { apiSlice } from 'store/query';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    data: dataSlice.reducer,
    todos: todosSlice.reducer,
    message: messageSlice.reducer,
    auth: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
