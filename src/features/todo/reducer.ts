import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TTaskItem } from 'AppModels';
import axiosClient from 'api/axiosClient';
import findIndex from 'lodash/findIndex';
import data from 'data/data.json';

let defaultState = data.todos;

const clearLocalStorage = (item: string) => {
  setTimeout(() => {
    localStorage.removeItem(item);
  }, 500);
};

if (localStorage.hasOwnProperty('newList')) {
  const newList: any = localStorage.getItem('newList');
  defaultState = JSON.parse(newList);
  clearLocalStorage('newList');
}

if (localStorage.hasOwnProperty('editedList')) {
  const editedList: any = localStorage.getItem('editedList');
  defaultState = JSON.parse(editedList);
  clearLocalStorage('editedList');
}

if (localStorage.hasOwnProperty('updatedList')) {
  const updatedList: any = localStorage.getItem('updatedList');
  defaultState = JSON.parse(updatedList);
  clearLocalStorage('updatedList');
}

const todosSlice = createSlice({
  name: 'todos',
  initialState: defaultState as TTaskItem[],
  reducers: {
    addTask: (state, action: PayloadAction<TTaskItem>) => {
      const newState = [...state, action.payload];
      localStorage.setItem('newList', JSON.stringify(newState));
      axiosClient.post('todos', action.payload);
      return newState;
    },

    editTask: (state, action: PayloadAction<TTaskItem>) => {
      const editedIndex = findIndex(
        [...state],
        (item: any) => item.id === action.payload.id
      );
      const editedState = [...state];
      editedState.splice(editedIndex, 1, action.payload);
      localStorage.setItem('editedList', JSON.stringify(editedState));
      axiosClient.put(`todos/${action.payload.id}`, action.payload);
      return editedState;
    },

    removeTask: (state, action: PayloadAction<{ id: string }>) => {
      const updatedState = [...state].filter(
        (item: any) => item.id !== action.payload.id
      );
      localStorage.setItem('updatedList', JSON.stringify(updatedState));
      axiosClient.delete(`todos/${action.payload.id}`);
      return updatedState;
    },
  },
});

export const { addTask, editTask, removeTask } = todosSlice.actions;

export default todosSlice;
