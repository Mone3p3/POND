
import './css/landing.css';
import './css/perfil.css';
import './css/settings.css';
import ExternalProfilePosts from './externalProfilePosts';
import MoverAlInicio from './moverAlInicio';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function PerfilAjeno(){

    const [siguiendo, setSiguiendo] = useState('noSiguiendo');

    return(
        <div className='background'>
            <MoverAlInicio/>
            <div className='lateral-pf'>
                <div className="ajustes-icon-container">
                    <Link id='back-perfil' to={'/'}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--text)">
                            <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/>
                        </svg>
                    </Link>
                </div>
            </div>
            <div className='lateral-pf'></div>
            <div className='main-central pt-2'>
                <div className='perfil-banner'>
                    <img className="banner" src="images/estanque2.jpg" alt="banner" id="banner"/>
                    <img className="pfp" src="images/sapoPfp.jpg" alt="profilePicture" id="pfp" />
                    {siguiendo === 'noSiguiendo' ? (
                        <button onClick={() => setSiguiendo('siguiendo')} className="follow-profile-btn">Seguir</button>
                    ) : (
                        <button onClick={() => setSiguiendo('noSiguiendo')} className="following-profile-btn">Siguiendo</button>
                    )}
                </div>


                <section className="user-desc">
                    <div className="user-desc-left">
                        <div className='d-flex flex-row gap-2'>
                            <h1 className="user-desc-name">Sapooo</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="var(--text)" className='pb-2' id="destacado_icon">
                                <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/>
                            </svg>
                        </div>
                            <p className="user-desc-at">@QuackDigoRibbit</p>
                            <p className="user-desc-bio" readOnly id="bio-input" readonly rows="4">Soy el señor sapo, tengo hambre gente</p>
                    </div>
                    <div className="user-desc-right">
                        <div className="user-desc-meta">
                            <div>Entró el 8 de agosto de 2024</div>
                            <div>24 años</div>
                            <div>Español</div>
                        </div>
                    </div>
                </section>

                <div>
                    <ExternalProfilePosts/>
                </div>


            </div>
            <div className='lateral-pf'></div>
            <div className='lateral-pf'></div>
        </div>
    )
        
    


}

export default PerfilAjeno;