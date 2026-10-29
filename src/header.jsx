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

    useEffect(() => {
        const movil = window.innerWidth <= 992;
        document.body.style.overflow = menuAbierto && movil ? 'hidden' : '';

        const onKey = (e) => { if (e.key === 'Escape') setMenuAbierto(false); };
        document.addEventListener('keydown', onKey);

        return () => {
            document.body.style.overflow = '';
            document.removeEventListener('keydown', onKey);
        };
    }, [menuAbierto]);

    
    return(
        <header id="head">

            <div className={`menu-overlay ${menuAbierto ? "show" : ""}`} onClick={() => setMenuAbierto(false)}></div>
            
            <div className={`menu-lateral ${menuAbierto ? "show" : ""}`} id="menu" ref={menuRef}>
                
                <div className="menu-lateral-center">
                    
                    <Link to={'/'} className="menu-section">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--text-in)">
                            <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/>
                        </svg>
                        <span>Inicio</span>
                    </Link>

                    <Link to={'/busqueda'} className="menu-section">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--text-in)">
                            <path d="M500-482q29-32 44.5-73t15.5-85q0-44-15.5-85T500-798q60 8 100 53t40 105q0 60-40 105t-100 53Zm220 322v-120q0-36-16-68.5T662-406q51 18 94.5 46.5T800-280v120h-80Zm80-280v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Zm-593-87q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47ZM0-160v-112q0-34 17.5-62.5T64-378q62-31 126-46.5T320-440q66 0 130 15.5T576-378q29 15 46.5 43.5T640-272v112H0Zm320-400q33 0 56.5-23.5T400-640q0-33-23.5-56.5T320-720q-33 0-56.5 23.5T240-640q0 33 23.5 56.5T320-560ZM80-240h480v-32q0-11-5.5-20T540-306q-54-27-109-40.5T320-360q-56 0-111 13.5T100-306q-9 5-14.5 14T80-272v32Zm240-400Zm0 400Z"/>
                        </svg>
                        <span>Siguiendo</span>
                    </Link>

                    
                    <Link to={'/perfil'} className="menu-section"> 
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--text-in)">
                            <path d="M367-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm296.5-343.5Q560-607 560-640t-23.5-56.5Q513-720 480-720t-56.5 23.5Q400-673 400-640t23.5 56.5Q447-560 480-560t56.5-23.5ZM480-640Zm0 400Z"/>
                        </svg>
                        <span>Perfil</span>
                    </Link>
                
                    <Link to={'/settings'} className="menu-section">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--text-in)">
                            <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/>
                        </svg>
                        <span>Ajustes</span>
                    </Link>

                    <button className="publicar-button bold w-75 d-flex mx-auto mt-3 p-3" onClick={() => {setMenuAbierto(!menuAbierto); abrirCrear();}}>
                        <span>+ Publicar</span>
                    </button>

                </div>

                <Link to={"/login"} className="menu-lateral-bottom">
                    <div className="menu-lateral-bottom-container"> 
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="red">
                            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/>
                        </svg>
                        <span>Cerrar Sesión</span>
                    </div>
                </Link>
                
            </div>
            

            <div className="header-bar">
                <div className="leftContent">
                    <label className="boton-menu-container">
                        <button onClick={() => setMenuAbierto(!menuAbierto)} className="boton-menu" id="boton-menu" aria-expanded={menuAbierto}>
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
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--text-in)">
                                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
                            </svg>
                        </Link>
                    </label>
                </div>

                <div className="rightContent">
                    <button className="publicar-button bold publicar-header" onClick={abrirCrear}>
                        <span>+ Publicar</span>
                    </button>

                    
                    <Link to={"/perfil"} className='user-icon-header d-flex align-items-center ps-4 ms-auto'>
                        <div className='d-flex flex-column pt-1 text-end'>
                            <span className='bold lh-1 nombre-header'>Patatero</span>
                            <span className='nombre-header'>@aloba</span>
                        </div>
                        <img className='user-image-small' src="/images/estanque2.jpg" alt="Cosa bella" />
                    </Link>
                </div>
            </div>
        </header>
    )
}



export default Header;