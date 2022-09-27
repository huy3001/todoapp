import { ADD_TASK, EDIT_TASK, REMOVE_TASK } from './actionTypes';
import formatDate from '../components/FormatDate';
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

const taskList = (state: any = defaultSate, action: any) => {
  switch (action.type) {
    case ADD_TASK: {
      let {newTask}: any = action.payload;
      return [...state, newTask];
    }

    case EDIT_TASK: {
      let {editedTask}: any = action.payload;
      let editedIndex = findIndex([...state], (item: any) => item.id === action.payload.id);
      return [...state].splice(editedIndex, 1, editedTask);
    }

    case REMOVE_TASK: {
      return [...state].filter((item: any) => item.id !== action.payload.id);
    }

    default: {
      return state;
    }
  }
}

export default taskList;