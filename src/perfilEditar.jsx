
import './css/perfilEditar.css'
import { useState, useRef } from 'react';



function PerfilEditar({usuario, onGuardar, cerrarCrear, cerrandoCrear}){

    const [imagen, setImagen] = useState(null);
    const [banner, setBanner] = useState(null);
    const inputImagen = useRef(null);
    const inputBanner = useRef(null);
    const cargarImagen = (e, actual, setActual) => {
        const archivo = e.target.files[0];

        if (archivo && archivo.type.startsWith('image/')) {
            if (actual) URL.revokeObjectURL(actual);
            setActual(URL.createObjectURL(archivo));
        }

        e.target.value = '';
    };

    const [username, setUsername] = useState(usuario.username);
    const [description, setDescription] = useState(usuario.description);
    const [edad, setEdad] = useState(usuario.edad);
    const [pais, setPais] = useState(usuario.pais);

    const guardar = () => {
        onGuardar({
            username, 
            description, 
            edad, 
            pais,
            userImage: imagen || usuario.userImage,
            userBanner: banner || usuario.userBanner,
        });
        window.dispatchEvent(new CustomEvent('mostrar-mensaje', { detail: 'Cambios realizados' }));
        cerrarCrear();
    };
        
    /*--- Mensaje Overlay --------------------------------------------------------*/

        
    return(
        <>
        <div className={`crear-bg ${cerrandoCrear ? 'cerrando' : ''}`} onClick={cerrarCrear}>
            <div className={`editar-container ${imagen ? 'con-imagen' : ''}`} onClick={(e) => e.stopPropagation()}>
                <div className="editar-top">

                    <span className='texto-main'>Editar Perfil</span>

                    <button className='btn-close' onClick={cerrarCrear}>
                        
                    </button>
                </div>

                <div className='editar-content'>

                    <div className='perfil-banner'>
                        <img className="banner" src={banner || usuario.userBanner} alt="banner" />
                        <input type="file" accept="image/*" ref={inputBanner} onChange={(e) => cargarImagen(e, banner, setBanner)} hidden />
                        <div className='editar-banner' onClick={() => inputBanner.current.click()}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#fff">
                                <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
                            </svg>
                        </div>

                        <img className="pfp" src={imagen || usuario.userImage} alt="profilePicture" />
                        <input type="file" accept="image/*" ref={inputImagen} onChange={(e) => cargarImagen(e, imagen, setImagen)} hidden />
                        <div className='editar-pfp' onClick={() => inputImagen.current.click()}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#fff">
                                <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
                            </svg>
                        </div>
                    </div>


                    <section className="user-desc">
                        <div className="user-desc-left">
                            <div className='d-flex flex-column gap-2'>
                                <h1 className="user-desc-name">Nombre de usuario</h1>
                                <div className="edit-option">
                                    <textarea className="texto-main" value={username} onChange={e => setUsername(e.target.value)} /> 
                                </div>
                            </div>

                            <div className='d-flex flex-column gap-2'>
                                <h1 className="user-desc-name">Descripción</h1>
                                <div className="edit-option">
                                    <textarea className="texto-main" value={description} onChange={e => setDescription(e.target.value)} /> 
                                </div>
                            </div>

                            <div className='d-flex flex-column gap-2'>
                                <h1 className="user-desc-name">Edad</h1>
                                <div className="edit-option">
                                    <textarea className="texto-main" value={edad} onChange={e => setEdad(e.target.value)} /> 
                                </div>
                            </div>

                            <div className='d-flex flex-column gap-2'>
                                <h1 className="user-desc-name">País</h1>
                                <div className="edit-option">
                                    <textarea className="texto-main" value={pais} onChange={e => setPais(e.target.value)} /> 
                                </div>
                            </div>
                        </div>
                    </section>
                        
                </div>

                <hr></hr>

                <div className="editar-bottom">
                    <div className='crear-bottom-left'>
                       
                    </div>
                    <div className='editar-bottom-right'>
                        <button className='cancelar-button-editar me-2' onClick={cerrarCrear} >
                            <span>Cancelar</span>
                        </button>

                        <button className='guardar-button-editar' onClick={guardar} >
                            <span>Guardar</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>

    );

}

export default PerfilEditar;