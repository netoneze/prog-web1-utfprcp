import React from 'react';
import {Link} from "react-router-dom";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
function Sobre(){
    return (
        <>
            <NavBar />
            <main className="item-container">
                <div className="principal">
                    <div className="sobre">
                        <h2 className="titulo-principal">Sobre o Projeto</h2>
                        <p>
                            &nbsp; O objetivo do projeto é ajudar os usuários em algumas das plataformas mais utilizadas
                            no momento, através de
                            tutoriais simplificados obtidos diretamente da documentação oficial dos softwares.
                        </p>
                        <br/>
                        <p>
                            &nbsp; O projeto foi idealizado pelo aluno Nelson Antonio Neto Toneze para a disciplina
                            de Programação Web 1,
                            ministrada pelo professor Henrique Yoshikazu Shishido, do curso de Engenharia de
                            Software da Universidade Tecnológica Federal do Paraná.
                        </p>
                        <br/>
                        <p>
                            &nbsp; Os tutoriais aqui expostos foram estabelecidos baseados nas funcionalidades
                            mais utilizadas em geral, caso alguma
                            funcionalidade que seja considerada importante não esteja listada, entre em contato
                            através do link abaixo.
                            <div className="alert alert-info" role="alert">
                                <Link to='/contato' class='linkContato'>Clique aqui para entrar em contato</Link>.
                            </div>
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Sobre;