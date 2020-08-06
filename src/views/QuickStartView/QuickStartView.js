import React, { Component } from 'react';
import { Carousel, Container, Image } from 'react-bootstrap';
import image from '../../img/byrd_TA.jpg';

class QuickStartView extends Component {
  render() {
    return (
      <>
        <Image src={image} fluid roundedCircle />
      </>
    );
  }
}

export default QuickStartView;
