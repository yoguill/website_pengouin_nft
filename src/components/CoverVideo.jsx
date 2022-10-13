import React from 'react'
import styled from 'styled-components'
import GIF from '../assets/test.mp4'  
//importer la video {video]}


const VideoContainer = styled.div`
width:100%;

video{
    width:100%;
    height: auto;
}
`

function CoverVideo() {
  return (
    <VideoContainer>
        <video src={GIF} type="video/mp4" autoPlay muted loop/>
    </VideoContainer>
  )
}

export default CoverVideo