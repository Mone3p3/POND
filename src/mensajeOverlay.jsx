import './css/mensajeOverlay.css';

function MensajeOverlay({ mensaje, visible }) {
    return (
        <div className={`mensaje-overlay ${visible ? 'visible' : ''}`}>
            {mensaje}
        </div>
    );
}

export default MensajeOverlay;