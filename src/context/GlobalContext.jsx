import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({children}) => {

    // Estados de Fotos
    const [fotosGaleria, setFotosGaleria] = useState([]);
    const [fotosGaleriaPopulares, setFotosPopulares] = useState([]);
    const [fotoSeleccionada, setFotoSeleccionada] = useState(null);

    const Like = (foto) => {

        if(foto.id === fotoSeleccionada?.id){
            setFotoSeleccionada({
                ...fotoSeleccionada,
                like: !foto.like  
            });
        }

        setFotosGaleria(fotosGaleria.map(fotoG => {
            return {
                ...fotoG,
                like: (fotoG.id == foto.id) ? !fotoG.like : fotoG.like
            }
        }));
    };

    // Estado tags
    const [seleccionado,setSeleccionado] = useState('Todas');
    const [busqueda, setBusqueda] = useState('');


    // Conexion API
    useEffect(() => {
        const getData = async () => {
            // Fotos Galeria
            const res = await fetch('http://localhost:3001/fotos');
            const data = await res.json();
            setFotosGaleria([...data]);

            // Fotos Populares
            const resPopulares = await fetch('http://localhost:3001/fotosPopulares');
            const dataPopulares = await resPopulares.json();
            setFotosPopulares([...dataPopulares]);
        };
        setTimeout(() => getData(),3000);
    });

    // Estado SideBar
    const [seleccionadoSide, setSeleccionadoSide] = useState('Inicio');


    return (
        <GlobalContext.Provider 
            value={{
                    fotosGaleria,
                    fotosGaleriaPopulares,
                    fotoSeleccionada,
                    Like,
                    setFotoSeleccionada,
                    seleccionado,
                    setSeleccionado,
                    busqueda,
                    setBusqueda,
                    seleccionadoSide,
                    setSeleccionadoSide
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;