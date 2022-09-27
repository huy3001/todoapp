import { ADD_TASK, EDIT_TASK, REMOVE_TASK } from './actionTypes';

export const addTask = (id: number, name: string, description: string, deadline: any) => {
  type: ADD_TASK,
  payload: {
    id,
    name,
    description,
    deadline
  }
}

export const editTask = (id: number, name: string, description: string, deadline: any) => {
  type: EDIT_TASK,
  payload: {
    id,
    name,
    description,
    deadline
  }
}

export const removeTask = (id: number) => {
  type: REMOVE_TASK,
  payload: {
    id
  }
}