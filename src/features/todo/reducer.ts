import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITaskType } from 'features/todo/types';
import formatDate from 'components/FormatDate';
import { findIndex } from 'lodash';
import dayjs from 'dayjs';

let defaultState:ITaskType[] = [
  {
    id: 1,
    name: 'Homepage',
    description: 'Build homepage',
    deadline: formatDate(dayjs())
  },
  {
    id: 2,
    name: 'Catalog',
    description: 'Update design for catalog page',
    deadline: formatDate(dayjs())
  },
  {
    id: 3,
    name: 'Product',
    description: 'Fix layout for product page',
    deadline: formatDate(dayjs())
  },
];

const clearLocalStorage = (item: string) => {
  setTimeout(() => {
    localStorage.removeItem(item);
  }, 500);
}

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
  initialState: defaultState,
  reducers: {
    addTask: (state, action: PayloadAction<ITaskType>) => {
      const newState = [...state, action.payload];
      localStorage.setItem('newList', JSON.stringify(newState));
      return newState;
    },

    editTask: (state, action: PayloadAction<ITaskType>) => {
      const editedIndex = findIndex([...state], (item: any) => item.id === action.payload.id);
      const editedState = [...state];
      editedState.splice(editedIndex, 1, action.payload);
      localStorage.setItem('editedList', JSON.stringify(editedState));
      return editedState;
    },

    removeTask: (state, action: PayloadAction<{ id: number }>) => {
      const updatedState = [...state].filter((item: any) => item.id !== action.payload.id);
      localStorage.setItem('updatedList', JSON.stringify(updatedState));
      return updatedState;
    }
  }
});

export const { addTask, editTask, removeTask } = todosSlice.actions;

export default todosSlice;
