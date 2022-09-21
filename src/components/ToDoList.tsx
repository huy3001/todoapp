import React, { useState } from 'react';
import TaskList from './list/TaskList';
import AddTask from './actions/AddTask';
import dayjs from 'dayjs';

const date: Date = new Date();

const taskList = [
  {
    id: 1,
    name: 'Homepage',
    description: 'Build homepage',
    deadline: dayjs(date),
    tag: 'home'
  },
  {
    id: 2,
    name: 'Catalog',
    description: 'Update design for catalog page',
    deadline: dayjs(date),
    tag: 'catalog'
  },
  {
    id: 3,
    name: 'Product',
    description: 'Fix layout for product page',
    deadline: dayjs(date),
    tag: 'product'
  },
]

const ToDoList = (props: any) => {
  const [todo, setTodo] = useState(taskList);

  const handleAddTask = (name: string, description: string, deadline: any, tag: string) => {
    // Copy current todo list
    let currentTodo: any = [...todo];

    // Update todo list
    // useState(todo => ({
    //   ...currentTodo,
    //   id: currentTodo.length + 1,
    //   name: name,
    //   description: description,
    //   deadline: deadline,
    //   tag: tag
    // }))
  }

  return (
    <div>
      <TaskList list={todo} />
      <AddTask />
    </div>
  )
}

export default ToDoList;
