import React from 'react';
import Title from './Title';
import ToDoList from './ToDoList';
import formatDate from './FormatDate';
import dayjs from 'dayjs';

const Home = () => {
  return (
    <div className="Home">
      <Title text="Todo App" day={formatDate(dayjs())} />
      <ToDoList />
    </div>
  )
}

export default Home;