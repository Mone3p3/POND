import { useState, useEffect } from 'react';
import Header from './header';
import CrearPost from './crearPost';
import MensajeOverlay from './MensajeOverlay';

function Layout({ children }) {

    const [mensajeVisible, setMensajeVisible] = useState(false);
    const [mensajeTexto, setMensajeTexto] = useState('');

    const mostrarMensaje = (e) => {
        setMensajeTexto(e.detail);
        setMensajeVisible(true);

        setTimeout(() => {
            setMensajeVisible(false);
        }, 3000);
    };

    useEffect(() => {

        window.addEventListener('mostrar-mensaje', mostrarMensaje);

        return () => {
            window.removeEventListener('mostrar-mensaje', mostrarMensaje);
        };
    }, []);



    const [crearAbierto, setCrearAbierto] = useState(false);

    useEffect(() => {
        
        if (crearAbierto) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [crearAbierto]);



    const [cerrandoCrear, setCerrandoCrear] = useState(false);

    const abrirCrear = () => {
        setCrearAbierto(true);
        setCerrandoCrear(false);
    };

    const cerrarCrear = () => {
        setCerrandoCrear(true);

        setTimeout(() => {
            setCrearAbierto(false);
            setCerrandoCrear(false);
        }, 250);
    };

    return (
        <>
            <Header abrirCrear={abrirCrear} />

            {children}

            {crearAbierto && (<CrearPost cerrarCrear={cerrarCrear} mostrarMensaje={mostrarMensaje} cerrandoCrear={cerrandoCrear}/>)}

            <MensajeOverlay mensaje={mensajeTexto} visible={mensajeVisible} />
        </>
    );
}

export default Layout;