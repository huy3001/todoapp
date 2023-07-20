import React from 'react';
// import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
// import { selectAuth } from 'features/user/selectors';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'App.css';
import Home from 'components/Home';
// import LoginPage from 'components/user/pages/LoginPage';
// import RegisterPage from 'components/user/pages/RegisterPage';

const App = () => {
  // const logInStatus = useSelector(selectAuth);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        {/* {!logInStatus.isLoggedIn && <Redirect to="/login" />} */}
        <Switch>
          {/* <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </LocalizationProvider>
  );
}; 

export default App;
