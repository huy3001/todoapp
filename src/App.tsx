import React from 'react';
import './App.css';
import Title from './components/Title';
import ToDoList from './components/ToDoList';
import dayjs from 'dayjs';

const date: Date = new Date();

const App = () => {
  return (
    <div className="App">
      <Title text="Todo App" day={dayjs(date)} />
      <ToDoList />
    </div>
  );
}

export default App;
