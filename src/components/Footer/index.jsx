import styled from "styled-components";

const FooterEstilizado = styled.footer`
    background: #04244F;
    color: #FFFFFF;
    height: 80px;
    padding: 0 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    p{
        font-size: 16px;
        margin: 0;
    }
`;

const RedesSociales = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;

    img{
        cursor: pointer;
        transition: 0.4s;

        &:hover{
            transform: scale(1.1);
        }
    }
`;

const Footer = () => {
    return (
        <FooterEstilizado>
            <RedesSociales>
                <img src="iconos/facebook.png" alt="Icono de facebook"/>
                <img src="iconos/twitter.png" alt="Icono de twitter"/>
                <img src="iconos/instagram.png" alt="Icono de instagram"/>
            </RedesSociales>
            <p>Desarrollado por Alura.</p>
        </FooterEstilizado>
    );
}

export default Footer;