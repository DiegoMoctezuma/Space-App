import { createContext, useEffect, useReducer } from "react";

export const GlobalContext = createContext();

const initialState = {
    fotosGaleria: [],
    fotosPopulares: [],
    fotoSeleccionada: null,
    seleccionadoTag: 0,
    busqueda: '',
    seleccionadoSide: 'Inicio',
    modalAbierto: false
};

const reducer = (state,action) => {
    switch(action.type){
        case 'SET_FOTOS_GALERIA':
            return {...state, fotosGaleria: action.payload};
        case 'SET_FOTOS_POPULARES':
            return {...state, fotosPopulares: action.payload};
        case 'SET_FOTO_SELECCIONADA':
            return {...state, fotoSeleccionada: action.payload, modalAbierto: action.payload != null ? true : false };
        case 'SET_SELECCIONADO_TAG':
            return {...state, seleccionadoTag: action.payload};
        case 'SET_BUSQUEDA':
            return {...state, busqueda: action.payload};
        case 'SET_SELECCIONADO_SIDE':
            return {...state, seleccionadoSide: action.payload};
        case 'Like':
                const fotosGaleria = state.fotosGaleria.map(fotoG => {
                    return {
                        ...fotoG,
                        like: fotoG.id === action.payload.id ? !fotoG.like : fotoG.like
                    };
                });

                if(action.payload.id === state.fotoSeleccionada?.id){
                    return{ ...state,
                        fotosGaleria: fotosGaleria,
                        fotoSeleccionada:{ 
                            ...state.fotoSeleccionada, like: !action.payload.like
                        }
                    };
                }else{
                    return{ ...state, fotosGaleria: fotosGaleria};
                }
        default:
            return state;
    }
};

const GlobalContextProvider = ({children}) => {

    const [state,dispach] = useReducer(reducer,initialState);

    // Conexion API
    useEffect(() => {
        const getData = async () => {
            // Fotos Galeria
            const res = await fetch('http://localhost:3001/fotos');
            const data = await res.json();
            dispach({type: 'SET_FOTOS_GALERIA', payload: data});

            // Fotos Populares
            const resPopulares = await fetch('http://localhost:3001/fotosPopulares');
            const dataPopulares = await resPopulares.json();
            dispach({type: 'SET_FOTOS_POPULARES', payload: dataPopulares});
        };
        setTimeout(() => getData(),3000);
    },[]);

    return (
        <GlobalContext.Provider value={{state,dispach}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;