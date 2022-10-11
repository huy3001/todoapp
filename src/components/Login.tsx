import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';

const Login = () => {
  const handleUsername = () => {};

  const handlePassword = () => {};

  const handleLogin = () => {};

  return (
    <div className="Login">
      <Card
        variant="outlined"
        sx={{ width: '400px', mx: 'auto', my: 4, p: 2 }}
      >
        <h1>Sign In</h1>
        <Box
          component="form"
          autoComplete="off"
        >
          <TextField
            id="username"
            label="User Name"
            variant="outlined"
            size="small"
            margin="dense"
            onChange={handleUsername}
            fullWidth
            required
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            size="small"
            margin="dense"
            type="password"
            onChange={handlePassword}
            fullWidth
            required
          />
          <Button
            variant="contained"
            type="submit"
            onClick={handleLogin}
            fullWidth
            sx={{ mt: 1 }}
          >
            Sign In
          </Button>
        </Box>
        <p>Don't have account yet!</p>
        <Link to="/register">Please sign up</Link>
      </Card>
    </div>
  );
};

export default Login;
