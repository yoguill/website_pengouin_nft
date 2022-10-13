import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: uppercase;

`

function TypeWriterText() {
  return (
    <Title>
        Discover a new era of cool
    </Title>
  )
}

export default TypeWriterText