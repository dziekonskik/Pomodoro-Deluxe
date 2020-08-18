import React from 'react';
import { Row, Col } from 'react-bootstrap';

const TimeDisplay = ({ workMinutes, restMinutes, seconds, secondary }) => {
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
        {workMinutes < 10 ? `0${workMinutes}` : workMinutes}
        {restMinutes < 10 ? `0${restMinutes}` : restMinutes}
        {seconds < 10 ? `0${seconds}` : seconds}
      </Col>
    </Row>
  );
};

export default TimeDisplay;
