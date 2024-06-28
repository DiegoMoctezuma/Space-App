import styled from 'styled-components';
import tags from './tags.json';

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
    border: 2px solid transparent;

    cursor: pointer;
    transition: 0.4s ;

    &:hover {
        border-color: #C98CF1;
    }
`;

const Tags = () => {
    return (
        <TagsContainer>
            <p>Buscar por tags:</p>
            <BotonesContainer>
                {tags.map((tag) => {
                    return <BotonEstilizado key={tag.id}>{tag.titulo}</BotonEstilizado>
                })}
            </BotonesContainer>
        </TagsContainer>
    )
}

export default Tags;