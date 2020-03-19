import React from 'react';
import Button from './Button'
import styled from 'styled-components'

const Div = styled.div `
.tarjetita {
  margin-top: 20px;
  width: 100%;
  height: auto;
  background-color: ${prop => prop.isAvailable ? '#6D2451' : 'rgb(95, 28, 69)'} 
}

`


const TarjetaDeGatos = ({name, shortDesc, img, isAvailable}) => {  
  
  return (
    <Div isAvailable = {isAvailable}>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{shortDesc}</p>
      <Button mensaje={isAvailable ? "Ver más": "No Disponible"} estilo = {"boton-vermas"}/>
    </Div>
  )

}


export default TarjetaDeGatos