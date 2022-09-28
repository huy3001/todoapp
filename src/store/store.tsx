import { configureStore } from '@reduxjs/toolkit';
import taskList from '../features/todo/reducer';

const store = configureStore({
  reducer: {
    todos: taskList
  }
})

export default store;