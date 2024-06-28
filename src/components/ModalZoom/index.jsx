import styled from "styled-components";
import Card from "../Galeria/Card";

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: rgba(0,0,0,0.7);
`;

const DialogEstilizado = styled.dialog`
    position:absolute;
    top: ${props => props.$mitadY}px;
    bottom: -${props => props.$mitadY}px;

    background-color: transparent;
    padding: 0;
    border: 0;
    width: 900px;
    display: flex;
    justify-content: center;
    form {
        img {
            position: relative;
            top: 15px;
            right: 35px;
            cursor: pointer;
            transition: 0.4s;

            &:hover {
                transform: scale(1.3);
            }
        }
    }
`;

const ModalZoom = ({imagen,close,like}) => {
    return (
        <>
            {imagen && 
                <>
                    <Overlay/>
                    <DialogEstilizado $mitadY={window.scrollY} open={!!imagen}>
                        <Card expandida={true} foto={imagen} like={like} />
                        <form method="dialog">
                            <img formMethod="dialog" src="iconos/cerrar.png" onClick={() => close(null)}/>
                        </form>
                    </DialogEstilizado>
                </>
            }
        </>
    )
}

export default ModalZoom;