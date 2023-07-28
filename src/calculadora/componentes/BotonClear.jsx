import React from "react";
import '../hola-de-estilo/BotonClear.css'

const BotonClear = (props) => (
  <div className="boton-clear"
  onClick={() => props.manejarClear(props.children)}>
    {props.children}
  </div>
);

export default BotonClear;