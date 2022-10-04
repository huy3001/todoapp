import { configureStore } from '@reduxjs/toolkit';
import todosSlice from 'features/todo/reducer';

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer
  }
})

export default store;