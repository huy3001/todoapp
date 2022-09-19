import React from 'react';
import './App.css';
import Title from './components/Title';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <Title text="Todo App"/>
      <ToDoList/>
    </div>
  );
}

export default App;
