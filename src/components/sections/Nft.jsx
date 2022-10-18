import React,{useRef} from 'react'
import styled, { keyframes } from 'styled-components'
import img1 from '../../assets/20.png'
import img2 from '../../assets/11.png'
import img3 from '../../assets/12.png'
import img4 from '../../assets/13.png'
import img5 from '../../assets/14.png'
import img6 from '../../assets/15.png'
import img7 from '../../assets/16.png'
import img8 from '../../assets/17.png'
import img9 from '../../assets/18.png'
import img10 from '../../assets/19.png'
import ETH from '../../assets/Ethereum.svg'


const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.text};
  

  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  &>*:first-child{
    animation-duration: 20s;

    @media (max-width: 30em){
      animation-duration: 15s;
    }
  }
  &>*:last-child{
    animation-duration: 15s;

    @media (max-width: 30em){
      animation-duration: 10s;
    }
  }
`
const move = keyframes`
  0%{transform: translateX(100%)}
  100%{transform: translateX(-100%)}
`

const Row = styled.div`
  /* background-color:lightblue; */
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;
  animation: ${move} 20s linear infinite ${props => props.direction};

`

const ImgContainer = styled.div`
    width: 15rem;
    margin: 0 auto;
    background-color:${props => props.theme.text};
    cursor: pointer;
    margin-left: 4rem;
    border-top: 2px solid ${props => `rgba(${props.theme.bodyRgba},0.5)`}; 
    border-left: 2px solid ${props => `rgba(${props.theme.bodyRgba},0.5)`}; 
    border-right: 2px solid ${props => `rgba(${props.theme.bodyRgba},0.5)`}; 
    border-radius: 20px;

    @media (max-width: 48em){
      width: 12rem;
    }
    @media (max-width: 30em){
      width: 10rem;
    }
    

    img{
      width:100%;
      height:auto;
      border-radius: 20px;
      /* margin: 0 0.8rem; */
    }
`
const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
color: ${props => props.theme.body};
display: flex;
justify-content: center;
align-items:center;
margin: 1rem auto;
border-bottom: 2px solid ${props => props.theme.body};
width: fit-content;

@media (max-width: 40em){
  font-size: ${props => props.theme.fontxl};
  }
`

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding : 0.8rem 1rem;
  background-color : ${props => props.theme.text};
  border: 2px solid ${props => `rgba(${props.theme.bodyRgba},0.5)`}; 

  border-bottom-left-radius : 20px;
  border-bottom-right-radius : 20px;

  span{
    font-size : ${props => props.theme.fontsm};
    color: ${props => `rgba(${props.theme.bodyRgba},0.5)`}; 
    font-weight:600;
    line-height:1.5rem;
  }

  h1{
    font-size : ${props => props.theme.fontmd};
    color:${props => props.theme.body};
    @media (max-width: 30em){
      font-size : ${props => props.theme.fontsm};
    }
  }
`

const Price = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img{
    width: 1rem;
  }

`


const NftItem = ({img, number=0, price=0, passRef}) =>{
let play = (e) => {
  passRef.current.style.animationPlaystate = 'running';
}
let pause = (e) => {
  passRef.current.style.animationPlaystate = 'paused';
}
  return(
    <ImgContainer onMouseOver={e => pause(e)} onMouseOut={e => play(e)}>
      <img src={img} alt="Ping-Win" />
      <Details>
        <div>
          <span>Ping-Win</span><br />
          <h1>#{number}</h1>
        </div>

        <div>
          <span>Price</span><br />
          <Price>
            <img src={ETH} alt="ETH" />
           <h1>{Number(price).toFixed(1)}</h1>
          </Price>
        </div>
      </Details>
    </ImgContainer>
  )
}
function Nft() {
  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);
  return (
    <Section id='nft'>
      <Title>Buy on Opensea</Title>
      <Row direction="none" ref={Row1Ref}>
        <NftItem img={img1} number="856" price="1.8" passRef={Row1Ref}/>
        <NftItem img={img2} number="451" price="2.9" passRef={Row1Ref}/>
        <NftItem img={img3} number="777" price="1.6" passRef={Row1Ref}/>
        <NftItem img={img4} number="124" price="1.7" passRef={Row1Ref}/>
        <NftItem img={img5} number="916" price="1.5" passRef={Row1Ref}/>
      </Row>
      <Row direction="reverse" ref={Row2Ref}>
      <NftItem img={img6} number="465" price="2" passRef={Row2Ref}/>
        <NftItem img={img7} number="731" price="2.2" passRef={Row2Ref}/>
        <NftItem img={img8} number="948" price="2.4" passRef={Row2Ref}/>
        <NftItem img={img9} number="104" price="1.8" passRef={Row2Ref}/>
        <NftItem img={img10} number="346" price="1.7" passRef={Row2Ref}/>
      </Row>
    </Section>
  )
}

export default Nft