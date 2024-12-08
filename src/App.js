import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Destinos from './pag/Destinos';
import Paquetes from './pag/Paquetes';
import SepararPaquete from './pag/SepararPaquete';
import PersonalizarPaquete from './pag/PersonalizarPaquete';
import Crud from './pag/Crud';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinos" element={<Destinos />} />
          <Route path="/paquetes" element={<Paquetes />} />
          <Route path="/separar" element={<SepararPaquete />} />
          <Route path="/personalizar" element={<PersonalizarPaquete />} />
          <Route path="/crud" element={<Crud />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

