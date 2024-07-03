import styled from 'styled-components';
import { useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';

const TagsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;

    margin-top: 50px;

    p{
        font-size: 24px;
        color: #D9D9D9;
    }
`;

const BotonesContainer = styled.div`
    display: flex;
    gap: 20px;
`;

const BotonEstilizado = styled.button`
    font-size: 24px;
    padding: 12px;

    background-color: #45576e;
    color: #FFFFFF;
    border-radius: 10px;
    border: 2px solid ${props => (props.$seleccionado ? "#C98CF1" : "transparent")};

    cursor: pointer;
    transition: 0.4s ;

    &:hover {
        border-color: #C98CF1;
    }
`;

const Tags = () => {

    const { state, dispach } = useContext(GlobalContext);

    return (
        <TagsContainer>
            <p>Buscar por tags:</p>
            <BotonesContainer>
                {state.tags.map((tag) => {
                    return( 
                    <BotonEstilizado onClick={() => dispach({type:'SET_SELECCIONADO_TAG', payload: tag.id})} $seleccionado={tag.id === state.seleccionadoTag ? true : false} key={tag.id}>
                        {tag.titulo}
                    </BotonEstilizado>);
                })}
            </BotonesContainer>
        </TagsContainer>
    )
}

export default Tags;