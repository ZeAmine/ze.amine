import Cursor from "./customCursor/cursor";
import Home from "./components/Home/Home";
import Modal from "./components/Modal/Modal";
import { useGlobalContext } from "./context";
import "./App.css";

const App = () => {
  const { isOpen } = useGlobalContext();

  return (
    <>
      <Home />
      <Cursor />
      <Modal isOpen={isOpen} />
    </>
  );
};

export default App;

//TODO
// animation GSAP
// corriger les fautes
// animation sur les btn github et lien (facons apple)
