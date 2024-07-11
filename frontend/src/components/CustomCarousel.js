import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/carousel.css'
function CustomCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
       <img src='https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        
      </Carousel.Item>
      <Carousel.Item>
       <img  src='https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;
