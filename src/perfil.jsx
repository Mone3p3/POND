
import './css/landing.css';
import './css/perfil.css';
import './css/settings.css';
import ProfilePosts from './profilePosts';
import MoverAlInicio from './moverAlInicio';
import PerfilEditar from './perfilEditar';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const userInfo = [
    {
        username: "Patatero",
        arroba: "@aloba",
        userImage: "images/estanque2.jpg",
        userBanner: "images/estanque.jpg",
        description: "Mmm patatas",
        fecha: "1/Ene/2026",
        edad: "26",
        pais: "Mexico"
    }
];

function Perfil(){

    const [usuario, setUsuario] = useState(userInfo[0]);

    const [editarAbierto, setEditarAbierto] = useState(false);
    const [editarCerrando, setEditarCerrando] = useState(false);

    const abrirEditar = () => {
        setEditarAbierto(true);
        setEditarCerrando(false);
    };

    const cerrarEditar = () => {
        setEditarCerrando(true);
        setTimeout(() => {
            setEditarAbierto(false);
            setEditarCerrando(false);
        }, 250);
    };

    useEffect(() => {
        document.body.style.overflow = editarAbierto ? 'hidden' : 'auto';
        return () => { document.body.style.overflow = 'auto'; };
    }, [editarAbierto]);


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
                <div className='perfil-banner' >
                    <img className="banner" src={usuario.userBanner} alt="banner" id="banner"/>
                    <img className="pfp" src={usuario.userImage} alt="profilePicture" id="pfp" />
                    <button className="edit-btn" onClick={abrirEditar}>Editar perfil</button>
                </div>


                <section className="user-desc">
                    <div className="user-desc-left">
                        <div className='d-flex flex-row gap-2'>
                            <h1 className="user-desc-name">{usuario.username}</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="var(--text)" className='pb-2' id="destacado_icon">
                                <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/>
                            </svg>
                        </div>
                            <p className="user-desc-at">{usuario.arroba}</p>
                            <p className="user-desc-bio" readOnly id="bio-input" readonly rows="4">{usuario.description}</p>
                    </div>
                    <div className="user-desc-right">
                        <div className="user-desc-meta">
                            <div>Entró el {usuario.fecha}</div>
                            <div>{usuario.edad} años</div>
                            <div>{usuario.pais}</div>
                        </div>
                    </div>
                </section>

                <div>
                    <ProfilePosts/>
                </div>

            </div>
            <div className='lateral-pf'></div>
            <div className='lateral-pf'></div>

            {editarAbierto  && (
                <PerfilEditar usuario={usuario} onGuardar={(nuevos) => setUsuario(prev => ({ ...prev, ...nuevos }))} cerrarCrear={cerrarEditar} cerrandoCrear={editarCerrando} />
            )}

        </div>
    )
        
    


}

export default Perfil;