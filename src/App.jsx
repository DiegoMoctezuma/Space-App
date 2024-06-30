import GlobalStyle from "./components/GlobalStyles";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Banner from "./components/Banner";
import banner from "./assets/banner.png";
import Galeria from "./components/Galeria";
import ModalZoom from "./components/ModalZoom";
import Footer from "./components/Footer";
import GlobalContextProvider from "./context/GlobalContext";

import styled from "styled-components";

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
  padding-bottom: 100px;
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

// App
const App = () => {

  return (
    <>
      <FondoGradiente>
        <GlobalStyle />
        
        <GlobalContextProvider>
          <AppContainer>
          <Header/>

            <MainContainer>

              <SideBar/>
              <ContenidoGaleria>

                <Banner imagen={banner}>La galería más completa del espacio</Banner>
                <Galeria/>

              </ContenidoGaleria>

            </MainContainer>

          </AppContainer>

          <ModalZoom/>

        </GlobalContextProvider>
        
        <Footer />
      </FondoGradiente>
    </>
  )
};

export default App
