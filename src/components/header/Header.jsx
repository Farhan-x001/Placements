import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Welcome placements hub</span>
        <span className="headerTitleLg"> CareerLaunch Pro </span>
      </div>
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        className="carousel"
      >
        <div>
          <img src="https://i.ibb.co/PZvdpKx/1.jpg" alt="Image 2" />
        </div>
        <div>
          <img src="https://i.ibb.co/n8LvkpJ/2.jpg" alt="Image 3" />
        </div>
        <div>
          <img src="https://i.ibb.co/KW8T45v/Untitled-1520-560-px-3.jpg" alt="Image 4" />
        </div>
      </Carousel>
    </div>
  );
}
