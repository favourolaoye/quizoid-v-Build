import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import store from './store.js';
import {Provider} from "react-redux";
import {ChakraProvider} from "@chakra-ui/react";
// import theme from '../components/theme.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store ={store}>
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
  </Provider>
)
