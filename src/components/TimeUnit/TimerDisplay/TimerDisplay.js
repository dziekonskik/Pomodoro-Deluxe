import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

const TimeDisplay = ({ time }) => (
  <Row style={{ fontSize: '30px' }}>
    <Col className="d-flex align-items-sm-center justify-content-sm-center text-warning">
      {time < 10 ? `0${time}` : time}
    </Col>
  </Row>
);

TimeDisplay.propTypes = {
  time: PropTypes.number.isRequired,
};

export default TimeDisplay;
