import React, {useEffect, useState} from "react";
import userImgDefault from '../../img/user.png'
import firebase from "firebase";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import $ from 'jquery';
function Perfil(){

    const [imagem, setImagem] = useState();
    const [nomeUsuario, setNomeUsuario] = useState();
    const [nomeUsuarioBd, setNomeUsuarioBd] = useState();
    const [spinner, setSpinner] = useState(false);

    const storage = firebase.storage();
    const db = firebase.firestore();
    const [imgUsuario, setImgUsuario] = useState();
    const emailUsuario = useSelector(state => state.usuarioEmail);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user){
                firebase.storage().ref('users/' + user.uid + '/profile.jpg').getDownloadURL().then(imgUrl => {
                    setImgUsuario(imgUrl);
                })
            }
        })
        firebase.firestore().collection('usuarios').where('usuarioEmail', '==', emailUsuario).get().then(async (resultado) => {
            await resultado.docs.forEach( doc => {
                setNomeUsuarioBd(doc.data().nome);
            })
        })
    })


    function salvar(){
        if(imagem != null && $('#nome-usuario').val() !== '') {
            setSpinner(true);
            storage.ref('users/' + firebase.auth().currentUser.uid + '/profile.jpg').put(imagem).then(() => {
                return !nomeUsuarioBd ?
                    db.collection('usuarios').add({
                        nome: nomeUsuario,
                        usuarioEmail: emailUsuario,
                        imagem: imagem.name
                    }).then(() => {
                        alert("Modificações salvas com sucesso!");
                        setSpinner(false);
                        return [$('#imagem-usuario')[0].reset(), $('#nome-usuario').val('')];
                    }).catch(erro => {
                        setSpinner(false);
                        alert(erro);
                    })
                    :
                    [alert("apenas imagem modified!"), setSpinner(false)]
            });
        } else {
            alert("Existem campos vazios!")
        }
    }

    return (
        <>
            {
                useSelector(state => state.usuarioLogado) === 0 ? <Redirect to='/'/> : null
            }
            <NavBar />
            <main className="item-container" id="itemPrincipal">
                <div className="principal">
                    <h2 className="titulo-principal">Perfil</h2>
                    <form>
                        <div className="form-group">
                            <div className="text-center">
                                <label className="help-text">Imagem de usuário</label>
                            </div>
                            <img src={imgUsuario ? imgUsuario : userImgDefault} className="img-usuario-perfil img-thumbnail rounded mx-auto d-block" alt="Imagem de usuário"/>
                        </div>
                        <form id="imagem-usuario" className="form-group">
                            <label>Upload de imagem:</label>
                            <input type="file" className="form-control" onChange={(e) => setImagem(e.target.files[0])}/>
                        </form>
                        <div className="form-group">
                            <label htmlFor="InputUsuario">Nome de usuário</label>
                            <input onChange={(e) => setNomeUsuario(e.target.value)} name="nome" type="text" className="form-control" id="nome-usuario"
                                   placeholder="Digite um nome de usuário" value={nomeUsuarioBd ? nomeUsuarioBd : ''} required/>
                        </div>
                        <div className="text-center">
                            {
                                spinner ?
                                    <button className="btn btn-lg btn-primary" type="button" disabled>
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"/>
                                        &nbsp;Carregando...
                                    </button>
                                    :
                                    <button type="button" onClick={salvar} className="btn btn-lg btn-primary my-2" >Salvar</button>
                            }
                        </div>
                    </form>
                    <span><p className="help-text">Personalize seu perfil de usuário</p></span>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Perfil;