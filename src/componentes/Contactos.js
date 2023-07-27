import React from "react";
import '../estilos/estilo-contacto.css';
function Contacto() {
  return(
    <div className="conenedor-contacto">
      
      <div className="contacto"> 
        <h1 id='contac' className="principal"> MIS CONTACTOS </h1> 
      </div>

      <div className="cont">
        <h2 className="titulos"> CORREO ELECTRONICO </h2>
        <img src={require('../imagenes/correo.png')} className="ico"></img>
        <p className="link" > ronzoni200@gmail.com </p>        
      </div>

      <div className="cont">
        <h2 className="titulos"> NUMERO DE TELEFONO </h2>
        <img src={require('../imagenes/fon.png')} className="ico"></img>
        <p className="link"> +5493516191096 </p>
      </div>

      <div className="cont"> 
        <h2 className="titulos"> LINKEDIN </h2> 

      <div className="contenedor-linkedin">
        <a href="https://www.linkedin.com/in/gustavo-ronzoni-desarollador/" className="link">
          <img src={require('../imagenes/linke.png')} className="ico" ></img>          
        </a>
        <a href="https://www.linkedin.com/in/gustavo-ronzoni-desarollador/" className="link">
          <p className="link"> https://www.linkedin.com/in/gustavo-ronzoni-desarollador/ </p>
        </a>
      </div>
        
        
        
      </div>

      <div className="cont">
        <h2 className="titulos"> GITHUB </h2>

        <div className="contenedor-linkedin" >
          <a href="https://github.com/ronzoni200" className="link">
            <img src={require('../imagenes/github.png')} className="ico"></img>
          </a>
          <a href="https://github.com/ronzoni200" className="link">
            <p className="link"> https://github.com/ronzoni200 </p>
          </a>      

        </div>
        
      </div>

    </div>
  );  
};

export default Contacto;