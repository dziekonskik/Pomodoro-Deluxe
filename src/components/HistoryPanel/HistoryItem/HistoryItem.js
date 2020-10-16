import React from 'react';
import { Toast, Col, Row } from 'react-bootstrap';
import styles from './HistoryItem.module.scss';

function timeRecalc(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return [minutes, seconds];
}

const HistoryItem = ({
  title,
  date,
  elapsedWorkTimeInSeconds,
  elapsedRestTimeInSeconds,
  pausesCount,
  sessionsCount,
  handleClose,
}) => {
  return (
    <div className={`my-3 ${styles.boxShadow}`} style={{ width: '330px' }}>
      <Toast onClose={handleClose}>
        <Toast.Header closeLabel={'Close'}>
          <strong className="mr-auto">{title}</strong>
          <strong>{date.toLocaleDateString()}</strong>
          <small>{date.toLocaleTimeString()}</small>
        </Toast.Header>
        <Toast.Body className="text-center">
          <Row>
            <Col sm={6}>
              <small>Work Done:</small>{' '}
              <strong>
                {timeRecalc(elapsedWorkTimeInSeconds)[0]}:
                {timeRecalc(elapsedWorkTimeInSeconds)[1]} min
              </strong>{' '}
            </Col>
            <Col sm={6}>
              <small>Rested:</small>{' '}
              <strong>
                {timeRecalc(elapsedRestTimeInSeconds)[0]}:
                {timeRecalc(elapsedRestTimeInSeconds)[1]} min
              </strong>{' '}
              <br />
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <small className="mx-auto">
                Total Pauses:{' '}
                <strong style={{ color: 'red' }}>{pausesCount}</strong>
              </small>
            </Col>
            <Col sm={6}>
              <small className="mx-auto">
                Total Sessions:{' '}
                <strong style={{ color: 'red' }}>{sessionsCount}</strong>
              </small>
            </Col>
          </Row>
        </Toast.Body>
      </Toast>
    </div>
  );
};

export default HistoryItem;
