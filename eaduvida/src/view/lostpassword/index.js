import React from "react";
import {useState} from "react";
import {Redirect} from "react-router-dom";
import firebase from "../../config/firebase";
import 'firebase/auth';
import {useSelector} from "react-redux";

function LostPassword(){
    const [senha, setSenha] = useState();
    const [spinner, setSpinner] = useState(false);

    function recuperar(){
        if(senha) {
            setSpinner(true);
            firebase.auth().sendPasswordResetEmail(senha)
                .then(resultado => {
                    setSpinner(false);
                    alert("Um email de recuperação foi enviado para o seu email");
                })
                .catch(erro => {
                    setSpinner(false);
                    alert(erro);
                });
        } else {
            alert("Campo vazio!")
        }
    }

    return (
        <>
            {
                useSelector(state => state.usuarioLogado) > 0 ? <Redirect to="/"/> : null
            }
            <main className="item-container" id="itemPrincipal">
                <div className="principal">
                    <h2 className="titulo-principal">Recuperar senha</h2>
                    <form name="formLogin">
                        <div className="form-group">
                            <label htmlFor="InputUsuario">Usuário</label>
                            <input onChange={(e) => setSenha(e.target.value)} name="login" type="email" className="form-control" id="InputUsuario"
                                   placeholder="Digite seu email" required/>
                        </div>
                        <button onClick={recuperar} type="button" className="btn btn-primary" id="btnEntrar">Recuperar</button>
                    </form>
                    <div className="help-text">
                        <p className="help-text">Digite seu email para iniciar a recuperação de senha</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default LostPassword;