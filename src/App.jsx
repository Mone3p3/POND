
import './css/App.css'
import './css/landing.css'
import LandingPosts from './landingPosts'



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
            <LandingPosts/>
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
