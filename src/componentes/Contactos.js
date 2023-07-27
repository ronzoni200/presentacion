import React from "react";
import '../estilos/estilo-contacto.css';
import whatapp from '../imagenes/whatsapp-fill.svg'
 


const ContactButton = () => {
  const email = 'ronzoni200@gmail.com';
    return (
      <div className="cont-but">      
        <h2 className="titulos"> CORREO ELECTRONICO </h2>
        <div className="contenedor-linkedin">
          <a href={`mailto:${email}`} className="link">
            <img src={require('../imagenes/correo.png')} className="ico"></img>
          </a>          
            <p className="link"> ronzoni200@gmail.com </p>          
        </div>
      </div>    
    );        
};
  
      
    

function Contacto() {
  return(
    <div className="conenedor-contacto">
      
      <div className="contacto"> 
        <h1 id='contac' className="principal"> MIS CONTACTOS </h1>       
      </div>
      
      <div className="cont">
        <ContactButton />                
      </div>

      <div className="cont">
        <h2 className="titulos"> NUMERO DE TELEFONO </h2>

        <div className="contenedor-linkedin">
          <a href="https://wa.me/5493516191096" target="_blank" className="link"> 
            <img src={whatapp} className="ico"></img>
          </a>
          <a href="https://wa.me/5493516191096" target="_blank" className="link">
            <p className="link"> +5493516191096 </p>
          </a>                
        </div>        
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