import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import './style/css/principal.css'

/* Páginas */
import Home from './view/home';
import Login from './view/login';

function App() {
  return (
      <>
      <Router>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={Login}/>
      </Router>
      </>
  );
}

export default App;
