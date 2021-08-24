import React, {useState} from "react";

import firebase from '../../config/firebase';
import 'firebase/auth';
import $ from "jquery";
function NewUser(){

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    function cadastrar(){
        if ($('#InputUsuario').val() !== '' && $('#InputSenha').val() !== '') {
            firebase.auth().createUserWithEmailAndPassword(email, senha)
                .then(resultado => {
                    alert("Cadastro realizado!");
                })
                .catch(erro => {
                    alert(erro);
                });
        } else {
            alert("Existem campos vazios!");
        }
    }
    return(
        <>
            <main className="item-container" id="itemPrincipal">
                <div className="principal">
                    <h2 className="titulo-principal">Cadastrar</h2>
                    <form name="formLogin">
                        <div className="form-group">
                            <label htmlFor="InputUsuario">Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} name="login" type="email" className="form-control" id="InputUsuario"
                                   placeholder="Digite um email" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputSenha">Senha</label>
                            <input onChange={(e) => setSenha(e.target.value)} name="senha" type="password" className="form-control" id="InputSenha"
                                   placeholder="Digite uma senha" required/>
                        </div>
                        <button onClick={cadastrar} type="button" className="btn btn-primary" id="btnEntrar">Cadastrar</button>
                    </form>
                    <span><p className="help-text">Digite um email e senha para fazer o cadastro</p></span>
                </div>
            </main>
        </>
    )
}

export default NewUser;