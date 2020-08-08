import React from 'react';
import { Container, Card, Col, Row } from 'react-bootstrap';
import TimerDisplay from './TimerDisplay/TimerDisplay';
import TimerColon from './TimerColon/TimerColon';
import TimerSetButtons from './TimerSetButtons/TimerSetButtons';
import styles from './TimeUnit.module.scss';

class TimeUnit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      minutes: 30,
      seconds: 0,
    };
  }
  render() {
    const { hours, minutes, seconds } = this.state;
    return (
      <Card className="">
        <Row className="w-50">
          <Col>
            <TimerDisplay />
          </Col>
          <Col className="w-25 d-flex flex-sm-column align-items-sm-center">
            <TimerColon />
          </Col>
          <Col>
            <TimerDisplay />
          </Col>
        </Row>
        <Row>
          <TimerSetButtons />
          <TimerSetButtons />
        </Row>
      </Card>
    );
  }
}

export default TimeUnit;
