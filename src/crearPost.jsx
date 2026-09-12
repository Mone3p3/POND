
import './css/crearPost.css'

function CrearPost({cerrarCrear}){
        
    return(
        <div className="crear-bg" onClick={cerrarCrear}>
            <div className="crear-container" onClick={(e) => e.stopPropagation()}>
                <div className="crear-top">
                    <div className='post-user-container'>
                        <div className="user-image-small">
                            <img src="images/Katana.jpeg" alt="user-icon"/>
                        </div>
                        <span className="username"> KatanaPhighting </span>
                        <span className="arroba">@DefinitelyNotSlingshot</span>
                    </div>

                    <button className='cerrar' onClick={cerrarCrear}>
                        X
                    </button>
                </div>

                <div className='crear-content'>
                    <div className="crear-text">
                        <textarea placeholder="¿Qué quieres publicar?">
                        </textarea>
                    </div>
                    <div className="crear-img">
                        <img src='/images/SoukEye_Gorillaz.jpg' alt='post-image'></img>
                    </div>
                </div>

                <hr></hr>

                <div className="crear-bottom">
                    <div className='crear-bottom-left'>
                        <img src='image_b.svg' alt='post-add-image'></img>
                        <img src='emoji_b.svg' alt='post-add-emoji'></img>
                        <img src='poll_b.svg' alt='post-add-poll'></img>
                    </div>
                    <div className='crear-bottom-right'>
                        <button className='publicar-button'>
                            <span>Publicar</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>


    );

}

export default CrearPost;