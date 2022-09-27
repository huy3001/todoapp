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
      return [...state, {
        id: action.id,
        name: action.name,
        description: action.description,
        deadline: action.deadline
      }];
    }

    case EDIT_TASK: {
      let editedIndex = findIndex([...state], (item: any) => item.id === action.id);
      return [...state].splice(editedIndex, 1, {
        id: action.id,
        name: action.name,
        description: action.description,
        deadline: action.deadline
      });
    }

    case REMOVE_TASK: {
      return [...state].filter((item: any) => item.id !== action.id);
    }

    default: {
      return state;
    }
  }
}

export default taskList;