import styled from "styled-components";
import Titulo from "../../Titulo";

const FotosContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
const FotoPopular = styled.img`
    max-width: 212px;
    border-radius: 20px;
`;

const Boton = styled.button`
    background-color: transparent;
    color: #FFFFFF;
    border: 2px solid #C98CF1;
    border-radius: 10px;

    height: 56px;
    font-family: 'GandhiSansBold';
    font-size: 20px;
    cursor: pointer;
    transition: 0.4s;

    &:hover{
        transform: scale(1.05);
    }
`;

const Populares = ({fotosGaleriaPopulares=[]}) => {
    return (
        <FotosContainer>
            <Titulo $align="center">Populares</Titulo>
            {fotosGaleriaPopulares.map(foto =>{
                return <FotoPopular key={foto.id} src={foto.path} alt={foto.titulo}/>
            })}
            <Boton>Ver más</Boton>
        </FotosContainer>
    )
}

export default Populares;