




function SettingsInfo(){
    return(
        <div className="ajustes-info-cuenta">
            <div className="ajustes-info-container">
                <span className='texto-main bold'>Información de tu cuenta</span>
            </div>

            <div className="" >
              <div className="">
                <form>
                  <div className="">
                    <label for="username" className='texto-main bold'>Nombre de usuario</label>
                    <input
                      type="text"
                      id="username"
                      className="login-fill-box"
                      placeholder="polloquehagoaqui"
                    />
                  </div>
                 
                  <div className="">
                    <label for="email" className='texto-main bold'>Correo</label>
                    <input
                      type="email"
                      id="email"
                      className="login-fill-box"
                      placeholder="correodereserva12@gmail.com"
                    />
                  </div>

                  <div className="">
                    <label for="country" className='texto-main bold'>País</label>
                    <input
                      type="text"
                      id="country"
                      className="login-fill-box"
                      placeholder="Selecciona tu país"
                    />
                  </div>
                  
                  <div className="ajustes2-form-group">
                    <label for="gender" className='texto-main bold'>Género</label>
                    <div className="select-wrapper">
                      <select id="gender" className="login-fill-box">
                        <option value="hombre" selected>Hombre</option>
                        <option value="mujer">Mujer</option>
                        <option value="otro">Otro</option>
                        <option value="prefiero-no-decir">Prefiero no decir</option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex flex-row gap-3 w-100 pt-4 justify-content-end">
                    <button type="button" className="info-btn info-btn-a">Confirmar</button>
                    <button type="button" className="info-btn info-btn-c">Cancelar</button>
                  </div>
                </form>
              </div>
            </div>

        </div>
    )
}

export default SettingsInfo