
import './css/App.css'
import './css/landing.css'



function App() {

  return (
    <>


      <div className="background">

        <div className="main-izquierda">
        </div>

        <div>
            <hr className="separador-vertical" />
        </div>

        <div className="main-central">
            <div className="post-container">
                <div className="post-user-container">
                    <div className="user-image-small">
                        <img src="images/Katana.jpeg" alt="user-icon"/>
                    </div>
                    <span className="username"> KatanaPhighting </span>

                    <span className="arroba">@DefinitelyNotSlingshot</span>

                    <div className="post-options">
                        <img src="dots_v.svg" alt="post-options"/>
                    </div>

                </div>

                <div>
                    <p className="post-text">Texto de mensaje de este post placholder despues se cambia esta de por mientras para usarlo como prueba y mejorar la calidad de la pagina mediante la revision del resultado de este mensaje</p>
                </div>

                <div className="post-image">
                    <img src="images/SoukEye_Gorillaz.jpg" alt="post-image" />
                </div>

                <div className="post-bottom-container">
                    <div className="post-bottom-container-likes" >
                        <img src="comm_b.svg" alt="Comment"/>
                        <span className="post-bottom-likes-number">0</span>
                    </div>

                    
                    <div className="post-bottom-container-likes">
                        <img src="heart_b.svg" alt="Like"/>
                        <span className="post-bottom-likes-number">0</span>
                    </div>
                    

                    <div className="post-bottom-container-likes">
                        <img src="rep_b.svg" alt="Repost"/>
                        <span className="post-bottom-likes-number">0</span>
                    </div>

                    <div className="post-bottom-container-likes">
                        <img src="stat_b.svg" alt="Views"/>
                        <span className="post-bottom-likes-number">0</span>
                    </div>

                    <div className="post-bottom-container-likes">
                        <span className="post-bottom-likes-number">1/Ene/1</span>
                    </div>

                </div>

            </div>

        </div>



        <div>

            <hr className="separador-vertical" />
            
        </div>


        <div className="main-derecha">

            <br/>

            <p className="texto-main">DESCUBRE</p>


            <div className="discover-container">
                <p className="texto-sub">Personas con gustos similares</p>

                <div className="discover-user-container">
                    <div className="user-image-small">
                        <img src="images/Katana.jpeg" alt="user-icon"/>
                    </div>
                    
                    <div className="discover-user-name-container">
                        <span class="username">KatanaPhighting</span>
                        <p class="arroba">Descripcion</p>
                    </div>

                    <div className="post-options">
                        <img src="dots_v.svg" alt="options"/>
                    </div>
                </div>
            </div>

            <br/>
            <p className="texto-main">TENDENCIAS</p>

            <div className="tendencia-container">
                <div className="discover-user-container">
                    <div className="tendencia-rank">
                        <p className="texto-main">1</p>
                    </div>
                    
                    <div className="discover-user-name-container">
                        <span className="username">#PatosBajoLLuvia</span>
                        <p className="arroba">0 vistas</p>
                    </div>

                    <div className="post-options">
                        <img src="dots_v.svg" alt="opciones"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default App
