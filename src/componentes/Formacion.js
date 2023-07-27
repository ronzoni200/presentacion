import React from "react";
import egg from '../imagenes/egg.png';
import '../estilos/estilo-formacion.css';
import certificado from '../archivos/certificado-desde-cero.pdf';

function Formacion () {
  return(
    <div className="contenedor-formacion">
      <h1 id="for" className="titulo-formacion">MI FORMACION</h1>
      <div className="colum">
        
        <div className="cont-img"> 
          <a href="https://egg.live/programacion-fullstack/" target="_blank"> <img src={egg} alt="egg" className="img-formacion" /> </a>
        </div> 

        <div className="cont-subt">  
          <h2 className="sub-titulo"> Egg Cooperation </h2>
          <p className="info"> Comenzó este curso con una introducción a la Programación desde Cero (PDC) utilizando PSeInt. <br/>
          <br/>
          En esta primera parte, se nos enseñaron los fundamentos de la programación, la lógica algorítmica y el pensamiento lógico-matemático, con una duración total de 81 horas. <br/>
          <br/>
          Continuamos con el curso de Desarrollo Full Stack con Java en el IDE 17 Apache NetBeans, donde también agregamos MySQL Workbench y utilizamos JPA para trabajar con ambos conceptos. <br/>
          <br/>
          Posteriormente, incorporamos Spring Boot para crear una API REST y también para manejar el frontend utilizando HTML, CSS y JavaScript con la librería de React y el entorno Node.js con Visual Studio Code.
          </p> 
            <div className="con-link">
              <a href={certificado} target="_blank" className="alink" > <b>CERTIFICADO PDC</b> </a>
            </div>        
        </div>
      </div>     
    </div>
  );  
};

export default Formacion;