
import './App.css';
import Indice from './componentes/indice';
import SobreMi from './componentes/Sobre-mi';
import Presentacion from './componentes/Presentacion.js';
import Formacion from './componentes/Formacion.js'
import Contacto from './componentes/Contactos.js';
import Clic from '../src/contador/componentes/App'
import Calculadora from './calculadora/App.js'
function App() {
  return (
    
    <div className="App">  
        <Indice/>     
        <Presentacion/>
        
        <SobreMi/>        
        <Formacion/> 
      <div className='ejercicios'>
        <Clic/>  
        <Calculadora/> 
      </div>
        <Contacto/>               
    </div>
  );
}

export default App;
