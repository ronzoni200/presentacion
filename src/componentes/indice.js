import React from "react";
import '../estilos/estilo-indice.css';
function Indice(props) {
    return(
    <nav className="navegador">
        <ul className='inicio'>          
          <li> <a href='#mi'><b>SOBRE MI</b> </a></li>          
          <li> <a href="#for">  <b>FORMACION</b> </a> </li>
          <li> <a href="#pra"> <b>PRACTICAS</b> </a> </li>
          <li> <a href="#contac"> <b>CONTACTO </b> </a> </li>          
        </ul>
      </nav> 
    );    
};

export default Indice;