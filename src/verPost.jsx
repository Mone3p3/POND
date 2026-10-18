
import './css/verPost.css'
import FeaturedUsers from "./featuredUsers"
import DiscoverUsers from "./discoverUsers"
import TwitchStream from './twitch'
import Comments from './verPostComments'
import MoverAlInicio from './moverAlInicio'
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
                    <span className='texto-main bold'>Publicacion</span>
                </div>
                <div className='user-container ver-post'>
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

                    <div className="post-bottom-container ver w-75">
                        <div className="post-bottom-container-likes">
                            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="var(--text-sub)">
                                <path d="M880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z"/>
                            </svg>
                            <span className="post-bottom-likes-number"> 12 </span>
                        </div>

                        <div className="post-bottom-container-likes">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--text-sub)">
                                <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/>
                            </svg>
                            <span className="post-bottom-likes-number"> 8 </span>
                        </div>

                        <div className="post-bottom-container-likes">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--text-sub)">
                                <path d="M280-80 120-240l160-160 56 58-62 62h406v-160h80v240H274l62 62-56 58Zm-80-440v-240h486l-62-62 56-58 160 160-160 160-56-58 62-62H280v160h-80Z"/>
                            </svg>
                            <span className="post-bottom-likes-number"> 3 </span>
                        </div>

                        <div className="post-bottom-container-likes">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--text-sub)">
                                <path d="M640-160v-280h160v280H640Zm-240 0v-640h160v640H400Zm-240 0v-440h160v440H160Z"/>
                            </svg>
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