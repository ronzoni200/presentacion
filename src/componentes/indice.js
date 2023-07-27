import React from "react";
import '../estilos/estilo-indice.css';
function Indice(props) {
    return(
    <nav >
        <ul className='inicio'>          
          <li> <a href='#mi'><b>SOBRE MI</b> </a></li>          
          <li> <a href="#for">  <b>FORMACION</b> </a> </li>
          <li> <b>PRACTICAS</b></li>
          <li> <b>CONTACTO</b> </li>          
        </ul>
      </nav> 
    );    
};

export default Indice;