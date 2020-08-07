import React from 'react';
import { Row, Col } from 'react-bootstrap';

const TimeDisplay = () => {
  return (
    <Row style={{ height: '100px', 'font-size': '30px' }}>
      <Col className="d-flex align-items-sm-center justify-content-sm-center text-danger">
        34
      </Col>
    </Row>
  );
};

export default TimeDisplay;
