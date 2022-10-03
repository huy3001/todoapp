import { actionTypes } from 'features/todo/constant';
import formatDate from 'components/FormatDate';
import { findIndex } from 'lodash';
import dayjs from 'dayjs';

const defaultSate = [
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

const taskList = (state: any = defaultSate, action: any) => {
  if (localStorage.hasOwnProperty('newList')) {
    const newList: any = localStorage.getItem('newList');
    state = JSON.parse(newList);
    clearLocalStorage('newList');
  }

  if (localStorage.hasOwnProperty('editedList')) {
    const editedList: any = localStorage.getItem('editedList');
    state = JSON.parse(editedList);
    clearLocalStorage('editedList');
  }

  if (localStorage.hasOwnProperty('updatedList')) {
    const updatedList: any = localStorage.getItem('updatedList');
    state = JSON.parse(updatedList);
    clearLocalStorage('updatedList');
  }

  switch (action.type) {
    case actionTypes.ADD_TASK: {
      const newState = [...state, {
        id: action.id,
        name: action.name,
        description: action.description,
        deadline: action.deadline
      }];
      localStorage.setItem('newList', JSON.stringify(newState));
      return newState;
    }

    case actionTypes.EDIT_TASK: {
      const editedIndex = findIndex([...state], (item: any) => item.id === action.id);
      const editedState = [...state];
      editedState.splice(editedIndex, 1, {
        id: action.id,
        name: action.name,
        description: action.description,
        deadline: action.deadline
      });
      localStorage.setItem('editedList', JSON.stringify(editedState));
      return editedState;
    }

    case actionTypes.REMOVE_TASK: {
      const updatedState = [...state].filter((item: any) => item.id !== action.id);
      localStorage.setItem('updatedList', JSON.stringify(updatedState));
      return updatedState;
    }

    default: {
      return state;
    }
  }
}

export default taskList;