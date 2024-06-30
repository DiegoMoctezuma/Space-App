import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tags from "./Tags";
import Card from "./Card";
import Cargando from "../Cargando";

const GaleriaContainer = styled.div`
    display: flex;
`;

const SeccionFluida = styled.section`
    flex-grow: 1;
`;

const FotosContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 40px;
    width: 100%;
`;


const Galeria = () => {

    const {fotosGaleria,busqueda} = useContext(GlobalContext);

    return(
        fotosGaleria.length === 0 ? <Cargando/> :
            <>
                <Tags/>
                <GaleriaContainer>
                    <SeccionFluida>
                        <Titulo>Navegue por la galeria</Titulo>
                        <FotosContainer>
                            {fotosGaleria.filter(foto => {
                                return busqueda == '' || foto.titulo.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "")
                                .includes(busqueda.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "")); 
                            })
                                .map(foto => 
                                <Card 
                                    key={foto.id} 
                                    foto={foto}
                                />
                            )}
                        </FotosContainer>
                    </SeccionFluida>
                    <Populares/>
                </GaleriaContainer>
            </>
    )
}

export default Galeria;