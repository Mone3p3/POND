
import './css/App.css'
import './css/landing.css'
import LandingPosts from './landingPosts'
import DiscoverUsers from './discoverUsers'
import FeaturedUsers from './featuredUsers'
import TwitchStream from './twitch'



function App() {

  return (
    <>


      <div className="background">

        <div className="lateral-pf">
        </div>
        {/*
       <div>
            <hr className="separador-vertical" />
        </div>
        */}
        <div className="main-central">
            <LandingPosts/>
        </div>

        <div>

            <hr className="separador-vertical" />
            
        </div>


        <div className="main-derecha">
            
            <TwitchStream/>

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
            {/*
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
            */}
        </div>
    </div>
    </>
  )
}

export default App
