import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { loginSuccess, loginFailure } from '../app/store.jsx'; // Relative path
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Simulate login (replace with actual authentication logic)
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const user = await response.json();
      dispatch(loginSuccess(user)); // Update Redux state on success
    } catch (error) {
      dispatch(loginFailure(error.message)); // Update Redux state on error
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <TextField
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        margin="normal"
        fullWidth
        required
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
        fullWidth
        required
      />
      <Button variant="contained" type="submit" color="primary" fullWidth sx={{ mt: 2 }}>
        Login
      </Button>
      <Button
        variant="contained"
        color="secondary"
        fullWidth
        startIcon={<GoogleIcon />}
        sx={{ mt: 1 }}
        onClick={() => {
          // Implement Google sign-in logic (e.g., redirect to Google OAuth)
          console.warn('Google sign-in not implemented yet');
        }}
      >
        Google Sign In
      </Button>
      <Button
        variant="contained"
        color = "success"
        fullWidth
        startIcon={<GitHubIcon />}
        sx={{ mt: 1 }}
        onClick={() => {
          // Implement GitHub sign-in logic (e.g., redirect to GitHub OAuth)
          console.warn('GitHub sign-in not implemented yet');
        }}
      >
        GitHub Sign In
      </Button>
    </form>
  );
};

export default LoginForm;
