


function SettingsCuenta({setMenuSett}){
    return(
        <div className="ajustes-info-cuenta">
            <div className="ajustes-info-container">
                <span className='texto-main bold'>Tu cuenta</span>
            </div>

            <div className="ajustes-section-container ">
                <div className="ajustes-section" onClick={() => setMenuSett('info')}>
                    <span className='texto-main bold'>Información de tu cuenta</span>
                </div>

                <div className="ajustes-section" onClick={() => setMenuSett('contraseña')}>
                    <span className='texto-main bold'>Cambiar contraseña</span>
                </div>
            </div>

        </div>
    )
}

export default SettingsCuenta