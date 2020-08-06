import React from 'react';
import { Container, ButtonGroup, Button, Row, Col } from 'react-bootstrap';
import TimeDisplay from './TimeDisplay/TimeDisplay';
import TimeSetButtons from './TimeSetButtons/TimeSetButtons';

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
        <TimeSetButtons />
      </Container>
    );
  }
}

export default TimeUnit;
