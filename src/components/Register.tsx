import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';

const Register = () => {
  const handleUsername = () => {

  }

  const handleEmail = () => {

  }

  const handlePassword = () => {

  }

  const handleRegister = () => {

  }

  return (
    <div className="Register">
      <Card 
        variant="outlined"
        sx={{ width: '400px', mx: 'auto', my: 4, p: 2 }}
      >
        <h1>Sign Up</h1>
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
            fullWidth required
          />
          <TextField 
            id="email" 
            label="Email" 
            variant="outlined" 
            size="small"
            margin="dense"
            type="email"
            onChange={handleEmail} 
            fullWidth required
          />
          <TextField 
            id="password" 
            label="Password" 
            variant="outlined" 
            size="small"
            margin="dense"
            type="password"
            onChange={handlePassword} 
            fullWidth required
          />
          <Button 
              variant="contained"
              type="submit" 
              onClick={handleRegister}
              fullWidth
              sx={{ mt: 1 }}
          >
            Sign Up
          </Button>
        </Box>
        <p>Already have account!</p>
        <Link to="/login">Back to sign in</Link>
      </Card>
    </div>
  )
}

export default Register;