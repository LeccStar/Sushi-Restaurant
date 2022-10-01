import Carousel from "./componentes/Carousel/Carousel";
import Navbar from "./componentes/Navbar/Navbar";
import "./App.css"
import Cards from "./componentes/Cards/Cards";
import FormInfo from "./componentes/FormInfo/FormInfo";
import Footer from "./componentes/Footer/Footer";

function App() {
  return (<>
    <Navbar />
    <h2>¡Conoce nuestros especiales!</h2>
    <div className="CarouselContainer">
      <Carousel />
    </div>
    <Cards />
    <FormInfo />
    <Footer />
  </>
  );
}

export default App;
