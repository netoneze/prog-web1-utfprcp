import React from 'react';
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
function Tutorial(){
    return (
        <>
            <NavBar />
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
                                            <a href="pages/classroom/conhecer.html"
                                               className="list-group-item list-group-item-action">Conhecer o Google Sala
                                                de Aula</a>
                                            <a href="pages/classroom/primeiros_passos.html"
                                               className="list-group-item list-group-item-action">Primeiros passos</a>
                                            <a href="pages/classroom/privacidade.html"
                                               className="list-group-item list-group-item-action">Privacidade, políticas
                                                e abuso</a>
                                        </div>
                                        <br/>
                                        <span className="badge badge-secondary">Alunos</span>
                                        <div className="list-group">
                                            <a href="pages/classroom/participar_aluno.html"
                                               className="list-group-item list-group-item-action">Participar e
                                                organizar suas turmas</a>
                                            <a href="pages/classroom/entregar_aluno.html"
                                               className="list-group-item list-group-item-action">Entregar e
                                                acompanhar as atividades</a>
                                            <a href="pages/classroom/comunicacao_aluno.html"
                                               className="list-group-item list-group-item-action">Comunicação com o
                                                professor</a>
                                        </div>
                                        <br/>
                                        <span className="badge badge-secondary">Professores</span>
                                        <div className="list-group">
                                            <a href="pages/classroom/criar_turma.html"
                                               className="list-group-item list-group-item-action">Criar,
                                                participar e organizar suas turmas</a>
                                            <a href="pages/classroom/criar_atividade.html"
                                               className="list-group-item list-group-item-action">Criar,
                                                acompanhar e atribuir notas às atividades</a>
                                            <a href="#" className="list-group-item list-group-item-action">Comunicação
                                                com a turma e os responsáveis</a>
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
                                        <span className="badge badge-secondary">Básico</span>
                                        <div className="list-group">
                                            <a href="pages/meet/iniciar_chamada.html"
                                               className="list-group-item list-group-item-action">Iniciar uma
                                                videochamada</a>
                                            <a href="pages/meet/participar_videochamada.html"
                                               className="list-group-item list-group-item-action">Participar de uma
                                                videochamada</a>
                                            <a href="pages/meet/adicionar_videochamada.html"
                                               className="list-group-item list-group-item-action">Adicionar pessoas a
                                                uma reunião</a>
                                            <a href="#" className="list-group-item list-group-item-action">Códigos de
                                                reunião no Google Meet</a>
                                        </div>
                                        <br/>
                                        <span className="badge badge-secondary">Personalização e colaboração</span>
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
                                                e fazer reuniões em qualquer lugar</a>
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
                                            <a href="pages/jamboard/criar_jam.html"
                                               className="list-group-item list-group-item-action">Crie a salve um
                                                board</a>
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
                                            <a href="pages/kahoot/criar_kahoot.html"
                                               className="list-group-item list-group-item-action">Criar um kahoot com
                                                perguntas</a>
                                            <a href="#" className="list-group-item list-group-item-action">Adicionar
                                                imagens e respostas</a>
                                            <a href="#" className="list-group-item list-group-item-action">Como
                                                visualizar, sair e salvar kahoots</a>
                                            <a href="#" className="list-group-item list-group-item-action">Como usar
                                                templates</a>
                                            <a href="#" className="list-group-item list-group-item-action">Como ativar
                                                pontuação</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span><p className="help-text">Clique para expandir</p></span>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Tutorial;