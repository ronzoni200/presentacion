import imgCalculador from './imagenes/calculadora.png'
import './App-calculadora.css';
import Botoon from './componentes/Boton';
import Pantalla from './componentes/Pantalla.jsx';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import {evaluate}   from 'mathjs';


function Calculadora() {

  const [input,setInput] = useState('');

  const agregarInput = valor =>{
    setInput(input + valor);
  };

  const calcularResultado = () => {
    
    if (input)  {          
          setInput(evaluate(input));
        }else{
          alert('ingrese un valor numerico');
        }        
      };

  return (
    <div className="App-calculador">
      <div className='calculadora-logo-contenedor'>
        <img className='calculadora-logo'
        src={imgCalculador}
        alt='loco de calculadora'/>
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Botoon manejarClic = {agregarInput}>1</Botoon>
          <Botoon manejarClic = {agregarInput}>2</Botoon>
          <Botoon manejarClic = {agregarInput}>3</Botoon>
          <Botoon manejarClic = {agregarInput}>+</Botoon>
        </div>
        <div className='fila'>
          <Botoon manejarClic = {agregarInput}>4</Botoon>
          <Botoon manejarClic = {agregarInput}>5</Botoon>
          <Botoon manejarClic = {agregarInput}>6</Botoon>
          <Botoon manejarClic = {agregarInput}>-</Botoon>
        </div>
        <div className='fila'>
          <Botoon manejarClic = {agregarInput}>7</Botoon>
          <Botoon manejarClic = {agregarInput}>8</Botoon>
          <Botoon manejarClic = {agregarInput}>9</Botoon>
          <Botoon manejarClic = {agregarInput}>*</Botoon>
        </div>
        <div className='fila'>          
          <BotonClear  manejarClear={ () => setInput('')}>C</BotonClear>          
          <Botoon manejarClic = {agregarInput}>0</Botoon>
          <Botoon manejarClic = {agregarInput}>.</Botoon>
          <Botoon manejarClic = {agregarInput}>/</Botoon>
        </div>
        <div className='igual'>
        <Botoon manejarClic = {calcularResultado}>=</Botoon>
        </div>
        
        
      </div>
    </div>
  );
}

export default Calculadora;
