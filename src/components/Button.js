import React from 'react';
import styled from 'styled-components'

const ButtonComp = styled.button `
background-color: #6D2451;
color: #D1ABA7;
box-shadow: 0 0 10px;
`




const Button = ({mensaje, estilo}) =>{
    return (
    <ButtonComp className={estilo}>{mensaje}</ButtonComp>
    )
};

export default Button