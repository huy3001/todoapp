import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Redirect from="home" to="/" exact />
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
