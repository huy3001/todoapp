import { ITaskType } from 'features/todo/types';

export type TDataState = {
  todos: ITaskType[];
  fetchStatus: string;
};
