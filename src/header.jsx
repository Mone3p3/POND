import './css/header.css'
import {Link} from "react-router-dom";
import { useState, useEffect, useRef } from 'react';



function Header({abrirCrear}) {

    const [menuAbierto, setMenuAbierto] = useState(false);
    let menuRef = useRef();

    useEffect(() => {

        let handler = (e)=>{
            if (!menuRef.current.contains(e.target)) {
                setMenuAbierto(false);
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };

    },[]);

    
    return(
        <header id="head">
            <div className={`menu-lateral ${menuAbierto ? "show" : ""}`} id="menu" ref={menuRef}>
                <div className="menu-lateral-cerrar">
                    <div className="cerrar">
                        <span>x</span>
                    </div>
                </div>
                <div className='menu-lateral-menu'>
                    <h5 className='bold'>Menú</h5>
                </div>
                
                <div className="menu-lateral-center">
                    <button className="menu-section">
                        <img src="trend_b.svg" alt="menu-icon" width="30" height="30" />
                        <span>Tendencias</span>
                    </button>

                    <div className="menu-section">
                        <img src="heart_b.svg" alt="menu-icon" width="30" height="30" />
                        <span>Quacks</span>
                    </div>

                    <div className="menu-section"> 
                        <img src="flw_b.svg" alt="menu-icon" width="30" height="30" />
                        <span>Siguiendo</span>
                    </div>

                    <div className="menu-section"> 
                        <img src="acc_b.svg" alt="menu-icon" width="30" height="30" />
                        <span>Perfil</span>
                    </div>
                
                    <Link to={'/settings'} className="menu-section">
                        <img src="set_b.svg" alt="menu-icon" width="30" height="30" />
                        <span>Ajustes</span>
                    </Link>
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
                        <img src="/images/Cato.gif" alt="Cosa bella" width="40px" style={{ marginLeft: '20px' }} />
                        <span style={{color: 'bisque', marginRight: '20px', marginLeft: '20px', fontSize: '25px', fontWeight: 'bold'}}>POND</span>
                    </Link>       
                </div>

                <div className="centerContent">
                    <label className="search-bar">
                        <input type='text' placeholder='Buscar'>
                        </input>
                        <img src="lupa_w.svg" alt="SearchBar"/>
                    </label>
                </div>

                <div className="rightContent">
                    <button className="publicar-button bold" onClick={abrirCrear}>
                        <span>+ Publicar</span>
                    </button>
                    
                    <Link to={"/login"} className="user-image-small">
                        <img src="/images/Katana.jpeg" alt="Cosa bella" style={{ objectFit: 'cover' }} />
                    </Link>
                </div>
            </div>
        </header>
    )
}



export default Header;