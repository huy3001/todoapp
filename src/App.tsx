import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'App.css';
import Home from 'components/Home';
import LoginPage from 'components/user/pages/LoginPage';
import RegisterPage from 'components/user/pages/RegisterPage';

const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </LocalizationProvider>
  );
};

export default App;
