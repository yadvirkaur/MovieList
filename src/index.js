//Helping Links:
//	https://www.themoviedb.org/ 
//	https://developers.themoviedb.org/3/getting-started/introduction
//  https://www.youtube.com/watch?v=9Bvt6BFf6_U&list=PLX7mEGqtfnSpsCJB7vpTh5tGY8YqoykbL
//  https://www.youtube.com/watch?v=Y11HewNi3xc 

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/MovieList">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

//When deploying a React application to a subdirectory (https://yadvirkaur.github.io/MovieList/), 
//you need to set the basename prop on the Router component to the subdirectory path.
//In this case, the basename should be set to /MovieList/