import React from "react";
import pc from '../imagenes/pc.png'
import '../estilos/estilo-sobre-mi.css';


    function SobreMi() {
        return(
        <div className='sobre-mi'>
        <div > <img src={pc} alt="pc" className='pc' /> </div>  
        <p id='mi'>
        Hola, mi nombre es Gustavo Ronzoni.<br/> 
        Soy estudiante de programación y tengo conocimientos en lenguajes como: Java, JPA, Spring Boot/MVC, MySQL, JavaScript, React, Node.js, HTML5 y CSS3. <br/> 
        Estoy determinado a capacitarme y formarme aún más, siendo más objetivo en mi camino de aprendizaje. <br/>
        <br/>        
        Sé que una experiencia laboral potenciará mi desarrollo, aumentando mi habilidad para aplicar lo que he ido aprendiendo en estos meses.<br/>
         A pesar de las frustraciones y desánimos, la convicción de mejorar cada día para ser un profesional en el futuro me hace perseverar en el camino del aprendizaje.<br/>
       <br/>       
        Espero tener la oportunidad de trabajar en un equipo y aprender en un entorno laboral cooperativo. Estoy dispuesto a poner todo de mí para colaborar en cada objetivo y meta a cumplir.
        </p>
      </div> 
        );
    };
    
    export default SobreMi;