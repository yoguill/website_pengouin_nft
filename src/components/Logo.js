import React from 'react'
import styled from 'styled-components'


const LogoText = styled.h1`
font-family: 'Akaya Telivigala', cursive;
font-size: ${props => props.theme.fontxxxl};
color: ${props => props.theme.text};
transition: all 0.2s ease;

&:hover{
    transform: scale(1.1)
}

@media (max-width: 64em){
  font-size: ${props => props.theme.fontxl};
}
`
const Logo = () => {
  return (
    <LogoText>

        Ping-win.

    </LogoText>
  )
}

export default Logo