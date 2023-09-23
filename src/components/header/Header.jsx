import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Welcome to the World of AYUSH Entrepreneurship</span>
        <span className="headerTitleLg">AYUSH </span>
      </div>
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        className="carousel" // Add a custom CSS class for styling
      >
        <div>
          <img src="https://i.ibb.co/gZFcK5d/AYUSH-scrol-3.jpg" alt="Image 1" />
        </div>
        <div>
          <img src="https://i.ibb.co/6Y1C532/AYUSH-scrol-2.jpg" alt="Image 2" />
        </div>
        <div>
          <img src="https://i.ibb.co/Kh95W0C/AYUSH-scrol-1.jpg" alt="Image 3" />
        </div>
        <div>
          <img src="https://i.ibb.co/gZFcK5d/AYUSH-scrol-3.jpg" alt="Image 4" />
        </div>
      </Carousel>
    </div>
  );
}
