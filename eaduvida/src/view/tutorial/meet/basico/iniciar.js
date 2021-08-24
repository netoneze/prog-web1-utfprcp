import React from "react";

function Iniciar(){
    return (
        <>
            <main className="item-container">
                <div className="principal">
                    <div className="iniciar-chamada">
                        <h2 className="titulo-principal">Iniciar uma chamada</h2>
                        <ol>
                            <li>​<a href="https://meet.google.com" className="link">Acesse o Google Meet</a>.</li>
                            <li>Clique em <strong>Nova reunião</strong>.</li>
                            <li>Selecione uma opção:
                                <ul>
                                    <li><strong>Criar uma reunião para depois</strong>:
                                        <ul>
                                            <li>Para compartilhar os detalhes de uma reunião futura, copie o link da
                                                reunião e compartilhe com os participantes.
                                            </li>
                                            <li>Para iniciar uma reunião com este link, cole-o em um navegador ou digite
                                                o link no campo "Digite um código ou link" <img
                                                    src="//lh3.googleusercontent.com/3_l97rr0GvhSP2XV5OoCkV2ZDTIisAOczrSdzNCBxhIKWrjXjHucxNwocghoUa39gw=w36-h36"
                                                    width="18" height="18" alt="e" title="e" data-mime-type="image/png"
                                                    data-alt-src="//lh3.googleusercontent.com/3_l97rr0GvhSP2XV5OoCkV2ZDTIisAOczrSdzNCBxhIKWrjXjHucxNwocghoUa39gw"/> clique
                                                    em <strong>Participar</strong>.</li>
                                        </ul>
                                    </li>
                                    <li><strong>Iniciar uma reunião instantânea</strong>: crie uma reunião para você
                                        participar agora.&nbsp;</li>
                                    <li><strong>Programar no Google Agenda</strong>: se quiser agendar uma reunião, essa
                                        opção direcionará você para o <a href="https://calendar.google.com/calendar/"
                                                                         className="link"><u>Google Agenda</u></a>.
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Iniciar;