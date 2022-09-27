import React from 'react';
import './App.css';
import Title from './components/Title';
import ToDoList from './components/ToDoList';
import formatDate from './components/FormatDate';
import dayjs from 'dayjs';

const App = () => {
  return (
    <div className="App">
      <Title text="Todo App" day={formatDate(dayjs())} />
      <ToDoList />
    </div>
  );
}

export default App;
