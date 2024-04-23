import { useState } from 'react'
import axios from "axios";
import './App.css'
import LoginForm from '../pages/LoginForm';
import Main from '../pages/Main';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { RouterProvider, Route, 
  createBrowserRouter, createRoutesFromElements } from 'react-router-dom';


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path = "/" element = {<Main/>}>
    <Route path = "signin" element = {<LoginForm/>} />
    </Route>
  ));

  return (
    <>
     <RouterProvider router = {router} />
    </>
  )
}

export default App
