import React from 'react';
import Button from './Button'




const TarjetaDeGatos = ({name, shortDesc, img, isAvailable}) => {  
  
  return (
    <div className ={isAvailable ? "tarjetita" : "tarjetitaDisabled"}>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{shortDesc}</p>
      <Button mensaje={isAvailable ? "Ver más": "No Disponible"} estilo = {"boton-vermas"}/>
    </div>
  )

}


export default TarjetaDeGatos