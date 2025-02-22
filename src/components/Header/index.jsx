import styled from "styled-components";
import CampoTexto from "../CampoTexto";

const HeaderEstilizado = styled.header`
    display: flex;
    justify-content: space-between;

    padding: 60px 0;

    img {
        width:212px;
    }
`;

const Header = () => {
    return (
        <>
            <HeaderEstilizado>
                <img src="imagenes/logo.png" alt="Logo Space App"/>
                <CampoTexto/>
            </HeaderEstilizado>
        </>
    )
};

export default Header;