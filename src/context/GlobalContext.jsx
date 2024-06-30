import { createContext, useEffect, useReducer } from "react";

export const GlobalContext = createContext();

const initialState = {
    fotosGaleria: [],
    fotosPopulares: [],
    fotoSeleccionada: null,
    seleccionado: 'Todas',
    busqueda: '',
    seleccionadoSide: 'Inicio'
};

const reducer = (state,action) => {
    switch(action.type){
        case 'SET_FOTOS_GALERIA':
            return {...state, fotosGaleria: action.payload};
        case 'SET_FOTOS_POPULARES':
            return {...state, fotosPopulares: action.payload};
        case 'SET_FOTO_SELECCIONADA':
            return {...state, fotoSeleccionada: action.payload};
        case 'SET_SELECCIONADO':
            return {...state, seleccionado: action.payload};
        case 'SET_BUSQUEDA':
            return {...state, busqueda: action.payload};
        case 'SET_SELECCIONADO_SIDE':
            return {...state, seleccionadoSide: action.payload};
        case 'Like':
                const fotosDeGaleria = state.fotosGaleria.map(fotoG => {
                    return {
                        ...fotoG,
                        like: (fotoG.id == action.payload.id) ? !fotoG.like : fotoG.like
                    };
                });

                if(action.payload.id === state.fotoSeleccionada?.id){
                    return{ ...state,
                        fotosGaleria: fotosDeGaleria,
                        fotoSeleccionada:{ 
                            ...state.fotoSeleccionada, like: !action.payload.like
                        }
                    };
                }else{
                    return{ ...state, fotosGaleria: fotosDeGaleria};
                }
                console.log(action.payload.like);
        default:
            return state;
    }
};

const GlobalContextProvider = ({children}) => {

    const [state,dispach] = useReducer(reducer,initialState);

    // Estados de Fotos
    // const [fotosGaleria, setFotosGaleria] = useState([]);
    // const [fotosPopulares, setFotosPopulares] = useState([]);
    // const [fotoSeleccionada, setFotoSeleccionada] = useState(null);
    
    // Estado tags
    // const [seleccionado,setSeleccionado] = useState('Todas');
    // const [busqueda, setBusqueda] = useState('');

    // Estado SideBar
    // const [seleccionadoSide, setSeleccionadoSide] = useState('Inicio');

    // Conexion API
    useEffect(() => {
        const getData = async () => {
            // Fotos Galeria
            const res = await fetch('http://localhost:3001/fotos');
            const data = await res.json();
            dispach({type: 'SET_FOTOS_GALERIA', payload: data});
            // setFotosGaleria([...data]);

            // Fotos Populares
            const resPopulares = await fetch('http://localhost:3001/fotosPopulares');
            const dataPopulares = await resPopulares.json();
            dispach({type: 'SET_FOTOS_POPULARES', payload: dataPopulares});
            // setFotosPopulares([...dataPopulares]);
        };
        setTimeout(() => getData(),3000);
    });

    return (
        <GlobalContext.Provider value={{state,dispach}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;