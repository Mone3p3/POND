import './css/header.css'
import {Link} from "react-router-dom";
import { useState, useEffect, useRef } from 'react';



function Header({abrirCrear}) {

    const [menuAbierto, setMenuAbierto] = useState(false);
    let menuRef = useRef();

    useEffect(() => {

        let handler = (e)=>{
            if (!menuRef.current.contains(e.target) && !e.target.closest('.boton-menu-container')){
                setMenuAbierto(false);
            }
            if (e.target.closest ('.menu-section')){
                setMenuAbierto(false);
            }
        };

        document.addEventListener("click", handler);

        return () => {
            document.removeEventListener("click", handler);
        };

    },[]);

    
    return(
        <header id="head">
            <div className={`menu-lateral ${menuAbierto ? "show" : ""}`} id="menu" ref={menuRef}>
                
                <div className="menu-lateral-center">
                    
                    <Link to={'/'} className="menu-section">
                        <img src="home_b.svg" alt="menu-icon" width="30" height="30" />
                        <span>Inicio</span>
                    </Link>

                    <Link to={'/busqueda'} className="menu-section">
                        <img src="flw_b.svg" alt="menu-icon" width="30" height="30" />
                        <span>Siguiendo</span>
                    </Link>

                    
                    <Link to={'/perfil'} className="menu-section"> 
                        <img src="acc_b.svg" alt="menu-icon" width="30" height="30" />
                        <span>Perfil</span>
                    </Link>
                
                    <Link to={'/settings'} className="menu-section">
                        <img src="set_b.svg" alt="menu-icon" width="30" height="30" />
                        <span>Ajustes</span>
                    </Link>

                    <div className="menu-section bold d-flex justify-content-center"> 
                        <span>+ Publicar</span>
                    </div>
                </div>

                <div className="menu-lateral-bottom">
                    <Link to={"/login"} className="menu-lateral-bottom-container"> 
                        <img src="logout.svg" alt="menu-icon" width="30" height="30" />
                        <span>Cerrar Sesión</span>
                    </Link>
                </div>
            </div>

            <div className="header-bar">
                <div className="leftContent">
                    <label className="boton-menu-container">
                        <button onClick={() => setMenuAbierto(!menuAbierto)} className="boton-menu" id="boton-menu" aria-expanded="false">
                            <svg viewBox="0 0 25 20">
                                <rect y="2" width="25" height="3" fill="white"></rect>
                                <rect y="9" width="25" height="3" fill="white"></rect>
                                <rect y="16" width="25" height="3" fill="white"></rect>
                            </svg>
                        </button>
                    </label>

                    <Link to={"/"} className="header-logo-container">
                        <span className='logo'>POND</span>
                        <img src="/images/PondLogo.png" alt="Cosa bella" width="40px"/>
                    </Link>       
                </div>

                <div className="centerContent">
                    <label className="search-bar">
                        <input type='text' placeholder='Buscar'>
                        </input>
                        <Link to={"/busqueda"}>
                            <img src="lupa_w.svg" alt="SearchBar"/>
                        </Link>
                    </label>
                </div>

                <div className="rightContent">
                    <button className="publicar-button bold" onClick={abrirCrear}>
                        <span>+ Publicar</span>
                    </button>

                    
                    <Link to={"/perfil"} className='user-icon-header d-flex align-items-center ps-4 ms-auto'>
                        <div className='d-flex flex-column pt-1 text-end'>
                            <span className='bold lh-1'>Patatero</span>
                            <span>@aloba</span>
                        </div>
                        <img className='user-image-small' src="/images/estanque2.jpg" alt="Cosa bella" />
                    </Link>
                </div>
            </div>
        </header>
    )
}



export default Header;