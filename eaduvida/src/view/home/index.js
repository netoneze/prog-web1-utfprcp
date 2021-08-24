import React from 'react';
import LogoClassRoom from '../../img/google-classroom-logo-1.png';
import LogoMeet from '../../img/google-meet-logo-1.png';
import LogoJamboard from '../../img/jamboard-logo-1.png';
import LogoKahoot from '../../img/kahoot-logo-1.png';

function Home(){
    return (
        <>
            <main className="item-container">
                <div className="principal">
                    <div className="saudacoes-principal">
                        <h3>Olá, essas são as plataformas de aprendizado com tutoriais disponíveis no momento</h3>
                    </div>
                    <div className="plataformas-principal">
                        <div className="plataformas-principal-classroom">
                            <p className="texto-plataformas-principal">
                                <img src={LogoClassRoom} className="img-plataformas-principal"
                                     alt="Google Classroom" title="Logotipo Google Classroom"/>
                                    Google Classroom é um sistema de gerenciamento de conteúdo para escolas que procuram
                                    simplificar a
                                    criação, a distribuição e a avaliação de trabalhos.
                            </p>
                        </div>
                        <div className="plataformas-principal-meet">
                            <p className="texto-plataformas-principal">
                                <img src={LogoMeet} className="img-plataformas-principal"
                                     alt="Google Meet" title="Logotipo Google Meet"/>
                                    Google Meet é um serviço de comunicação por vídeo desenvolvido pelo Google.
                            </p>
                        </div>
                        <div className="plataformas-principal-jamboard">
                            <p className="texto-plataformas-principal">
                                <img src={LogoJamboard} className="img-plataformas-principal" alt="Jamboard"
                                     title="Logotipo Jamboard"/>
                                    O Jamboard é um quadro interativo desenvolvido pelo Google, como parte da família G
                                    Suite.
                            </p>
                        </div>
                        <div className="plataformas-principal-kahoot">
                            <p className="texto-plataformas-principal">
                                <img src={LogoKahoot} className="img-plataformas-principal" alt="Kahoot"
                                     title="Logotipo Kahoot"/>
                                    Kahoot! é uma plataforma de aprendizado baseada em jogos, usada como tecnologia
                                    educacional em escolas e outras instituições de ensino.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home;