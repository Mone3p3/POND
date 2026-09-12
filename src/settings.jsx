
import './css/settings.css';
import { Link } from 'react-router-dom';
import Header from './header';

function Settings() {

    return (
        <>
            <Header/>
            <div className="background">

                <div className="ajustes-izquierda">

                    <div className="ajustes-icon-container">
                        <Link to={'/'}>
                            <img src="back_b.svg" alt="back" className="ajustes-icon"/>
                        </Link>
                        <img src="set_b.svg" alt="Icono de ajustes" className="ajustes-icon"/>

                        <span>Ajustes</span>
                    </div>

                    <div className="ajustes-section-container">

                        <div className="ajustes-section">
                            <img src="lock_b.svg" alt="Icono de tu cuenta" className="ajustes-section-icon"/>
                            <span>Tu cuenta</span>
                        </div>

                        <div className="ajustes-section">
                            <img src="priv_b.svg" alt="Icono de privacidad" className="ajustes-section-icon"/>
                            <span>Privacidad</span>
                        </div>

                        <div className="ajustes-section">
                            <img src="noti_b.svg" alt="Icono de notificaciones" className="ajustes-section-icon"/>
                            <span>Notificaciones</span>
                        </div>

                        <div className="ajustes-section">
                            <img src="access_b.svg" alt="Icono de accesibilidad" className="ajustes-section-icon"/>
                            <span>Accesibilidad</span>
                        </div>

                    </div>

                </div>

                <div>
                    <hr className="separador-vertical" />
                </div>

                <div className="ajustes-derecha">

                    <div className="ajustes-info-cuenta">

                        <div className="ajustes-info-container">

                            <span className='bold'>Información de tu cuenta</span>

                            <label className="ajustes-info-busqueda">
                                <input type='text'placeholder='Buscar'></input>
                                <img src="lupa_b.svg" alt="Buscar"/>
                            </label>

                        </div>

                        <div className="ajustes-section-container">

                            <div className="ajustes-section">
                                <span>Tu información</span>
                            </div>

                            <div className="ajustes-section">
                                <span>Cambiar contraseña</span>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

export default Settings;

