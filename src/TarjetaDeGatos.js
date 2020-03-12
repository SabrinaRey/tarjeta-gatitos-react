import React from 'react';




const TarjetaDeGatos = props => {
  console.log(props)
  return (
    <div className="tarjetita">
      <img src={props.info.img} alt={props.info.name} />
      <h3>{props.info.name}</h3>
      <p>{props.info.shortDesc}</p>
      <button className="boton-vermas">Ver mas</button>
    </div>
  )

}


export default TarjetaDeGatos