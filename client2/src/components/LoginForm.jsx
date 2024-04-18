import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { loginSuccess, loginFailure } from '../app/store.jsx'; // Relative path
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import {
    createTheme,
    ThemeProvider,
    alpha,
    getContrastRatio,
} from '@mui/material/styles';
import axios from 'axios';

const violetBase = '#7F00FF';
const violetMain = alpha(violetBase, 0.7);
const theme = createTheme({

    palette: {
        primary: {
            main: '#0000FF',
            // light: will be calculated from palette.primary.main,
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            main: '#E0C2FF',
            light: '#F5EBFF',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#47008F',
        },
        violet: {
            main: violetMain,
            light: alpha(violetBase, 0.5),
            dark: alpha(violetBase, 0.9),
            contrastText: getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
        },
    },
});



const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault();


            try {
              // Simulate login (replace with actual authentication logic)
              const response = await axios.post('/api/login', {
                username,
                password,
              });
          
              if (!response.data.success) { // Assuming response has a success property
                throw new Error(response.data.message || 'Login failed'); // Handle specific error message if available
              }
          
              const user = response.data.user; // Assuming response has user data in a 'user' property
              dispatch(loginSuccess(user)); // Update Redux state on success
            } catch (error) {
              dispatch(loginFailure(error.message)); // Update Redux state on error
            }
    };

    return (
        <ThemeProvider theme={theme}>
            <form onSubmit={handleLogin}>


                <Button
                    variant="contained"
                    color="violet"
                    fullWidth
                    startIcon={<GoogleIcon />}
                    sx={{ mt: 1, borderRadius: '50px' }}
                    onClick={() => {
                        // Implement Google sign-in logic (e.g., redirect to Google OAuth)
                        console.warn('Google sign-in not implemented yet');
                    }}
                >
                    Continue With Google
                </Button>
                <Button
                    variant="contained"
                    color="success"
                    fullWidth
                    startIcon={<GitHubIcon />}
                    sx={{ mt: 1, borderRadius: '50px' }}
                    onClick={() => {
                        // Implement GitHub sign-in logic (e.g., redirect to GitHub OAuth)
                        console.warn('GitHub sign-in not implemented yet');
                    }}
                >
                    Continue with Github
                </Button>
                <Divider component="li" />
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
            </form>
        </ThemeProvider>
    );
};

export default LoginForm;
