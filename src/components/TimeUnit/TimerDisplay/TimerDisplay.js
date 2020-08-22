import React from 'react';
import { Row, Col } from 'react-bootstrap';

const TimeDisplay = ({ minutes, seconds, minutesLeft, secondsLeft }) => (
  <Row style={{ fontSize: '30px' }}>
    <Col className="d-flex align-items-sm-center justify-content-sm-center text-warning">
      {minutes < 10 || minutesLeft < 10
        ? `0${minutes || minutesLeft}`
        : minutes || minutesLeft}
      {seconds < 10 || secondsLeft
        ? `0${seconds || secondsLeft}`
        : seconds || secondsLeft}
    </Col>
  </Row>
);

export default TimeDisplay;
