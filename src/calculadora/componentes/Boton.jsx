import React from "react";
import '../hola-de-estilo/Boton.css';

function Botoon(props) {
  
  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  return(
    <div
    className={`boton-contenedor ${esOperador(props.children) ? 'operador' : 'null'}`}
    onClick={() => props.manejarClic(props.children)}>
    {props.children}
    </div>
  )
}

export default Botoon;