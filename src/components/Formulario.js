import React from 'react';




const Formulario = () => {
   return (
       <>
    <h2>Formulario de adopcion</h2>
    <form action="gatitos.html" method="get">
        <label> Nombre:
            <input type="text" name="nombre" placeholder="Ingresa tu nombre"/>
        </label>
        <label> Telefono:
            <input type="text" name="telefono" placeholder="Ingresa tu telefono" />
        </label>
        <label class="inline"> Color de pelaje:
            <input type="checkbox" name="pelaje" value="negro"/>Negro
            <input type="checkbox" name="pelaje" value="blanco"/>Blanco
            <input type="checkbox" name="pelaje" value="gris"/>Gris
            <input type="checkbox" name="pelaje" value="naranja"/>Naranja
            <input type="checkbox" name="pelaje" value="marron"/>Marrón
            <input type="checkbox" name="pelaje" value="atigrado"/>Atigrado
        </label> 
        <label class="inline"> Sexo:
            <input type="radio" name="sexo" value="femenino"/>Femenino
            <input type="radio" name="sexo" value="masculino"/>Masculino
            <input type="radio" name="sexo" value="indiferente"/>Indiferente
        </label>
        <label>
            <input id="submit" type="submit" name="enviar" value="Filtrar"/>
        </label>

    </form>
    </>
  )

}


export default Formulario