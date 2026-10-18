
import './css/landing.css';
import './css/settings.css';
import './css/busqueda.css';
import SearchPosts from './searchPosts';
import SearchUsers from './searchUsers';
import DiscoverUsers from './discoverUsers';
import FeaturedUsers from './featuredUsers';
import TwitchStream from './twitch';
import MoverAlInicio from './moverAlInicio';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Busqueda(){

    const [categoria, setCategoria] = useState('publicaciones');

    return(
            
        <div className='background'>
            <MoverAlInicio/>
            <div className='lateral-pf'>
                <div className="ajustes-icon-container">
                    <Link id='back-perfil' to={'/'}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--text-in)">
                            <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/>
                        </svg>
                    </Link>
                </div>
            </div>

            <div className="main-central pt-3">
                <div className='d-flex justify-items-start w-100'>
                    <button className={`category-btn ms-4 ${categoria === 'publicaciones' ? 'seleccionado' : ''}`} onClick={() => setCategoria('publicaciones')}>
                        Publicaciones
                        <div className={`category-selected-icon  rounded-5 ${categoria === 'publicaciones' ? 'seleccionado' : ''}`}></div>
                    </button>
                    <div className='vr'></div>
                    <button className={`category-btn ${categoria === 'usuarios' ? 'seleccionado' : ''}`} onClick={() => setCategoria('usuarios')}>
                        Usuarios
                        <div className={`category-selected-icon  rounded-5 ${categoria === 'usuarios' ? 'seleccionado' : ''}`}></div>
                    </button>
                </div>
                {categoria === 'publicaciones' && <SearchPosts/>}
                {categoria === 'usuarios' && <SearchUsers/>}
            </div>

            <div>
                <hr className="separador-vertical" />
            </div>

            <div className="main-derecha">

                <TwitchStream/>

                <div className="apoya-container">
                    <p className='texto-main bold'>USUARIOS DESTACADOS</p>
                    <FeaturedUsers/>
                </div>

                <br/>

                <div className="discover-container">
                    <p className='texto-main bold'>DESCUBRE</p>
                    <DiscoverUsers/>
                </div>
                <br/>
            </div>
        </div>
    )

}

export default Busqueda;