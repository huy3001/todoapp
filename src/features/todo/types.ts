import { ConfigType } from 'dayjs';

export interface ITaskType {
  id: string;
  name: string;
  description: string;
  deadline?: ConfigType;
}

export interface ITaskInput {
  taskName: string;
  taskDescription: string;
  taskDeadline?: ConfigType;
}
