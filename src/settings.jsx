
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
                        <img
                            src="/images/Heart.png"
                            alt="Icono de ajustes"
                            className="ajustes-icon"
                        />

                        <h3>Ajustes</h3>
                    </div>

                    <div className="ajustes-section-container">

                        <div className="ajustes-section">
                            <img
                                src="/images/Kaw.gif"
                                alt="Icono de tu cuenta"
                                className="ajustes-section-icon"
                            />
                            <p>Tu cuenta</p>
                        </div>

                        <div className="ajustes-section">
                            <img
                                src="/images/Kaw.gif"
                                alt="Icono de privacidad"
                                className="ajustes-section-icon"
                            />
                            <p>Privacidad</p>
                        </div>

                        <div className="ajustes-section">
                            <img
                                src="/images/Kaw.gif"
                                alt="Icono de notificaciones"
                                className="ajustes-section-icon"
                            />
                            <p>Notificaciones</p>
                        </div>

                        <div className="ajustes-section">
                            <img
                                src="/images/Kaw.gif"
                                alt="Icono de accesibilidad"
                                className="ajustes-section-icon"
                            />
                            <p>Accesibilidad</p>
                        </div>

                    </div>

                </div>

                <div>
                    <hr className="separador-vertical" />
                </div>

                <div className="ajustes-derecha">

                    <div className="ajustes-info-cuenta">

                        <div className="ajustes-info-container">

                            <h3>Información de tu cuenta</h3>

                            <div
                                className="settings-search"
                            >
                                <img
                                    src="/images/Spamton.png"
                                    alt="Buscar"
                                />

                                <span className="texto-sub">
                                    Buscar
                                </span>
                            </div>

                        </div>

                        <div className="ajustes-section-container">

                            <div className="ajustes-section">
                                <p>Tu información</p>
                            </div>

                            <div className="ajustes-section">
                                <p>Cambiar contraseña</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

export default Settings;

