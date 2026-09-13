import './css/login.css';
import { Link } from 'react-router-dom';

function Registro() {

    return (
        <div className="login-container">
            <div className="login-imagen-container">
                <img src="/images/estanque2.jpg" alt="Estanque" className="login-imagen" style={{ opacity: 0.9 }}/>

                <div className="login-imagen-gradient"></div>

                <img src="/images/estanque2.jpg" alt="Estanque" className="login-imagen"/>
            </div>

            <div className="login-info">
                <img src="/images/Heart.png" alt="Logo"/>

                <p className="login-text-login">
                    Regístrate
                </p>

                <div className="login-fill-box-container">
                    <label className="login-fill-box">
                        <input type="text" placeholder="Correo"></input>
                    </label>
                    
                    <label className="login-fill-box">
                        <input type="date" placeholder="Fecha"></input>
                    </label>

                    <label className="login-fill-box">
                        <input type="text" placeholder="Nombre"></input>
                    </label>

                    <label className="login-fill-box">
                        <input type="password" placeholder="Contraseña"/>
                    </label>

                    <label className="login-fill-box">
                        <input type="password" placeholder="Confirmar contraseña"/>
                    </label>

                </div>

                <div className="login-info-bottom">
                    <div className="login-info-bottom-register">
                        <span>¿Ya tienes una cuenta? <Link to={'/login'} className='link bold'>Inicia sesión</Link> </span>
                    </div>

                    <Link to={"/"} className="link">
                        <button className='login-info-bottom-login-button'>
                            <span>Registrarse</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Registro;

