import React from 'react';
import { Row, Col } from 'react-bootstrap';

const TimeDisplay = ({ minutes, seconds, secondary }) => {
  const tooTip = ({ target }) => {
    target.dataToggle = 'tooltip';
    target.dataPlacement = 'bottom';
    target.title = 'click to activate';
  };

  return (
    <Row style={{ fontSize: '30px' }}>
      <Col
        onMouseEnter={secondary ? tooTip : null}
        className="d-flex align-items-sm-center justify-content-sm-center text-warning"
      >
        {minutes < 10 ? `0${minutes}` : minutes}
        {seconds < 10 ? `0${seconds}` : seconds}
      </Col>
    </Row>
  );
};

export default TimeDisplay;
