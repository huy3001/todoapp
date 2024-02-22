declare module 'AppModels' {
  import { ConfigType } from 'dayjs';

  export type TTaskItem =  {
    id: string;
    name: string;
    description: string;
    deadline?: ConfigType;
  }
  
  export type TTaskInput = {
    taskName: string;
    taskDescription: string;
    taskDeadline?: ConfigType;
  }
}
