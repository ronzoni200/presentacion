import React from "react";
import '../estilos/estilo-presentacion.css';
import gus from '../imagenes/gus.jpg';


function Presentacion() {
    return(    
      <div className='contenedor-presentacion'> 

        <div > <img src={gus} alt="gus" className='imagen-yo'/> </div>
        
        <div className="mi-nombre">
          <h1 className="tit"> RONZONI GUSTAVO ALEJANDRO </h1> <br/>
          <h2 className="tit">.....Desarollador Full Stack.....</h2> 
        </div>
                      
      </div> 
    ); 
  };



export default Presentacion;