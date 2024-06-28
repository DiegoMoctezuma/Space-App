import { act } from "react";
import styled from "styled-components";

const ItemEstilizado = styled.li`
    font-size: 24px;
    margin-bottom: 30px;
    line-height: 28px;
    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 16px;
    color: ${props => props.$activo ? "#7B78E5" : "#D9D9D9"};
    font-family: ${props => props.$activo ? "GandhiSansBold" : "GandhiSansRegular"};
`;

const ItemNavegacion = ({children, iconoActivo, iconoInactivo, activo = false}) => {
    return (
        <ItemEstilizado $activo={activo}>
            <img src={activo ? iconoActivo : iconoInactivo} alt="" />
            {children}
        </ItemEstilizado>
    )
};

export default ItemNavegacion;