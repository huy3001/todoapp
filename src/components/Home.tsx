import React from 'react';
import Title from 'components/Title';
import ToDoList from 'components/ToDoList';
import formatDate from 'helper/formatDate';

const Home = () => {
  return (
    <div className="Home">
      <Title
        text="Todo App"
        day={formatDate(new Date())}
      />
      <ToDoList />
    </div>
  );
};

export default Home;
