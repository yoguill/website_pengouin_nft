import React from 'react'
import styled from 'styled-components'
import img1 from '../../assets/12.png'
import img2 from '../../assets/20.png'
import img3 from '../../assets/17.png'
import img4 from '../../assets/16.png'
import img5 from '../../assets/19.png'
import img6 from '../../assets/6.png'
import img7 from '../../assets/7.png'
import img8 from '../../assets/8.png'
import img9 from '../../assets/9.png'
import img10 from '../../assets/10.png'
import Confetti from '../Icons/Confetti'



const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.body};
  position:relative;
`
const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items:center;
margin: 1rem auto;
border-bottom: 2px solid ${props => props.theme.text};
width: fit-content;

@media (max-width: 40em){
    width: 80% ;
    font-size: ${props => props.theme.fontxl};
  }
`

const Container = styled.div`
  width: 75% ;
  margin: 2rem auto;

  display:flex;
  justify-content: space-between;
  align-items:center;
  flex-wrap: wrap;
  /* background-color: lightblue; */

  @media (max-width: 64em){
    width: 80% ;
  }
  @media (max-width: 48em){
    width: 90% ;
    justify-content: center;
  }
`
const Containerv2 = styled.div`
  width: 75% ;
  margin: 2rem auto;

  display:flex;
  justify-content: space-around;
  align-items:center;
  flex-wrap: wrap;
  /* background-color: lightblue; */

  @media (max-width: 64em){
    width: 80% ;
  }
  @media (max-width: 48em){
    width: 90% ;
    justify-content: center;
  }
`





const Item = styled.div`
  width: calc(20rem - 4vw);
  padding: 1rem 0;
  color: ${props => props.theme.body};
  margin: 2rem 1rem;
  position:relative;
  z-index:5;

  backdrop-filter: blur(4px);

  border: 2px solid ${props => props.theme.text};
  border-radius: 20px;
  transition: all 0.3s ease ;

  &:hover{
    img{
      transform:translateY(-1rem) scale(1.2)
    }
  }
  @media (max-width: 64em){
    width: 70vw ;
  }


`
const ImageContainer = styled.div`
  width:90%;
  margin:0 auto;
  background-color:${props => props.theme.body};
  

  border-radius: 20px;
  cursor: pointer;

img{
  width: 100%;
  height: auto;
  border-radius:20px
}
`
const Name = styled.h2`
  font-size: ${props => props.theme.fontlg};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: ${props => props.theme.text};
  margin-top: 1rem;
`
const Position = styled.h2`
  font-size: ${props => props.theme.fontmd};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: ${props => `rgba(${props.theme.textRgba},0.9)`};
  font-weight:400;
`



const MemberComponent = ({img, name =" ", position="" }) => {
  return (
    <Item>
      <ImageContainer>
        <img src={img} alt="" />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  )
}

const Team = () => {
  return (
    <Section id="team">
      <Confetti/>
      <Title>Team</Title>
      <Container>
        <MemberComponent img ={img1 } name ="ANDREW" position ="developer Web3" />
        <MemberComponent img ={img2 } name ="John" position ="Marketing"/>
        <MemberComponent img ={img3 } name ="Tom" position ="Social Media"/>
      </Container>
      <Containerv2>
        <MemberComponent img ={img4 } name ="Maggie" position ="Graphic designer"/>
        <MemberComponent img ={img5 } name ="Zack" position ="CEO" />
      </Containerv2>
    </Section>
  )
}

export default Team