import React from 'react';
import { useSelector } from 'react-redux';
import TaskList from './list/TaskList';
import AddTask from './actions/AddTask';

const ToDoList = (props: any) => {
  const todo = useSelector((state: any) => state.todos);

  return (
    <div>
      <TaskList list={todo} />
      <AddTask />
    </div>
  )
}

export default ToDoList;
