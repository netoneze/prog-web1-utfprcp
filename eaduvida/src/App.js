import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import './style/css/principal.css'

/* Páginas */
import Home from './view/home';

function App() {
  return (
      <>
      <Router>
          <Route exact path='/' component={Home}/>
      </Router>
      </>
  );
}

export default App;
