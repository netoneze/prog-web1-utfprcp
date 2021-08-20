import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import './style/css/principal.css'
import {Provider} from "react-redux";
import store from "./store";

/* Páginas */
import Home from './view/home';
import Login from './view/login';
import Contato from './view/contato';
import Tutorial from './view/tutorial';
import Sobre from './view/sobre';
import NewUser from "./view/newUser";
import LostPassword from "./view/lostpassword";
import Perfil from "./view/perfil";
function App() {
  return (
      <>
      <Provider store={store}>
      <Router>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/contato' component={Contato}/>
          <Route exact path='/tutorial' component={Tutorial}/>
          <Route exact path='/sobre' component={Sobre}/>
          <Route exact path='/cadastro' component={NewUser}/>
          <Route exact path='/recuperar'component={LostPassword}/>
          <Route exact path='/perfil' component={Perfil}/>
      </Router>
      </Provider>
      </>
  );
}

export default App;
