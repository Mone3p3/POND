
import './css/settings.css';
import './css/login.css';
import SettingsCuenta from './settingsCuenta';
import SettingsAccesibilidad from './settingsAccesibilidad';
import SettingsInfo from './settingsInfo';
import SettingsContraseña from './settingsContraseña';
import { Link } from 'react-router-dom';

function Settings() {

    return (
        <>
            
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
                            <img src="access_b.svg" alt="Icono de accesibilidad" className="ajustes-section-icon"/>
                            <span>Accesibilidad</span>
                        </div>

                    </div>

                </div>

                <div>
                    <hr className="separador-vertical" />
                </div>

                <div className="ajustes-derecha">

                    <SettingsCuenta/>
                    <SettingsAccesibilidad/>
                    <SettingsInfo/>
                    <SettingsContraseña/>

                </div>

            </div>
        </>
    );
}

export default Settings;

