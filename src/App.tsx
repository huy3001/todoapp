import React from 'react';
import './App.css';

const date: Date = new Date();

function formatDate(date: Date) {
  return date.toDateString();
}

function Title(props: any) {
  return (
    <div className="TitleWrapper">
        <h1 className="Title">{props.title}</h1>
        <h3 className="CurrentDate">
            <span>Today</span>
            &nbsp;
            <small>{formatDate(date)}</small>
        </h3>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Title title="Todo App" />
    </div>
  );
}

export default App;
