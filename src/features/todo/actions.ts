import { actionTypes } from './constant';

export const addTask = (id: number, name: string, description: string, deadline: any) => ({
  type: actionTypes.ADD_TASK,
  id,
  name,
  description,
  deadline
})

export const editTask = (id: number, name: string, description: string, deadline: any) => ({
  type: actionTypes.EDIT_TASK,
  id,
  name,
  description,
  deadline
})

export const removeTask = (id: number) => ({
  type: actionTypes.REMOVE_TASK,
  id
})