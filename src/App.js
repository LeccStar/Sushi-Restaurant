import Carousel from "./componentes/Carousel/Carousel";
import Formulario from "./componentes/Formulario/Formulario";
import Navbar from "./componentes/Navbar/Navbar";
import TablaReservaciones from "./componentes/TablaReservaciones/TablaReservaciones";
import "./App.css"
import Cards from "./componentes/Cards/Cards";
import FormInfo from "./componentes/FormInfo/FormInfo";

function App() {
  return (<>
  <Navbar/>
  <h2>¡Conoce nuestros especiales!</h2>
  <div className="CarouselContainer">
    <Carousel/>
  </div>
    <Cards/>
    <div className="FormContainer">
      <FormInfo/>
    <Formulario/>
    </div>
  <TablaReservaciones/>
  </>
  );
}

export default App;
