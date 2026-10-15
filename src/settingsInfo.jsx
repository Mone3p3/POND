




function SettingsInfo(){
    return(
        <div className="ajustes-info-cuenta">
            <div className="ajustes-info-container">
                <span className='bold'>Información de tu cuenta</span>
            </div>

            <div className="" >
              <div className="">
                <form>
                  <div className="">
                    <label for="username" className="">Nombre de usuario</label>
                    <input
                      type="text"
                      id="username"
                      className="login-fill-box"
                      placeholder="polloquehagoaqui"
                    />
                  </div>
                 
                  <div className="">
                    <label for="email" className="">Correo</label>
                    <input
                      type="email"
                      id="email"
                      className="login-fill-box"
                      placeholder="correodereserva12@gmail.com"
                    />
                  </div>

                  <div className="">
                    <label for="country" className="">País</label>
                    <input
                      type="text"
                      id="country"
                      className="login-fill-box"
                      placeholder="Selecciona tu país"
                    />
                  </div>
                  
                  <div className="ajustes2-form-group">
                    <label for="gender" className="form-label">Género</label>
                    <div className="select-wrapper">
                      <select id="gender" className="login-fill-box">
                        <option value="hombre" selected>Hombre</option>
                        <option value="mujer">Mujer</option>
                        <option value="otro">Otro</option>
                        <option value="prefiero-no-decir">Prefiero no decir</option>
                      </select>
                    </div>
                  </div>
                  <div className="">
                    <button type="button" className="login-info-bottom-login-button">Confirmar</button>
                    <button type="button" className="login-info-bottom-login-button">Cancelar</button>
                  </div>
                </form>
              </div>
            </div>

        </div>
    )
}

export default SettingsInfo