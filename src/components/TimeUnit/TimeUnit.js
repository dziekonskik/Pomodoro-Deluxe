import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import TimerDisplay from './TimerDisplay/TimerDisplay';
import TimerColon from './TimerColon/TimerColon';
import TimerSetButtons from './TimerSetButtons/TimerSetButtons';

const TimeUnit = ({
  children,
  setWorkTime,
  setRestTime,
  workMinutes,
  restMinutes,
  elapsedWorkTimeInSeconds,
  elapsedRestTimeInSeconds,
}) => {
  const workTimeInSeconds = workMinutes * 60;
  const restTimeInSeconds = restMinutes * 60;
  const workTimeLeftInSeconds = workTimeInSeconds - elapsedWorkTimeInSeconds;
  const workMinutesLeft = Math.floor(workTimeLeftInSeconds / 60);
  const workSecondsLeft = Math.floor(workTimeLeftInSeconds % 60);
  const restTimeLeftInSeconds = restTimeInSeconds - elapsedRestTimeInSeconds;
  const restMinutesLeft = Math.floor(restTimeLeftInSeconds / 60);
  const restSecondsLeft = Math.floor(restTimeLeftInSeconds % 60);

  return (
    <>
      <Card className="p-3 mx-auto my-auto bg-light shadow-lg border border-warning rounded-pill">
        <Row className="mx-auto text-uppercase text-warning">{children}</Row>
        <Row className="mx-auto">
          <Col>
            <TimerDisplay
              minutes={
                children === 'WORK'
                  ? workMinutesLeft > 0
                    ? workMinutesLeft
                    : 0
                  : restMinutesLeft > 0
                  ? restMinutesLeft
                  : 0
              }
            />
          </Col>
          <Col className="w-25 d-flex flex-sm-column align-items-sm-center">
            <TimerColon />
          </Col>
          <Col>
            <TimerDisplay
              seconds={
                children === 'WORK'
                  ? workSecondsLeft > 0
                    ? workSecondsLeft
                    : 0
                  : restSecondsLeft > 0
                  ? restSecondsLeft
                  : 0
              }
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
