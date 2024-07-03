import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function useFotoModal(){

    const { state, dispach } = useContext(GlobalContext);

    const openModal = (foto) => {
        dispach({type:'SET_FOTO_SELECCIONADA', payload: foto});
    };

    const closeModal = () => {
        dispach({type:'SET_FOTO_SELECCIONADA', payload: null});
    };

    const selectedFoto = state.fotoSeleccionada;
    const isOpenModal = state.modalAbierto;

    return { openModal, closeModal, selectedFoto, isOpenModal };

}

export default useFotoModal;