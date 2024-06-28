import styled from "styled-components";

const Figure = styled.figure`
    width: ${props => (props.$expandida ? "90%" : "460px")};
    max-width: 100%;
    margin: 0;
    border-radius: 20px;
    background-color: #001634;

    & > img{
        width: 100%;
        border-radius: 20px 20px 0 0;
    }

    figcaption {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 15px;
    }
`;
const TitulosInfo = styled.div`
        h3 {
            font-family: 'GandhiSansBold';
            font-size: 20px;
        }
        h4 {
            flex-grow: 1;
            font-family: 'GandhiSansRegular';
            font-size: 16px;
        }
        h3,h4{
            margin: 0;
            padding: 0;
        }
`;

const ImagenesInfo = styled.div`
    display: flex;
    gap: 24px;

    img{
        width: 24px;
        cursor: pointer;
        transition: 0.3s;

        &:hover{
            transform: scale(1.2);
        }
    }
`;

const Card = ({foto,expandida=false,solicitarZoom,like}) => {

    const iconoFav = foto.like ? "iconos/favorito-activo.png" : "iconos/favorito.png";

    return (
        <Figure $expandida={expandida}>
            <img src={foto.path} alt={foto.titulo}/>
            <figcaption>
                <TitulosInfo>
                    <h3>{foto.titulo}</h3>
                    <h4>{foto.fuente}</h4>
                </TitulosInfo>
                <ImagenesInfo>
                    <img onClick={() => like(foto)} src={iconoFav}  alt="Icono favorito"/>
                    {!expandida && <img onClick={() => solicitarZoom(foto)} src="iconos/expandir.png" alt="Icono zoom"/>}
                </ImagenesInfo>
            </figcaption>
        </Figure>
    )
}

export default Card;