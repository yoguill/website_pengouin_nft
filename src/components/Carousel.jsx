import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-cards";
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'
import img6 from '../assets/6.jpg'
import img7 from '../assets/7.jpg'
import img8 from '../assets/8.jpg'
import img9 from '../assets/9.jpg'
import img10 from '../assets/10.jpg'
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Pagination,Navigation,Autoplay, EffectCards } from "swiper";
import Arrow from '../assets/Arrow.svg'





const Container = styled.div`
    width: 25vw;
    height:70vh;
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

}
`

function Carousel() {
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