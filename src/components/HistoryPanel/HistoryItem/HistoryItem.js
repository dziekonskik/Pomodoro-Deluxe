import React from 'react';
import { Toast, Col, Row } from 'react-bootstrap';

function timeRecalc(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return [minutes, seconds];
}

const HistoryItem = ({
  title,
  date,
  workTime,
  restTime,
  elapsedWorkTimeInSeconds,
  elapsedRestTimeInSeconds,
  pausesCount,
  handleClose,
}) => {
  return (
    <div className="my-3" style={{ width: '330px' }}>
      <Toast onClose={handleClose}>
        <Toast.Header closeLabel={'Close'}>
          <strong className="mr-auto">{title}</strong>
          <strong>{date.toLocaleDateString()}</strong>
          <small>{date.toLocaleTimeString()}</small>
        </Toast.Header>
        <Toast.Body className="text-center">
          <Row>
            <Col sm={6}>
              <small>Work Time:</small> <strong>{workTime} min</strong> <br />
              <small>Rest Time:</small> <strong>{restTime} min</strong> <br />
            </Col>
            <Col sm={6}>
              <small>Elapsed Work:</small>{' '}
              <strong>
                {timeRecalc(elapsedWorkTimeInSeconds)[0]}:
                {timeRecalc(elapsedWorkTimeInSeconds)[1]} min
              </strong>{' '}
              <br />
              <small>Elapsed Rest:</small>{' '}
              <strong>
                {timeRecalc(elapsedRestTimeInSeconds)[0]}:
                {timeRecalc(elapsedRestTimeInSeconds)[1]} min
              </strong>{' '}
              <br />
            </Col>
          </Row>
          <Row>
            <h4 className="mx-auto">
              Total Pauses:{' '}
              <strong style={{ color: 'red' }}>{pausesCount}</strong>
            </h4>
          </Row>
        </Toast.Body>
      </Toast>
    </div>
  );
};

export default HistoryItem;
