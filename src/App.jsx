import { useState } from "react";
import styled from "styled-components"
import fotos from "./fotos.json";
import fotosPopulares from "./fotos-populares.json";

import GlobalStyle from "./components/GlobalStyles";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Banner from "./components/Banner";
import banner from "./assets/banner.png";
import Galeria from "./components/Galeria";
import ModalZoom from "./components/ModalZoom";

// Estilos
const FondoGradiente = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`;

const MainContainer = styled.main`
  display: flex;
  gap:30px;
`;

const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {

  const [fotosGaleria, setFotosGaleria] = useState(fotos);
  const [fotosGaleriaPopulares, setFotosPopulares] = useState(fotosPopulares);
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null);

  const Like = (foto) => {

    if(foto.id === fotoSeleccionada?.id){
      setFotoSeleccionada({
        ...fotoSeleccionada,
        like: !foto.like  
      });
    }

    setFotosGaleria(fotosGaleria.map(fotoG => {
      return {
        ...fotoG,
        like: (fotoG.id == foto.id) ? !fotoG.like : fotoG.like
      }
    }));
  };

  return (
    <>
      <FondoGradiente>
        <GlobalStyle />

        <AppContainer>
        <Header />

          <MainContainer>

            <SideBar />
            <ContenidoGaleria>

              <Banner imagen={banner}>La galería más completa del espacio</Banner>
              <Galeria 
                seleccionarFoto={foto => setFotoSeleccionada(foto)} 
                fotosGaleria={fotosGaleria}
                fotosGaleriaPopulares={fotosGaleriaPopulares}
                like={Like}
              />

            </ContenidoGaleria>

          </MainContainer>
          
        </AppContainer>
        <ModalZoom imagen={fotoSeleccionada} close={setFotoSeleccionada} like={Like} />
      </FondoGradiente>
    </>
  )
};

export default App
