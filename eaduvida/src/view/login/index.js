import React, {useState} from "react";

import firebase from '../../config/firebase';
import 'firebase/auth';

function Login() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    function autenticar() {
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(retultado => {
                alert("Login realizado!");
            })
            .catch(erro => {
                alert(erro);
            });
    }

    return (
        <div className="App">
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter email"/>
                    <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                    <button onClick={autenticar} type="button" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Login;