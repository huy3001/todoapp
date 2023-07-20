import React from 'react';
import Title from 'components/Title';
import ToDoList from 'components/ToDoList';
import formatDate from 'components/FormatDate';
import TutorialList from 'components/tutorial/list/TutorialList';
import dayjs from 'dayjs';

const Home = () => {
  return (
    <div className="Home">
      <Title
        text="Todo App"
        day={formatDate(dayjs())}
      />
      <ToDoList />
      <TutorialList />
    </div>
  );
};

export default Home;
