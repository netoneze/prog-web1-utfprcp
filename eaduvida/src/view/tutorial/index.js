import React from 'react';
import {Link} from "react-router-dom";

function Tutorial(){
    return (
        <>
            <main className="item-container">
                <div className="principal">
                    <div className="tutoriais">
                        <h2 className="titulo-principal">Tutoriais</h2>
                        <div id="accordion">
                            <div className="card">
                                <div className="card-header collapsed btn btn-group btn-light" id="headingOne"
                                     data-toggle="collapse" data-target="#collapseOne" aria-expanded="false"
                                     aria-controls="collapseOne">
                                    <h5 className="mb-0">
                                        Google Classroom
                                    </h5>
                                </div>
                                <div id="collapseOne" className="collapse" aria-labelledby="headingOne"
                                     data-parent="#accordion">
                                    <div className="btn-fechar">
                                        <button className="btn btn-light btn-sm">Fechar</button>
                                    </div>
                                    <div className="card-body">
                                        <span className="badge badge-secondary">Geral</span>
                                        <div className="list-group">
                                            <Link to="/classroom/conhecer"
                                               className="list-group-item list-group-item-action">Conhecer o Google Sala
                                                de Aula</Link>
                                            <Link to="/classroom/primeiros_passos"
                                               className="list-group-item list-group-item-action">Primeiros passos</Link>
                                            <a href="pages/classroom/privacidade.html"
                                               className="list-group-item list-group-item-action">Privacidade, pol??ticas
                                                e abuso</a>
                                        </div>
                                        <br/>
                                        <span className="badge badge-secondary">Alunos</span>
                                        <div className="list-group">
                                            <Link to="/classroom/alunos/participar"
                                               className="list-group-item list-group-item-action">Participar e
                                                organizar suas turmas</Link>
                                            <a href="pages/classroom/entregar_aluno.html"
                                               className="list-group-item list-group-item-action">Entregar e
                                                acompanhar as atividades</a>
                                            <a href="pages/classroom/comunicacao_aluno.html"
                                               className="list-group-item list-group-item-action">Comunica????o com o
                                                professor</a>
                                        </div>
                                        <br/>
                                        <span className="badge badge-secondary">Professores</span>
                                        <div className="list-group">
                                            <Link to="/classroom/professores/criar"
                                               className="list-group-item list-group-item-action">Criar,
                                                participar e organizar suas turmas</Link>
                                            <a href="pages/classroom/criar_atividade.html"
                                               className="list-group-item list-group-item-action">Criar,
                                                acompanhar e atribuir notas ??s atividades</a>
                                            <a href="#" className="list-group-item list-group-item-action">Comunica????o
                                                com a turma e os respons??veis</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header collapsed btn btn-group btn-light" id="headingTwo"
                                     data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                                     aria-controls="collapseTwo">
                                    <h5 className="mb-0">
                                        Google Meet
                                    </h5>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                     data-parent="#accordion">
                                    <div className="btn-fechar">
                                        <button className="btn btn-light btn-sm">Fechar</button>
                                    </div>
                                    <div className="card-body">
                                        <span className="badge badge-secondary">B??sico</span>
                                        <div className="list-group">
                                            <Link to="/meet/iniciar"
                                               className="list-group-item list-group-item-action">Iniciar uma
                                                videochamada</Link>
                                            <a href="pages/meet/participar_videochamada.html"
                                               className="list-group-item list-group-item-action">Participar de uma
                                                videochamada</a>
                                            <a href="pages/meet/adicionar_videochamada.html"
                                               className="list-group-item list-group-item-action">Adicionar pessoas a
                                                uma reuni??o</a>
                                            <a href="#" className="list-group-item list-group-item-action">C??digos de
                                                reuni??o no Google Meet</a>
                                        </div>
                                        <br/>
                                        <span className="badge badge-secondary">Personaliza????o e colabora????o</span>
                                        <div className="list-group">
                                            <a href="#" className="list-group-item list-group-item-action">Personalizar
                                                videochamadas</a>
                                            <a href="#" className="list-group-item list-group-item-action">Compartilhar
                                                recursos em uma videochamada</a>
                                            <a href="#" className="list-group-item list-group-item-action">Transmitir
                                                videochamadas para um grupo grande</a>
                                        </div>
                                        <br/>
                                        <span className="badge badge-secondary">Produtividade</span>
                                        <div className="list-group">
                                            <a href="#" className="list-group-item list-group-item-action">Planejar
                                                e fazer reuni??es em qualquer lugar</a>
                                            <a href="#" className="list-group-item list-group-item-action">Fazer
                                                eventos grandes remotamente</a>
                                            <a href="#" className="list-group-item list-group-item-action">Usar
                                                os atalhos do teclado do Meet</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header collapsed btn btn-group btn-light" id="headingThree"
                                     data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"
                                     aria-controls="collapseThree">
                                    <h5 className="mb-0">
                                        Jamboard
                                    </h5>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                                     data-parent="#accordion">
                                    <div className="btn-fechar">
                                        <button className="btn btn-light btn-sm">Fechar</button>
                                    </div>
                                    <div className="card-body">
                                        <span className="badge badge-secondary">Geral</span>
                                        <div className="list-group">
                                            <Link to="/jamboard/criar"
                                               className="list-group-item list-group-item-action">Crie a salve um
                                                board</Link>
                                            <a href="#" className="list-group-item list-group-item-action">Insira
                                                imagens</a>
                                            <a href="#" className="list-group-item list-group-item-action">Adicione
                                                arquivos</a>
                                            <a href="#" className="list-group-item list-group-item-action">Copie, mova e
                                                delete boards</a>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header collapsed btn btn-group btn-light" id="headingFour"
                                     data-toggle="collapse" data-target="#collapseFour" aria-expanded="false"
                                     aria-controls="collapseFour">
                                    <h5 className="mb-0">
                                        Kahoot!
                                    </h5>
                                </div>
                                <div id="collapseFour" className="collapse" aria-labelledby="headingFour"
                                     data-parent="#accordion">
                                    <div className="btn-fechar">
                                        <button className="btn btn-light btn-sm">Fechar</button>
                                    </div>
                                    <div className="card-body">
                                        <span className="badge badge-secondary">Geral</span>
                                        <div className="list-group">
                                            <Link to="/kahoot/criar"
                                               className="list-group-item list-group-item-action">Criar um kahoot com
                                                perguntas</Link>
                                            <a href="#" className="list-group-item list-group-item-action">Adicionar
                                                imagens e respostas</a>
                                            <a href="#" className="list-group-item list-group-item-action">Como
                                                visualizar, sair e salvar kahoots</a>
                                            <a href="#" className="list-group-item list-group-item-action">Como usar
                                                templates</a>
                                            <a href="#" className="list-group-item list-group-item-action">Como ativar
                                                pontua????o</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span><p className="help-text">Clique para expandir</p></span>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Tutorial;