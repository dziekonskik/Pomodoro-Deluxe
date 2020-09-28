import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row } from 'react-bootstrap';
import TimerDisplay from './TimerDisplay/TimerDisplay';
import TimerColon from './TimerColon/TimerColon';
import TimerSetButtons from './TimerSetButtons/TimerSetButtons';

const TimeUnit = ({ children, setTime, minutesSet, elapsedTimeInSeconds }) => {
  const timeInSeconds = minutesSet * 60;
  const timeLeftInSeconds = timeInSeconds - elapsedTimeInSeconds;
  const minutesLeft = Math.floor(timeLeftInSeconds / 60);
  const secondsLeft = Math.floor(timeLeftInSeconds % 60);

  return (
    <>
      <Card className="p-3 mx-auto my-auto bg-light shadow-lg border border-warning rounded-pill">
        <Row className="mx-auto text-uppercase text-warning">{children}</Row>
        <Row className="mx-auto">
          <Col>
            <TimerDisplay time={minutesLeft > 0 ? minutesLeft : 0} />
          </Col>
          <Col className="w-25 d-flex flex-sm-column align-items-sm-center">
            <TimerColon />
          </Col>
          <Col>
            <TimerDisplay time={secondsLeft > 0 ? secondsLeft : 0} />
          </Col>
        </Row>
        <Row>
          <TimerSetButtons setTime={setTime} />
        </Row>
      </Card>
    </>
  );
};

TimeUnit.propTypes = {
  children: PropTypes.string.isRequired,
  setTime: PropTypes.func.isRequired,
  minutesSet: PropTypes.number.isRequired,
  elapsedTimeInSeconds: PropTypes.number.isRequired,
};

export default TimeUnit;
