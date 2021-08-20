import React, {useState} from "react";
import User from '../../img/user.png'
import firebase from "firebase";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
function Perfil(){

    const [imagem, setImagem] = useState();

    const storage = firebase.storage();
    const db = firebase.firestore();

    function cadastrarImagemUsuario(){
        storage.ref(`imagens/${imagem.name}`).put(imagem).then(() => {
            alert("Imagem salva com sucesso!");
        }).catch(erro => {
            alert(erro);
        })
    }
    return (
        <>
            <NavBar />
            <main className="item-container" id="itemPrincipal">
                <div className="principal">
                    <h2 className="titulo-principal">Perfil</h2>
                    <div className="form-group">
                        <div className="text-center">
                            <label className="help-text">Imagem de usuário</label>
                        </div>
                        <img src={User} className="img-usuario-perfil img-thumbnail rounded mx-auto d-block" alt="Imagem de usuário"/>
                    </div>
                    <div className="form-group">
                        <label>Upload de imagem:</label>
                        <input type="file" className="form-control" onChange={(e) => setImagem(e.target.files[0])}/>
                        <button onClick={cadastrarImagemUsuario} type="button" className="btn btn-primary my-2" id="btnEntrar">Fazer upload</button>
                    </div>
                    <span><p className="help-text">Personalize seu perfil de usuário</p></span>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Perfil;