import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from 'features/data/reducer';
import { selectData } from 'features/data/selectors';
import { TTaskItem } from 'AppModels';
import TaskList from 'components/todo/list/TaskList';
import AddTask from 'components/todo/actions/AddTask';
import Title from 'components/Title';
import { AnyAction } from 'redux';

const ToDoList = () => {
  const dispatch = useDispatch();
  const todos: TTaskItem[] = useSelector(selectData);

  useEffect(() => {
    dispatch(fetchData('http://localhost:3000/todos') as unknown as AnyAction);
  }, [dispatch]);

  return (
    <div>
      <Title text="Todo List" />
      <TaskList list={todos} />
      <AddTask />
    </div>
  );
};

export default ToDoList;
