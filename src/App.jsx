import { useState, useEffect } from "react";
import styled from "styled-components"
import fotosPopulares from "./fotos-populares.json";

import GlobalStyle from "./components/GlobalStyles";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Banner from "./components/Banner";
import banner from "./assets/banner.png";
import Galeria from "./components/Galeria";
import ModalZoom from "./components/ModalZoom";
import Footer from "./components/Footer";
import Cargando from "./components/Cargando";

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


// Estados de Fotos
  const [fotosGaleria, setFotosGaleria] = useState([]);
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

// Estado tags
  const [seleccionado,setSeleccionado] = useState('Todas');
  const [busqueda, setBusqueda] = useState('');


  const CambioTag = (titulo) => {
      setSeleccionado(titulo);
  };

// Conexion API
  useEffect(() => {
    const getData = async () => {
      const res = await fetch('http://localhost:3001/fotos');
      const data = await res.json();
      setFotosGaleria([...data]);
    };
    setTimeout(() => getData(),5000);
  });

// Estado SideBar
  const [seleccionadoSide, setSeleccionadoSide] = useState('Inicio');
  const CambioSide = (titulo) => {
    setSeleccionadoSide(titulo);
  }

  return (
    <>
      <FondoGradiente>
        <GlobalStyle />

        <AppContainer>
        <Header Busqueda={setBusqueda}/>

          <MainContainer>

            <SideBar CambioSide={CambioSide} seleccionadoSide={seleccionadoSide} />
            <ContenidoGaleria>

              <Banner imagen={banner}>La galería más completa del espacio</Banner>
              { fotosGaleria.length === 0 ? <Cargando /> :
                <Galeria 
                  seleccionarFoto={foto => setFotoSeleccionada(foto)} 
                  fotosGaleria={fotosGaleria}
                  fotosGaleriaPopulares={fotosGaleriaPopulares}
                  like={Like}
                  CambioTag={CambioTag}
                  seleccionado={seleccionado}
                  busqueda={busqueda}
                />
              }

            </ContenidoGaleria>

          </MainContainer>
          
        </AppContainer>
        <ModalZoom imagen={fotoSeleccionada} close={setFotoSeleccionada} like={Like} />
        <Footer />
      </FondoGradiente>
    </>
  )
};

export default App
