import './css/login.css';
import { Link } from 'react-router-dom';

function Login() {

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
                    Inicio de sesión
                </p>

                <div className="login-fill-box-container">
                    <label className="login-fill-box">
                        <input type="text" placeholder="Usuario" name="user" autoComplete='name'></input>
                    </label>

                    <label className="login-fill-box">
                        <input type="password" placeholder="Contraseña" name="password" autoComplete='current-password'/>
                    </label>

                    <span className="login-forgot"> Olvidé la contraseña </span>
                </div>

                <div className="login-info-bottom">
                    <div className="login-info-bottom-register">
                        <span>¿No tienes cuenta? <Link to={'/registro'} className='link bold'>Regístrate</Link> </span>
                    </div>

                    <Link to={"/"} className="link">
                        <button className='login-info-bottom-login-button'>
                            <span>Iniciar sesión</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;

