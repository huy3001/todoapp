import { configureStore } from '@reduxjs/toolkit';
import taskList from '../features/reducer';

const store = configureStore({
  reducer: {
    todos: taskList
  }
})

export default store;