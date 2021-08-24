import React, {useState} from "react";

import firebase from '../../config/firebase';
import 'firebase/auth';
import {useDispatch, useSelector} from "react-redux";
import {Link, Redirect} from "react-router-dom";
import $ from 'jquery';

function Login() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [spinner, setSpinner] = useState(false);
    const dispatch = useDispatch();

    function autenticar() {
        if ($('#InputUsuario').val() !== '' && $('#InputSenha').val() !== '') {
            setSpinner(true);
            firebase.auth().signInWithEmailAndPassword(email, senha)
                .then(resultado => {
                    setSpinner(false);
                    alert("Login realizado!");
                    dispatch({type: 'LOGIN', usuarioEmail: email});
                })
                .catch(erro => {
                    setSpinner(false);
                    alert(erro);
                });
        } else {
            alert("Existem campos vazios!")
        }
    }

    return (
        <>
            {
                useSelector(state => state.usuarioLogado) > 0 ? <Redirect to="/"/> : null
            }
            <main className="item-container" id="itemPrincipal">
                <div className="principal">
                    <h2 className="titulo-principal">Entrar</h2>
                    <form name="formLogin">
                        <div className="form-group">
                            <label htmlFor="InputUsuario">Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} name="login" type="email" className="form-control" id="InputUsuario"
                                   placeholder="Digite seu email" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputSenha">Senha</label>
                            <input onChange={(e) => setSenha(e.target.value)} name="senha" type="password" className="form-control" id="InputSenha"
                                   placeholder="Digite sua senha" required/>
                        </div>
                        {
                            spinner ?
                                <button className="btn btn-primary" type="button" disabled>
                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"/>
                                    &nbsp;Carregando...
                                </button>
                                :
                                <button onClick={autenticar} type="button" className="btn btn-primary" id="btnEntrar">Entrar</button>
                        }
                    </form>
                    <div className="help-text">
                        <p className="help-text">Digite seu email e senha para entrar</p>
                        <span>
                            <p className="help-text"><Link to="/cadastro">Cadastrar</Link></p>
                            <p className="help-text"><Link to="/recuperar">Recuperar Senha</Link></p>
                        </span>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Login;