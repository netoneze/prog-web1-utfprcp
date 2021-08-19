import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../img/logo.png';
import {useSelector} from "react-redux";

function NavBar(){
    return (
        <header className="item-container">
            <div className="caixa-superior">
                <img src={Logo} className="img-logo-caixa-superior"
                     alt="Logotipo EADúvida" title="Logotipo superior EADúvida"/>
                    <nav>
                        <ul>
                            <li><Link to="/" className="nav-atual">Início</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/tutorial">Tutoriais</Link></li>
                            <li><Link to="/contato">Contato</Link></li>
                            <li><Link to="/sobre">Sobre</Link></li>
                        </ul>
                    </nav>
            </div>
            <div className="nomeUsuarioTopo">
                <p>{useSelector(state => state.usuarioEmail)}</p>
            </div>
        </header>
    )
}

export default NavBar;