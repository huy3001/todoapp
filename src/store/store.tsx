import { configureStore } from '@reduxjs/toolkit';
import todosSlice from 'features/todo/reducer';
import messageSlice from 'features/user/reducers/message';
import authSlice from 'features/user/reducers/auth';

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
    message: messageSlice.reducer,
    auth: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
