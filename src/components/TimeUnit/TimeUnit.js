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
      <Card>
        <Row className="h-1">
          <Col>
            <TimerDisplay />
          </Col>
          <Col>
            <TimerColon />
          </Col>
          <Col>
            <TimerDisplay />
          </Col>
        </Row>
        <TimerSetButtons className="xs-col-3" />
        <TimerSetButtons />
      </Card>
    );
  }
}

export default TimeUnit;
