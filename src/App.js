import Home from "./components/Home/Home";
import Cursor from "./customCursor/cursor";
import Modal from "./components/Modal/Modal";
import { useGlobalContext } from "./context";
import "./App.css";

function App() {
  const { handleOpenModal, isOpen } = useGlobalContext();

  return (
    <>
      <Home />
      <Cursor />
      <Modal isOpen={isOpen} handleClose={() => handleOpenModal(false)} />
    </>
  );
}

export default App;

//TODO
// animation GSAP
// corriger les fautes
