import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { selectCurrentUser, selectIsLoggedIn } from "../features/session/sessionSlice";
import { useSelector } from 'react-redux';
import { createTheme } from '@mui/material/styles';
import Header from "./Header.jsx";
import MyAccordion from './MyAccordion.jsx';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
    typography: {
        fontFamily: 'Georgia', // Change this to your desired font
    },
     //shadows: ["none"]
});


const Main = () => {
    //const currentUser = useSelector(selectCurrentUser)
    const loggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectCurrentUser);

    return (
        <ThemeProvider theme={theme} >
            <Header />

            <div className='main-container'>
                <div className='left-container'>
                    <MyAccordion />
                </div>
                <div className="right-container">
                    <h1>Infinite Hope</h1>
                    {(loggedIn) ? <>
                        <h2>Welcome, {user.username}</h2>
                        <Outlet />
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    </>

                        :
                        <>
                            <Navigate to="/signin" />
                           
                        </>
                    }
                </div>
            </div>
        </ThemeProvider>
    );
}

export default Main