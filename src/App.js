
import './App.css';
import Indice from './componentes/indice';
import SobreMi from './componentes/Sobre-mi';
import Presentacion from './componentes/Presentacion.js';
import Formacion from './componentes/Formacion.js'

function App() {
  return (
    <div className="App">
        <Presentacion/>
        <Indice/> 
        <SobreMi/>
        <Formacion/>                        
    </div>
  );
}

export default App;
