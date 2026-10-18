import { use, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function MoverAlInicio(){

    const {pag} = useLocation();

    useEffect(()=> {window.scrollTo(0, 0);}, [pag]);

    return null;

}

export default MoverAlInicio;