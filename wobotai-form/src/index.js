import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
// import { ChakraBaseProvider, extendTheme,ColorModeScript  } from '@chakra-ui/react';
const root = ReactDOM.createRoot(document.getElementById('root'));

  // const customLightTheme = extendTheme({
  //   config: {
  //     useSystemColorMode: false, // Disable automatic system color mode detection
  //     initialColorMode: 'light', // Set the initial color mode to light
  //   },
  // });

root.render(
  <App />
  // <ChakraBaseProvider theme={customLightTheme}>
    //*<ColorModeScript initialColorMode="light" /> 
  
     //</ChakraBaseProvider> *
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
