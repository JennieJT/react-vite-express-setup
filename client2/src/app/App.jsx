import { useState } from 'react'
import axios from "axios";
import './App.css'
import LoginForm from '../components/LoginForm';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
      fontFamily: 'Georgia', // Change this to your desired font
    },
  });


function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState();
  const urlWithProxy = `${import.meta.env.VITE_API}/v1`;

  function getDataFromServer() {
    axios
      .get(urlWithProxy)
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
   
      <div className="card">
      <h2> ∞ Infinity Hope ∞ </h2>
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
      </div>
      <div className="login-form-container">
      <ThemeProvider theme = {theme}>
      <LoginForm />
      </ThemeProvider>
      </div>
      <div className="card">
      <button onClick={getDataFromServer}>Access server using proxy</button>
      <p>data : {data}</p>
    
    </div>
    </>
  )
}

export default App
