
import './css/verPost.css'
import FeaturedUsers from "./featuredUsers"
import DiscoverUsers from "./discoverUsers"
import Comments from './verPostComments'
import { Link } from "react-router-dom"

function VerPost(){


    return(

        <div className="background">
            <div className="lateral-pf">
                <div className="ajustes-icon-container">
                    <Link id='back-perfil' to={'/'}>
                        <img src="back_b.svg" alt="back" className="ajustes-icon"/>
                    </Link>
                </div>
            </div>

            <div className="main-central pt-3">
                <div className="d-flex w-100 pt-3 bold">
                    <span>Publicacion</span>
                </div>
                <div className='user-container'>
                    <div className="discover-user-container pb-3">
                        <Link to={'/perfilAjeno'} className='d-flex align-items-center w-100 text-decoration-none'>
                            <div className="user-image-small">
                                <img src="images/Katana.jpeg" alt="user-icon"/>
                            </div>
                            
                            <div className="discover-user-name-container d-flex flex-column">
                                <span className="username">Sapooo</span>
                                <span className="arroba">@wawaaw</span>
                            </div>
                            <span className="post-bottom-likes-number ms-auto"> 12/08/2026 </span>
                        </Link>
                    </div>
                    <div className="post-area">
                        <div className="">
                            <p className="post-text ver"> wewewe </p>
                        </div>

                        <Link to={'/verPost'} className="post-image ver">
                            <img src="images/pondPost1.jpg" alt="post-image"/>
                        </Link>
                    </div>

                    <div className="post-bottom-container ver">
                        <div className="post-bottom-container-likes">
                            <img src="comm_b.svg" alt="Comment"/>
                            <span className="post-bottom-likes-number"> 12 </span>
                        </div>

                        <div className="post-bottom-container-likes">
                            <img src="heart_b.svg" alt="Like"/>
                            <span className="post-bottom-likes-number"> 8 </span>
                        </div>

                        <div className="post-bottom-container-likes">
                            <img src="rep_b.svg" alt="Repost"/>
                            <span className="post-bottom-likes-number"> 3 </span>
                        </div>

                        <div className="post-bottom-container-likes">
                            <img src="stat_b.svg" alt="Views"/>
                            <span className="post-bottom-likes-number"> 89 </span>
                        </div>

                    </div>
                </div>

                <div className="your-comment">
                    <div className="user-image-small">
                        <img src="images/Katana.jpeg" alt="user-icon"/>
                    </div>
                    <input type='text' placeholder='Escribe algo...' className='w-75'></input>
                    <button className='publicar-button-crear ms-auto'>
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
                <div className="apoya-container">
                    <p className="texto-h">USUARIOS DESTACADOS</p>
                    <FeaturedUsers/>
                </div>

                <br/>

                <div className="discover-container">
                    <p className="texto-h">DESCUBRE</p>
                    <DiscoverUsers/>
                </div>
                <br/>
            </div>
        </div>

    )

}

export default VerPost