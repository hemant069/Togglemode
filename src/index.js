import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from './Context/Themecontext';
import { ColorModeScript } from '@chakra-ui/react';
import theme from './Components/Theme';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
<ChakraProvider>
  <BrowserRouter>
  <ColorModeScript initialColorMode={theme.config.initialColorMode} />
  <App />
  </BrowserRouter>
  
 
</ChakraProvider>
</ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
