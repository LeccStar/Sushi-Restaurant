import Carousel from "./componentes/Carousel/Carousel";
import Formulario from "./componentes/Formulario/Formulario";
import Navbar from "./componentes/Navbar/Navbar";
import TablaReservaciones from "./componentes/TablaReservaciones/TablaReservaciones";
import "./App.css"
import Cards from "./componentes/Cards/Cards";

function App() {
  return (<>
  <Navbar/>
  <h1>Conoce nuestros especiales</h1>
  <div className="CarouselContainer">
    <Carousel/>
  </div>
    <Cards/>
  <Formulario/>
  <TablaReservaciones/>
  </>
  );
}

export default App;
