import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodos } from 'features/todo/selectors';
import { ITaskType } from 'features/todo/types';
import TaskList from 'components/todo/list/TaskList';
import AddTask from 'components/todo/actions/AddTask';

const ToDoList = () => {
  const todos: ITaskType[] = useSelector(selectTodos);

  return (
    <div>
      <TaskList list={todos} />
      <AddTask />
    </div>
  )
}

export default ToDoList;
