import styled from "styled-components";

const CargandoContainer = styled.div`
    display: flex;
    justify-content: center;

    img{
        width: 10vw;
        height: 10vw;
    }
`;

const Cargando = () => {
    return (
        <CargandoContainer>
            <img src="imagenes/Loading.gif" alt="GIF Loading" />
        </CargandoContainer>
    )
}

export default Cargando;