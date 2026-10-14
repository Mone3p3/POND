
import './css/landing.css';
import './css/perfil.css';
import './css/settings.css';
import ProfilePosts from './profilePosts';
import { Link } from 'react-router-dom';

function Perfil(){

    return(
        <div className='background'>
            <div className='lateral-pf'>
                <div className="ajustes-icon-container">
                    <Link id='back-perfil' to={'/'}>
                        <img src="back_b.svg" alt="back" className="ajustes-icon"/>
                    </Link>
                </div>
            </div>
            <div className='lateral-pf'></div>
            <div className='main-central pt-2'>
                <div className='position-relative w-100 m-auto'>
                    <img className="banner" src="images/estanque.jpg" alt="banner" id="banner"/>
                    <img className="pfp" src="images/estanque2.jpg" alt="profilePicture" id="pfp" />
                    <button className="edit-btn">Editar perfil</button>
                </div>


                <section className="user-desc">
                    <div className="user-desc-left">
                        <div className='d-flex flex-row gap-2'>
                            <h1 className="user-desc-name">Patatero</h1>
                            <img className='pb-2' src="destacado_s.svg" alt="destacado_icon" id="destacado_icon"/>
                        </div>
                            <p className="user-desc-at">@aloba</p>
                            <p className="user-desc-bio" readOnly id="bio-input" readonly rows="4">Mmm patatas</p>
                    </div>
                    <div className="user-desc-right">
                        <div className="user-desc-meta">
                            <div>Entró el 8 de agosto de 2024</div>
                            <div>24 años</div>
                            <div>Español</div>
                        </div>
                    </div>
                </section>

                <div>
                    <ProfilePosts/>
                </div>


            </div>
            <div className='lateral-pf'></div>
            <div className='lateral-pf'></div>
        </div>
    )
        
    


}

export default Perfil;