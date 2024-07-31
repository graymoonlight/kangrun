'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { PrevArrow, NextArrow } from './sliderArrow';
import '../styles/components/slider.css';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />
};

export default function CSlider() {
  return (
    <div className="slider">
      <Slider {...settings}>
        <div className="slide">
          <div className='slide-content'>
            <div className='slide-content-container'>
              <div className='slide-image'>
                <Image src="/icons.png" width={500} height={500}/>
              </div>
              <div className='slide-text'>
                <p>Честность, оригинальное качество, оперативность,<br /> взаимовыгодное дружеское сотрудничество!</p>
              </div>
            </div>
          </div>
          <Image src="/slider.png" alt="Slide 1" width={1000} height={1000} />
        </div>
        <div className="slide">
          <div className='slide-content'>
            <div className='slide-content-container'>
              <div className='slide-image'>
                <Image src="/icons.png" width={500} height={500}/>
              </div>
              <div className='slide-text'>
                <p>Честность, оригинальное качество, оперативность,<br /> взаимовыгодное дружеское сотрудничество!</p>
              </div>
            </div>
          </div>
          <Image src="/slider1.png" alt="Slide 2" width={1000} height={1000} />
        </div>
        <div className="slide">
          <div className='slide-content'>
            <div className='slide-content-container'>
              <div className='slide-image'>
                <Image src="/icons.png" width={500} height={500}/>
              </div>
              <div className='slide-text'>
                <p>Честность, оригинальное качество, оперативность,<br /> взаимовыгодное дружеское сотрудничество!</p>
              </div>
            </div>
          </div>
          <Image src="/slider2.png" alt="Slide 2" width={1000} height={1000} />
        </div>
      </Slider>
    </div>
  );
}