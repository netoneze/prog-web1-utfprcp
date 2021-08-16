import React from 'react';
import NavBar from "../../components/navbar";
function Contato(){
    return (
        <>
            <NavBar />
            <main className="item-container">
                <div className="principal">
                    <div className="contato-form">
                        <h2 className="titulo-principal">Entre em contato</h2>
                        <form action="mailto:netoneze@hotmail.com" method="post" encType="text/plain">
                            <div className="form-group">
                                <label htmlFor="FormControlInputNome">Nome</label>
                                <input type="text" name="Nome" className="form-control" id="FormControlInputNome"
                                       placeholder="Digite seu nome" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="FormControlInputEmail">Email</label>
                                <input type="email" name="Email" className="form-control" id="FormControlInputEmail"
                                       placeholder="Digite seu email" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="FormControlInputAssunto">Assunto</label>
                                <input type="text" name="Assunto" className="form-control" id="FormControlInputAssunto"
                                       placeholder="Digite o assunto" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="FormControlTextareaMensagem">Mensagem</label>
                                <textarea name="Mensagem" className="form-control" id="FormControlTextareaMensagem" rows="3" placeholder="Digite sua mensagem" required/>
                            </div>
                            <button type="submit" value="Submit" className="btn btn-primary">Enviar</button>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Contato;