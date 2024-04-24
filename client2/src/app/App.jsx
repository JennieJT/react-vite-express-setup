import { useState } from 'react'
import axios from "axios";
import './App.css'
import LoginForm from '../pages/LoginForm';
import Main from '../pages/Main';
import Programming from '../pages/NavContent/Programming';
import Networking from '../pages/NavContent/Networking';
import LinkedIn from '../pages/NavContent/LinkedIn';
import MockInterviews from '../pages/NavContent/MockInterviews';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { RouterProvider, Route, 
  createBrowserRouter, createRoutesFromElements } from 'react-router-dom';


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path = "/" element = {<Main/>}>
    <Route path = "signin" element = {<LoginForm/>} />
    <Route path = "programming" element = {<Programming/>} />
    <Route path = "networking" element = {<Networking/>} />
    <Route path = "linkedInProfile" element = {<LinkedIn/>} />
    <Route path = "mockInterviews" element = {<MockInterviews/>} />
    </Route>
  ));

  return (
    <>
     <RouterProvider router = {router} />
    </>
  )
}

export default App
