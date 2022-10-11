import { Dayjs } from 'dayjs';

export interface ITaskType {
  id: number,
  name: string,
  description: string
  deadline?: Dayjs | any
}

export interface ITaskInput {
  taskName: string,
  taskDescription: string,
  taskDeadline?: Dayjs | any
}
