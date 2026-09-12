import { useState, useEffect } from 'react';
import Header from './header';
import CrearPost from './crearPost';

function Layout({ children }) {

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

    return (
        <>
            <Header abrirCrear={() => setCrearAbierto(true)} />

            {children}

            {crearAbierto && (<CrearPost cerrarCrear={() => setCrearAbierto(false)}/>)}
        </>
    );
}

export default Layout;