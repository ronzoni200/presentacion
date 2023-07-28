import '../hola-de-estilo/estilo-contador.css';
import Boton from '../componentes/Botoon';
import Contador from '../componentes/Contadoor';
import { useState } from 'react';

function Clic() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }
  const reiniciarContador = () => {
    setNumClics(0)
  }

  return (
    <div id='pra' className="contenedor-contador">      
      
      <div className='titulo-contador'>
        <h1 id='pra' className='titulo-clic'> -- Contador de Clic -- </h1>
      </div>                
      
      <div className='contenedor-principal'>
        
        <div className='cont-numeros'>
          <Contador
            numClic = { numClics }
          />
        </div>

        <div className='botones'>
          <Boton
            texto=' Clic '
            esBotonDeClic={true}
            manejarClic={manejarClic}
          />
        
          <Boton
            texto='Reinicia'
            esBotonDeClic={false}
            manejarClic={reiniciarContador}
          />

        </div>
        
      </div>

    </div>
  );
}

export default Clic;
