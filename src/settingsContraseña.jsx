


function SettingsContraseña(){
    return(
        <div className="ajustes-info-cuenta">
            <div className="ajustes-info-container">
                <span className='bold'>Cambiar Contraseña</span>
            </div>

            <div className="" >
              <div className="">
                <form>
                  <div className="">
                    <label for="current-password" className="">Contraseña actual</label>
                    <input
                      type="password"
                      id="current-password"
                      className="login-fill-box"
                      placeholder="Ingresa tu contraseña"
                    />
                  </div>
                  <div className="">
                    <label for="new-password" className="">Nueva contraseña</label>
                    <input
                      type="password"
                      id="new-password"
                      className="login-fill-box"
                      placeholder="Contraseña nueva"
                    />
                  </div>
                  <div className="">
                    <label for="confirm-password" className="">Confirme la nueva contraseña</label>
                    <input
                      type="password"
                      id="confirm-password"
                      className="login-fill-box"
                      placeholder="Confirmación"
                    />
                  </div>
                  <div className="">
                    <button type="submit" className="login-info-bottom-login-button">Confirmar</button>
                  </div>
                </form>
              </div>
            </div>

        </div>
    )
}

export default SettingsContraseña