//Helping Links:
//	https://www.themoviedb.org/ 
//	https://developers.themoviedb.org/3/getting-started/introduction
//  https://www.youtube.com/watch?v=9Bvt6BFf6_U&list=PLX7mEGqtfnSpsCJB7vpTh5tGY8YqoykbL
//  https://www.youtube.com/watch?v=Y11HewNi3xc 

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

//While using BrowserRouter: When deploying a React application to a subdirectory (https://yadvirkaur.github.io/MovieList/), 
//you need to set the basename prop on the Router component to the subdirectory path.
//In this case, the basename should be set to /MovieList/


//When you deploy a React app with client-side routing (using React Router) to a static hosting service 
//like GitHub Pages, there is a possibility that refreshing the page on a route other than the root route (/) will result in a 404 error. 
//We can HashRouter instead of BrowserRouter as the HashRouter uses the URL hash to keep track of the current 
//location, which allows for page refreshes without resulting in a 404 error.

//Read Documentation: https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing
