import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import './style/css/principal.css'

/* Páginas */
import Home from './view/home';
import Login from './view/login';
import Contato from './view/contato';
import Tutorial from './view/tutorial';
import Sobre from './view/sobre';

function App() {
  return (
      <>
      <Router>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/contato' component={Contato}/>
          <Route exact path='/tutorial' component={Tutorial}/>
          <Route exact path='/sobre' component={Sobre}/>
      </Router>
      </>
  );
}

export default App;
