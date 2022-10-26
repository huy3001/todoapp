import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { clearMessage } from 'features/user/reducers/message';
import { selectAuth, selectMessage } from 'features/user/selectors';
import { AppDispatch } from 'store/store';
import Login from 'components/user/forms/Login';
import Alert from '@mui/material/Alert';

const LoginPage = () => {
  const logInStatus = useSelector(selectAuth);
  // const message = useSelector(selectMessage);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage);
  }, [dispatch]);

  return (
    <div className="LoginPage">
      {logInStatus.isLoggedIn && <Redirect to="/" />}
      <Login />
      {/* {message && <Alert severity="error">{message}</Alert>} */}
    </div>
  );
};

export default LoginPage;
