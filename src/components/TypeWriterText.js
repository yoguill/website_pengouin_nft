import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';
import Button from './Button';

const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
width: 80%;
color: ${props => props.theme.text};
align-self: flex-start;

span{
    text-transform: uppercase;
    font-family:'Akaya Telivigala', cursive;
}
.text-1{
    color : pink;
}
.text-2{
    color : green;
}
.text-3{
    color : violet;
}
.text-4{
    color : orange;
}

@media (max-width: 70em){
    font-size: ${props => props.theme.fontxl};
}
@media (max-width: 48em){
    align-self:center;
    text-align:center;
}
@media (max-width: 40em){
    width: 90%;

}
`

const Subtitle = styled.h3`
    font-size: ${(props) => props.theme.fontlg};
    text-transform: capitalize;
    color: ${props => `rgba(${props.theme.textRgba},0.6)`};
    font-weight:600;
    margin-bottom: 1rem;
    width: 80%;
    align-self: flex-start;

    @media (max-width: 40em){
    font-size: ${props => props.theme.fontmd};    
   
}

@media (max-width: 48em){
    align-self:center;
    text-align:center;
}

`

const ButtonContainer = styled.div`
    width: 80%;
    align-self: flex-start;

    @media (max-width: 48em){
    align-self:center;
    text-align:center;

    button{
        margin: 0 auto;
    }
}
`

const TypeWriterText = () => {
    return (
        <>
        <Title>
        Discover a way to contribute to biodiversity...
            <Typewriter options={{
                autoStart: true,
                loop: true
            }}
                onInit={(typewriter) => {
                    typewriter.typeString('<span class="text-1">Nfts Project.</span>')
                        .pauseFor()
                        .deleteAll()
                        .typeString('<span class="text-2">Protect Biodiversity.</span>')
                        .pauseFor()
                        .deleteAll()
                        .typeString('<span class="text-3">Collectible Items.</span> ')
                        .pauseFor()
                        .deleteAll()
                        .typeString('<span class="text-4">Lottery Gifts.</span> ')
                        .pauseFor()
                        .deleteAll()
                        .start()
                }}
            />
            </Title>
            <Subtitle>Bored of somes project ? Try Something New !</Subtitle>
            <ButtonContainer>
                <Button text="Explore on Opensea" link="https://opensea.io/fr" />
            </ButtonContainer>
        
        </>
    )
}

export default TypeWriterText