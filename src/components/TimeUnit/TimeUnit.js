import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import TimerDisplay from './TimerDisplay/TimerDisplay';
import TimerColon from './TimerColon/TimerColon';
import TimerSetButtons from './TimerSetButtons/TimerSetButtons';

const TimeUnit = ({
  isTimeRunning,
  workMinutes,
  workMinutesLeft,
  restMinutes,
  restMinutesLeft,
  workSecondsLeft,
  restSecondsLeft,
  children,
  setWorkTime,
  setRestTime,
}) => {
  const minutesProp = {
    minutes: children === 'WORK' ? workMinutes : restMinutes,
    minutesLeft: children === 'WORK' ? workMinutesLeft : restMinutesLeft,
  };

  return (
    <>
      <Card className="p-3 mx-auto my-auto bg-light shadow-lg border border-warning rounded-pill">
        <Row className="mx-auto text-uppercase text-warning">{children}</Row>
        <Row className="mx-auto">
          <Col>
            <TimerDisplay
              minutes={
                isTimeRunning ? minutesProp.minutesLeft : minutesProp.minutes
              }
            />
          </Col>
          <Col className="w-25 d-flex flex-sm-column align-items-sm-center">
            <TimerColon />
          </Col>
          <Col>
            <TimerDisplay
              seconds={children === 'WORK' ? workSecondsLeft : restSecondsLeft}
            />
          </Col>
        </Row>
        <Row>
          <TimerSetButtons
            setTime={children === 'WORK' ? setWorkTime : setRestTime}
          />
        </Row>
      </Card>
    </>
  );
};

export default TimeUnit;
