
import './css/landing.css';
import './css/settings.css';
import './css/busqueda.css';
import SearchPosts from './searchPosts';
import SearchUsers from './searchUsers';
import DiscoverUsers from './discoverUsers';
import FeaturedUsers from './featuredUsers';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Busqueda(){

    const [categoria, setCategoria] = useState('publicaciones');

    return(
        
        <div className='background'>
            <div className='lateral-pf'>
                <div className="ajustes-icon-container">
                    <Link id='back-perfil' to={'/'}>
                        <img src="back_b.svg" alt="back" className="ajustes-icon"/>
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
                <div className="apoya-container">
                    <p className="texto-h">USUARIOS DESTACADOS</p>
                    <FeaturedUsers/>
                </div>

                <br/>

                <div className="discover-container">
                    <p className="texto-h">DESCUBRE</p>
                    <DiscoverUsers/>
                </div>
                <br/>
            </div>
        </div>
    )

}

export default Busqueda;