import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../img/logo.png';
import {useDispatch, useSelector} from "react-redux";
import userImgDefault from '../../img/user.png';
import firebase from "firebase";
function NavBar(){
    const dispatch = useDispatch();
    const usuarioLogado = useSelector(state => state.usuarioLogado);
    const emailUsuario = useSelector(state => state.usuarioEmail);
    const [nomeUsuario, setNomeUsuario] = useState();
    const [imgUsuario, setImgUsuario] = useState();

    useEffect(() => {
        if (firebase.auth().currentUser){
            firebase.storage().ref('users/' + firebase.auth().currentUser.uid + '/profile.jpg').getDownloadURL().then(imgUrl => {
                setImgUsuario(imgUrl);
            })
        }
        firebase.firestore().collection('usuarios').where('usuarioEmail', '==', emailUsuario).get().then(async (resultado) => {
            await resultado.docs.forEach( doc => {
                setNomeUsuario(doc.data().nome);
            })
        })
    })

    return (
        <header className="item-container">
            <div className="caixa-superior row">
                <img src={Logo} className="img-logo-caixa-superior"
                     alt="Logotipo EADúvida" title="Logotipo superior EADúvida"/>
                    <nav>
                        <ul>
                            <li className="nomeUsuarioTopo">
                                {
                                    usuarioLogado > 0 ?
                                        <span className="spanNomeUsuario mx-1">{nomeUsuario ? nomeUsuario : emailUsuario}</span>
                                        :
                                        <span className="spanNomeUsuario mx-1">Você não está logado</span>
                                }
                                <br/>
                                <img className="img-thumbnail img-usuario-perfil-canto" src={imgUsuario ? imgUsuario : userImgDefault} alt="Imagem de usuário" title="Imagem de perfil do usuário"/>
                            </li>
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
                                                <Link className="dropdown-item" onClick={() => [dispatch({type: 'LOGOUT'}), window.location.reload()]}>Sair</Link>
                                            </div>
                                        </li>
                                        <li><Link to="/tutorial">Tutoriais</Link></li>
                                        <li><Link to="/contato">Contato</Link></li>
                                        <li><Link to="/sobre">Sobre</Link></li>
                                    </>
                                    :
                                    <>
                                        <li><Link to="/">Início</Link></li>
                                        <li><Link to="/login">Login</Link></li>
                                        <li><Link to="/tutorial">Tutoriais</Link></li>
                                        <li><Link to="/contato">Contato</Link></li>
                                        <li><Link to="/sobre">Sobre</Link></li>
                                    </>
                            }
                        </ul>
                    </nav>
            </div>
        </header>
    )
}

export default NavBar;