import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../img/logo.png';
import {useDispatch, useSelector} from "react-redux";

function NavBar(){
    const dispatch = useDispatch();

    return (
        <header className="item-container">
            <div className="caixa-superior">
                <img src={Logo} className="img-logo-caixa-superior"
                     alt="Logotipo EADúvida" title="Logotipo superior EADúvida"/>
                    <nav>
                        <ul>
                            {
                                useSelector(state => state.usuarioLogado) > 0 ?
                                    <>
                                        <li><Link to="/" className="nav-atual">Início</Link></li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                               role="button" data-toggle="dropdown" aria-haspopup="true"
                                               aria-expanded="false">
                                                Meu Perfil
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <Link className="dropdown-item" to="/perfil">Perfil</Link>
                                                <Link className="dropdown-item" onClick={() => dispatch({type: 'LOGOUT'})}>Sair</Link>
                                            </div>
                                        </li>
                                        <li><Link to="/tutorial">Tutoriais</Link></li>
                                        <li><Link to="/contato">Contato</Link></li>
                                        <li><Link to="/sobre">Sobre</Link></li>
                                    </>
                                    :
                                    <>
                                        <li><Link to="/" className="nav-atual">Início</Link></li>
                                        <li><Link to="/login">Login</Link></li>
                                        <li><Link to="/tutorial">Tutoriais</Link></li>
                                        <li><Link to="/contato">Contato</Link></li>
                                        <li><Link to="/sobre">Sobre</Link></li>
                                    </>
                            }
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