import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row } from 'react-bootstrap';
import TimerDisplay from './TimerDisplay/TimerDisplay';
import TimerColon from './TimerColon/TimerColon';
import TimerSetButtons from './TimerSetButtons/TimerSetButtons';
import styles from './TimeUnit.module.scss';

const TimeUnit = ({
  children,
  setTime,
  minutesSet,
  elapsedTimeInSeconds,
  justMinutes,
}) => {
  const timeInSeconds = minutesSet * 60;
  const timeLeftInSeconds = timeInSeconds - elapsedTimeInSeconds;
  const minutesLeft = Math.floor(timeLeftInSeconds / 60);
  const secondsLeft = Math.floor(timeLeftInSeconds % 60);

  return (
    <>
      <Card
        className={`p-3 mx-auto my-auto bg-light border border-dark rounded-pill ${styles.boxShadow}`}
      >
        <Row className="mx-auto text-uppercase text-dark">{children}</Row>
        <Row className="mx-auto">
          {justMinutes && (
            <Col>
              <TimerDisplay time={minutesSet > 0 ? minutesSet : 0} />
            </Col>
          )}
          {!justMinutes && (
            <>
              <Col>
                <TimerDisplay time={minutesLeft > 0 ? minutesLeft : 0} />
              </Col>
              <Col className="w-25">
                <TimerColon />
              </Col>
              <Col>
                <TimerDisplay time={secondsLeft > 0 ? secondsLeft : 0} />
              </Col>
            </>
          )}
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
  elapsedTimeInSeconds: PropTypes.number,
};

export default TimeUnit;
