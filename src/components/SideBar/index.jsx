import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

import styled from "styled-components";
import ItemNavegacion from "./ItemNavegacion";

const Lista = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: inline-block;
`;

const SideBar = () => {

    const {seleccionadoSide} = useContext(GlobalContext);

    return(
        <aside>
            <nav>
                <Lista>
                    <ItemNavegacion 
                        iconoActivo="iconos/home-activo.png" 
                        iconoInactivo="iconos/home-inactivo.png" 
                        activo={seleccionadoSide === "Inicio" ? true : false}>
                        Inicio
                    </ItemNavegacion>
                    <ItemNavegacion 
                        iconoActivo="iconos/mas-vistas-activo.png" 
                        iconoInactivo="iconos/mas-vistas-inactivo.png"
                        activo={seleccionadoSide === "Más Vistas" ? true : false}>
                        Más Vistas
                    </ItemNavegacion>
                    <ItemNavegacion  
                        iconoActivo="iconos/me-gusta-activo.png" 
                        iconoInactivo="iconos/me-gusta-inactivo.png" 
                        activo={seleccionadoSide === "Más Me Gusta" ? true : false}>
                        Más Me Gusta
                    </ItemNavegacion>
                    <ItemNavegacion  
                        iconoActivo="iconos/nuevas-activo.png" 
                        iconoInactivo="iconos/nuevas-inactivo.png" 
                        activo={seleccionadoSide === "Nuevas" ? true : false}>
                        Nuevas
                    </ItemNavegacion>
                    <ItemNavegacion 
                        iconoActivo="iconos/sorprendeme-activo.png" 
                        iconoInactivo="iconos/sorprendeme-inactivo.png" 
                        activo={seleccionadoSide === "Sorpréndame" ? true : false}>
                        Sorpréndame
                    </ItemNavegacion>
                </Lista>
            </nav>
        </aside>
    )
}

export default SideBar;