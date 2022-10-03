import { Dayjs } from 'dayjs';

export interface ITaskType {
  task: {
    id: number,
    name: string,
    description: string
    deadline?: Dayjs | any
  }
}

export interface ITaskInput {
  taskName: string,
  taskDescription: string,
  taskDeadline?: Dayjs | any
}