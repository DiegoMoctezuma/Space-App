import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tags from "./Tags";
import Card from "./Card";

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


const Galeria = ({fotosGaleria = [], seleccionarFoto,fotosGaleriaPopulares=[],like, CambioTag,seleccionado,busqueda}) => {
    return(
        <>
            <Tags CambioTag={CambioTag} seleccionado={seleccionado}/>
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
                                solicitarZoom={seleccionarFoto}
                                like={like}
                            />
                        )}
                    </FotosContainer>
                </SeccionFluida>
                <Populares fotosGaleriaPopulares={fotosGaleriaPopulares}/>
            </GaleriaContainer>
        </>
    )
}

export default Galeria;