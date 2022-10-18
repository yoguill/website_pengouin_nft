import React from 'react'
import styled from 'styled-components'
// import GIF from '../assets/test.mp4'  
import GIF from '../assets/test.gif'  
//importer la video {video]}


const VideoContainer = styled.div`
width:100%;

img{
    width:100%;
    height: auto;
}
@media (max-width: 64em){
  min-width: 40vh;
}
`

const CoverVideo = () => {
  return (
    <VideoContainer>
        {/* <video src={GIF} type="video/mp4" autoPlay muted loop/> */}
        <img border="0" src={GIF}></img>
    </VideoContainer>
  )
}

export default CoverVideo