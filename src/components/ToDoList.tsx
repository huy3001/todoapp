import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodos } from 'features/todo/selectors';
import TaskList from 'components/todo/list/TaskList';
import AddTask from 'components/todo/actions/AddTask';

const ToDoList = () => {
  const todos: [] = useSelector(selectTodos);

  return (
    <div>
      <TaskList list={todos} />
      <AddTask />
    </div>
  )
}

export default ToDoList;
