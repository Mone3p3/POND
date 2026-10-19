
import './css/verPost.css'
import FeaturedUsers from "./featuredUsers"
import DiscoverUsers from "./discoverUsers"
import TwitchStream from './twitch'
import Comments from './verPostComments'
import MoverAlInicio from './moverAlInicio'
import VerPostsPost from './verPostsPost'
import { Link } from "react-router-dom"

function VerPost(){


    return(

        <div className="background">
            <MoverAlInicio/>
            <div className="lateral-pf">
                <div className="ajustes-icon-container">
                    <Link id='back-perfil' to={'/'}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--text)">
                            <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/>
                        </svg>
                    </Link>
                </div>
            </div>

            <div className="main-central pt-3">
                <div className="d-flex w-100 pt-4 bold">
                    <span className='texto-main bold'>Publicación</span>
                </div>

                {/*--- ACA ESTA EL POST -----------------------------------*/}
                
                <VerPostsPost/>

                <div className="your-comment">
                    <div className="user-image-small">
                        <img src="images/Katana.jpeg" alt="user-icon"/>
                    </div>
                    <input type='text' placeholder='Escribe algo...' className='w-75'></input>
                    <button className='publicar-button-crear ms-auto' onClick={() => window.dispatchEvent( new CustomEvent('mostrar-mensaje', { detail: '¡Comentario creado!'}))}>
                        <span>Publicar</span>
                    </button>
                </div>
                <div className='comments'>
                    <Comments/>
                </div>

            </div>

            <div>
                <hr className="separador-vertical" />
            </div>

            <div className="main-derecha">

                <TwitchStream/>

                <div className="apoya-container">
                    <p className='texto-main bold'>USUARIOS DESTACADOS</p>
                    <FeaturedUsers/>
                </div>

                <br/>

                <div className="discover-container">
                    <p className='texto-main bold'>DESCUBRE</p>
                    <DiscoverUsers/>
                </div>
                <br/>
            </div>
        </div>

    )

}

export default VerPost