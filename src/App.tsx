import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'App.css';
import Home from 'components/Home';
import Login from 'components/Login';
import Register from 'components/Register';

const App = () => {
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Switch>
          <Redirect
            from="home"
            to="/"
            exact
          />
          <Route
            path="/"
            component={Home}
          />
          <Route
            path="/login"
            component={Login}
          />
          <Route
            path="/register"
            component={Register}
          />
        </Switch>
      </LocalizationProvider>
    </div>
  );
};

export default App;
