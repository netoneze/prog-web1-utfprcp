import React from "react";

function Criar(){
    return (
        <>
            <main className="item-container">
                <div className="principal">
                    <div className="criar-jam">
                        <h2 className="titulo-principal">Criar e salvar uma board</h2>
                        <p>Você pode criar e salvar Jams em um Jamboard, nos aplicativos móveis ou com um navegador da
                            web. Suas alterações são salvas automaticamente em sua conta.</p>

                        <h2 data-outlined="false" className="">Salve uma jam do aplicativo móvel</h2>

                        <ol>
                            <li>Abra o <strong>Jamboard app</strong>.</li>
                            <li>Toque em adicionar <img
                                src="//storage.googleapis.com/support-kms-prod/lDcYIDwZfrMMHxMEgPTaCpNbz2sLpfCOEhjk"
                                width="18" height="18" alt="&quot;&quot;" title="&quot;&quot;"
                                data-mime-type="image/svg+xml"/>.</li>
                        </ol>

                        <p>Seu jam automaticamente é salvo em sua conta.</p>

                        <h2>Salve um jam do computador</h2>

                        <ol>
                            <li>Em uma janela de navegador, abra <a href="https://jamboard.google.com/" target="_blank"
                                                                    rel="noopener" className="link">Jamboard</a>.
                            </li>
                            <li>No topo direio, clique em novo jam <img
                                src="//storage.googleapis.com/support-kms-prod/lDcYIDwZfrMMHxMEgPTaCpNbz2sLpfCOEhjk"
                                width="18" height="18" alt="&quot;&quot;" title="&quot;&quot;"
                                data-mime-type="image/svg+xml"/>.</li>
                        </ol>

                        <p>Seu jam automaticamente é salvo em sua conta.</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Criar;