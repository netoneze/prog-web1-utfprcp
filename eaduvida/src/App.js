import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import './style/css/principal.css'
import {Provider} from "react-redux";
import {store, persistor} from "./store";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import {PersistGate} from "redux-persist/integration/react";

/* Páginas */
import Home from './view/home';
import Login from './view/login';
import Contato from './view/contato';
import Tutorial from './view/tutorial';
import Sobre from './view/sobre';
import NewUser from "./view/newUser";
import LostPassword from "./view/lostpassword";
import Perfil from "./view/perfil";
import Conhecer from "./view/tutorial/classroom/geral/conhecer";
import CriarClassroom from "./view/tutorial/classroom/professores/criar";
import Participar from "./view/tutorial/classroom/alunos/participar";
import PrimeirosPassos from "./view/tutorial/classroom/geral/primeiros_passos";
import CriarKahoot from "./view/tutorial/kahoot/criar";
import CriarJamboard from "./view/tutorial/jamboard/geral/criar";
import Iniciar from "./view/tutorial/meet/basico/iniciar";


function App() {
  return (
      <>
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <Router>
                  <NavBar />
                  <Route exact path='/' component={Home}/>
                  <Route exact path='/login' component={Login}/>
                  <Route exact path='/contato' component={Contato}/>
                  <Route exact path='/tutorial' component={Tutorial}/>
                  <Route exact path='/sobre' component={Sobre}/>
                  <Route exact path='/cadastro' component={NewUser}/>
                  <Route exact path='/recuperar' component={LostPassword}/>
                  <Route exact path='/perfil' component={Perfil}/>
                  <Route exact path='/classroom/conhecer' component={Conhecer}/>
                  <Route exact path='/classroom/primeiros_passos' component={PrimeirosPassos}/>
                  <Route exact path='/classroom/professores/criar' component={CriarClassroom}/>
                  <Route exact path='/classroom/alunos/participar' component={Participar}/>
                  <Route exact path='/kahoot/criar' component={CriarKahoot}/>
                  <Route exact path='/jamboard/criar' component={CriarJamboard}/>
                  <Route exact path='/meet/iniciar' component={Iniciar}/>
                  <Footer />
              </Router>
          </PersistGate>
      </Provider>
      </>
  );
}

export default App;
