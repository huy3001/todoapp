import { actionTypes } from './constant';
import formatDate from '../../components/FormatDate';
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
    case actionTypes.ADD_TASK: {
      return [...state, {
        id: action.id,
        name: action.name,
        description: action.description,
        deadline: action.deadline
      }];
    }

    case actionTypes.EDIT_TASK: {
      let editedIndex = findIndex([...state], (item: any) => item.id === action.id);
      let editedState = [...state];
      editedState.splice(editedIndex, 1, {
        id: action.id,
        name: action.name,
        description: action.description,
        deadline: action.deadline
      });
      return editedState;
    }

    case actionTypes.REMOVE_TASK: {
      return [...state].filter((item: any) => item.id !== action.id);
    }

    default: {
      return state;
    }
  }
}

export default taskList;