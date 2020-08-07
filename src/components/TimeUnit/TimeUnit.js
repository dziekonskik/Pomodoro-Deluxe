import React from 'react';
import { Container } from 'react-bootstrap';
import TimeDisplay from './TimeDisplay/TimeDisplay';
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
      <Container style={{ width: '130px' }}>
        <TimeDisplay />
        <TimerSetButtons secondary />
      </Container>
    );
  }
}

export default TimeUnit;
