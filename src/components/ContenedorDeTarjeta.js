import React from 'react';
import TarjetaDeGatos from './TarjetaDeGatos';





const ContenedorDeTarjeta = ({gatos}) => {  
  
  return (
    <div  className="cards">
    {
      gatos.map((gato, i) => <TarjetaDeGatos key={i}
       name={gato.name}
       shortDesc={gato.shortDesc}
       img={gato.img}
       isAvailable={gato.disponible} />
      )
    }
  </div>
  )

}


export default ContenedorDeTarjeta