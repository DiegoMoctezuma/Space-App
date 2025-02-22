import { useContext, useRef } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { styled } from "styled-components";

const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
`;

const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    outline: none;
`;
const IconoLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px !important;
    height: 38px;
    cursor: pointer;
    transition: 0.4s;

    &:hover{
        transform: scale(1.2);
        transition: 0.4s;
    }
`;

const CampoTexto = () => {

    const { dispach } = useContext(GlobalContext);
    const inputBusqueda = useRef(null);

    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado 
                placeholder="Busca una foto" 
                type="text"
                ref={inputBusqueda}
            />
            <IconoLupa 
                onClick={() => dispach({type: 'SET_BUSQUEDA', payload:inputBusqueda.current.value})}
                src="iconos/search.png" 
                alt="ícono de lupa" 
            />
        </ContainerEstilizado>
    )
};
export default CampoTexto