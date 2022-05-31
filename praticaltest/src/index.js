import { ProvidedFilter } from 'ag-grid-community';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from "react-redux";
import store from './store/store';

ReactDOM.render(
 <BrowserRouter>
  <Provider store={store}>

  <App></App>
  </Provider>
 
    </BrowserRouter>
  ,
  document.getElementById('root')
);


