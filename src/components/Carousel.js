import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-cards";
import img1 from '../assets/20.png'
import img2 from '../assets/11.png'
import img3 from '../assets/12.png'
import img4 from '../assets/13.png'
import img5 from '../assets/14.png'
import img6 from '../assets/15.png'
import img7 from '../assets/16.png'
import img8 from '../assets/17.png'
import img9 from '../assets/18.png'
import img10 from '../assets/19.png'
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Pagination,Navigation,Autoplay, EffectCards } from "swiper";
import Arrow from '../assets/Arrow.svg'





const Container = styled.div`
    width: 25vw;
    height:70vh;

    @media (max-width: 70em){
        height:60vh;
    }

    @media (max-width: 64em){
        height: 50vh;
        width: 30vw;
    }

    @media (max-width: 48em){
        height: 50vh;
        width: 40vw;
    }
    @media (max-width: 30em){
        height: 45vh;
        width: 60vw;
    }

.swiper{
    width:75%;
    height:60%;
    top: 20%;
}
.swiper-slide{
    background-color: ${props => props.theme.carouselColor};

    border-radius: 20px;

    display:flex;
    justify-content:center;
    align-items:center;

    img{
        display:block;
        width:100%;
        height:auto;
        object-fit: cover;
    }
}
.swiper-button-next{
    color: ${props => props.theme.text};
    right:0;
    width:4rem;
    top:60%;

    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after{
        display:none;
    }

    @media (max-width: 64em){
        width:3rem;
    }
    @media (max-width: 30em){
        width:2rem;
    }

}
.swiper-button-prev{
    color: ${props => props.theme.text};
    left:0;
    width:4rem;
    top:60%;
    transform:rotate(180deg);

    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after{
        display:none;
    }
    @media (max-width: 64em){
        width:3rem;
    }
    @media (max-width: 30em){
        width:2rem;
    }

}
`

const Carousel = () => {
  return (
    <Container>
    <Swiper
    autoplay={{
        delay:1800,
        disableOnInteraction:false,
    }}
    pagination={{type:'fraction'}}
    navigation={true}
    scrollbar={{draggable:true}}
    effect={"cards"}
    grabCursor={true}
    modules={[EffectCards,Pagination,Navigation,Autoplay]}
    className="mySwiper"
  >
    <SwiperSlide><img src={img1}></img></SwiperSlide>
    <SwiperSlide><img src={img2}></img></SwiperSlide>
    <SwiperSlide><img src={img3}></img></SwiperSlide>
    <SwiperSlide><img src={img4}></img></SwiperSlide>
    <SwiperSlide><img src={img5}></img></SwiperSlide>
    <SwiperSlide><img src={img6}></img></SwiperSlide>
    <SwiperSlide><img src={img7}></img></SwiperSlide>
    <SwiperSlide><img src={img8}></img></SwiperSlide>
    <SwiperSlide><img src={img9}></img></SwiperSlide>
    <SwiperSlide><img src={img10}></img></SwiperSlide>
  </Swiper>
  </Container>
  )
}

export default Carousel