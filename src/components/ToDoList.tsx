import React, { useState } from 'react';
import formatDate from './FormatDate';
import TaskList from './list/TaskList';
import AddTask from './actions/AddTask';
import { findIndex, filter } from 'lodash';
import dayjs from 'dayjs';

const taskList = [
  {
    id: 1,
    name: 'Homepage',
    description: 'Build homepage',
    deadline: formatDate(dayjs()),
    tag: 'home'
  },
  {
    id: 2,
    name: 'Catalog',
    description: 'Update design for catalog page',
    deadline: formatDate(dayjs()),
    tag: 'catalog'
  },
  {
    id: 3,
    name: 'Product',
    description: 'Fix layout for product page',
    deadline: formatDate(dayjs()),
    tag: 'product'
  },
]

const ToDoList = (props: any) => {
  const [todo, setTodo] = useState(taskList);

  const handleAddTask = (name: string, description: string, deadline: any, tag: string) => {
    // Copy current todo list
    let currentTodo: any = [...todo];

    // Update todo list
    setTodo(todo => ([
      ...currentTodo,
      {
        id: currentTodo.length + 1,
        name: name,
        description: description,
        deadline: deadline,
        tag: tag
      }
    ]))
  }

  const handleEditTask = (id: number, name: string, description: string, deadline: any, tag: string) => {
    // Copy current todo list
    let currentTodo: any = [...todo];

    // Find index of edited task in toDoList
    let editedTaskIndex = findIndex(currentTodo, (item: any) => {
      return item.id === id;
    });

    // Update edited list after edit task
    currentTodo.splice(editedTaskIndex, 1, {
      id: id,
      name: name,
      description: description,
      deadline: deadline,
      tag: tag
    });

    // Update todo list by edited list
    setTodo(currentTodo);
  }

  const handleRemoveTask = (id: number) => {
    // Copy current todo list
    let currentTodo: any = [...todo];

    // Filter updated list after remove task
    let updatedTodo = filter(currentTodo, (item) => {
      return item.id !== id;
    });

    // Update todo list
    setTodo(updatedTodo);
  }

  return (
    <div>
      <TaskList list={todo} onEditTask={handleEditTask} onRemoveTask={handleRemoveTask} />
      <AddTask onAddTask={handleAddTask} />
    </div>
  )
}

export default ToDoList;
