import React, {useState} from "react";

import firebase from '../../config/firebase';
import 'firebase/auth';
import NavBar from "../../components/navbar";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";

function Login() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    const dispath = useDispatch();

    function autenticar() {
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(retultado => {
                alert("Login realizado!");
                dispath({type: 'LOGIN', usuarioEmail: email})
            })
            .catch(erro => {
                alert(erro);
            });
    }

    return (
        <>
            {
                useSelector(state => state.usuarioLogado) > 0 ? <Redirect to="/"/> : null
            }
            <NavBar />
            <main className="item-container" id="itemPrincipal">
                <div className="principal">
                    <h2 className="titulo-principal">Entrar</h2>
                    <form name="formLogin">
                        <div className="form-group">
                            <label htmlFor="InputUsuario">Usuário</label>
                            <input onChange={(e) => setEmail(e.target.value)} name="login" type="email" className="form-control" id="InputUsuario"
                                   placeholder="Digite seu usuário" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputSenha">Senha</label>
                            <input onChange={(e) => setSenha(e.target.value)} name="senha" type="password" className="form-control" id="InputSenha"
                                   placeholder="Digite sua senha" required/>
                        </div>
                        <button onClick={autenticar} type="button" className="btn btn-primary" id="btnEntrar">Entrar</button>
                    </form>
                    <span><p className="help-text">Digite seu usuário e senha para entrar</p></span>
                </div>
            </main>
        </>
    );
}

export default Login;