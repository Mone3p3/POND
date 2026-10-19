
import './css/settings.css';
import './css/login.css';
import SettingsCuenta from './settingsCuenta';
import SettingsAccesibilidad from './settingsAccesibilidad';
import SettingsInfo from './settingsInfo';
import SettingsContraseña from './settingsContraseña';
import MoverAlInicio from './moverAlInicio';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Settings() {

    const [menuSett, setMenuSett] = useState('cuenta');

    return (
        <>
            
            <div className="background">
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
                <div className="ajustes-izquierda">

                    <div className="ajustes-icon-container">
                        <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="var(--text)" className='ajustes-icon'>
                            <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/>
                        </svg>

                        <span className='texto-main bold'>Ajustes</span>
                    </div>

                    <div className="ajustes-section-container">

                        <div className={`ajustes-section ${menuSett === 'cuenta' ? 'seleccionado' : ''}`}  onClick={() => setMenuSett('cuenta')}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="var(--text)" className="ajustes-section-icon">
                            <path d="M380-320h200q25 0 42.5-17.5T640-380v-120q0-25-17.5-42.5T580-560v-60q0-42-29-71t-71-29q-42 0-71 29t-29 71h60q0-17 11.5-28.5T480-660q17 0 28.5 11.5T520-620v60H380q-25 0-42.5 17.5T320-500v120q0 25 17.5 42.5T380-320ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                            </svg>
                            <span className='texto-main bold'>Tu cuenta</span>
                        </div>

                        <div className={`ajustes-section ${menuSett === 'access' ? 'seleccionado' : ''}`} onClick={() => setMenuSett('access')}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="var(--text)" className="ajustes-section-icon">
                                <path d="M423.5-823.5Q400-847 400-880t23.5-56.5Q447-960 480-960t56.5 23.5Q560-913 560-880t-23.5 56.5Q513-800 480-800t-56.5-23.5ZM360-200v-480q-60-5-122-15t-118-25l20-80q78 21 166 30.5t174 9.5q86 0 174-9.5T820-800l20 80q-56 15-118 25t-122 15v480h-80v-240h-80v240h-80ZM291.5-11.5Q280-23 280-40t11.5-28.5Q303-80 320-80t28.5 11.5Q360-57 360-40t-11.5 28.5Q337 0 320 0t-28.5-11.5Zm160 0Q440-23 440-40t11.5-28.5Q463-80 480-80t28.5 11.5Q520-57 520-40t-11.5 28.5Q497 0 480 0t-28.5-11.5Zm160 0Q600-23 600-40t11.5-28.5Q623-80 640-80t28.5 11.5Q680-57 680-40t-11.5 28.5Q657 0 640 0t-28.5-11.5Z"/>
                            </svg>
                            <span className='texto-main bold'>Accesibilidad</span>
                        </div>

                        <div className='ajustes-logout-container'>
                        <hr></hr>
                        <Link to={"/login"} className="ajustes-logout">
                            
                            <div className="ajustes-logout-btn"> 
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="red">
                                    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/>
                                </svg>
                                <span className='ms-2'>Cerrar Sesión</span>
                            </div>
                        </Link>
                        <hr></hr>
                    </div>

                    </div>

                    

                </div>

                <div>
                    <hr className="separador-vertical" />
                </div>

                <div className={`lateral-pf ${menuSett === 'cuenta' || menuSett === 'access' ? 'ajustes-base' : ''}`}>
                    <div className="ajustes-icon-container">
                        {menuSett === 'info' || menuSett === 'contraseña' ? (
                            <Link id="back-perfil" onClick={() => setMenuSett('cuenta')}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--text)">
                                    <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/>
                                </svg>
                            </Link>
                        ) : null}
                    </div>
                </div>

                <div className="ajustes-derecha">
                    
                    {menuSett === 'cuenta' && <SettingsCuenta setMenuSett={setMenuSett} />}
                    {menuSett === 'access' && <SettingsAccesibilidad/>}
                    {menuSett === 'info' && <SettingsInfo />}
                    {menuSett === 'contraseña' && <SettingsContraseña />}

                </div>

                <div className={`lateral-pf ${menuSett === 'cuenta' || menuSett === 'access' ? '' : 'ajustes-base'}`}>
                </div>

            </div>
        </>
    );
}

export default Settings;

