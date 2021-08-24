import React from "react";

function Primeiros(){
    return (
        <>
            <main className="item-container">
                <div className="principal">
                    <div className="primeiros-passos">
                        <h2 className="titulo-principal">Primeiros passos</h2>
                        <p>Dependendo do seu ambiente de aprendizagem, você pode fazer login no Google Sala de Aula com
                            uma das seguintes contas:</p>
                        <ul>
                            <li><strong>Conta escolar</strong>: também chamada de conta do Google Workspace for
                                Education, é criada por uma escola credenciada. O formato é <em>voce@suaescola.edu</em>.
                                Se você não sabe os detalhes da sua conta do Google Workspace for Education, pergunte
                                para o professor ou o administrador de TI da escola.
                            </li>
                            <li><strong>Conta do Google pessoal</strong>: é criada por você ou por seus pais ou
                                responsáveis. Geralmente, uma Conta do Google pessoal é usada fora da escola, como em um
                                grupo de estudos ou na educação domiciliar. O formato é <em>voce@example.com</em>.
                            </li>
                            <li><strong>Conta do Google Workspace</strong>: é criada pelo administrador da sua
                                organização. O formato é <em>voce@suaorganizacao.com</em>.
                            </li>
                        </ul>
                        <p><strong>Observação:</strong> devido à legislação sobre privacidade, os pais e responsáveis
                            não podem acessar o Google Sala de Aula nem as atividades dos alunos. Eles podem receber
                            resumos por e-mail se o professor permitir.</p>
                        <ol>
                            <li>Em <a className="link" href="https://classroom.google.com">classroom.google.com</a>,
                                clique em <strong>Acesse o Google Sala de Aula</strong>.
                            </li>
                            <li>Digite o endereço de e-mail da sua conta do Google Sala de Aula e clique
                                em <strong>Próxima</strong>.
                            </li>
                            <li>Digite sua senha e clique em <strong>Próxima</strong>.</li>
                            <li>Se aparecer uma mensagem de boas-vindas, leia e clique em <strong>Aceitar</strong>.</li>
                            <li>Se você estiver usando uma conta do Google Workspace for Education, clique em <strong>Sou
                                aluno</strong> ou <strong>Sou professor</strong>.<br/>
                                <strong>Dica</strong>: os usuários com uma Conta do Google pessoal não veem essa opção.
                            </li>
                            <li>Clique em <strong>Primeiros passos</strong>.<br/></li>
                        </ol>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Primeiros;