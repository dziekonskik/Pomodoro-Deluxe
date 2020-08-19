import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import TimerDisplay from './TimerDisplay/TimerDisplay';
import TimerColon from './TimerColon/TimerColon';
import TimerSetButtons from './TimerSetButtons/TimerSetButtons';
//import styles from './TimeUnit.module.scss';

class TimeUnit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workMinutes: 0,
      restMinutes: 0,
      seconds: 0,
    };
  }

  setWorkTime = ({ target }) => {
    target.title === '+'
      ? this.setState({ workMinutes: this.state.workMinutes + 5 })
      : this.setState({ workMinutes: this.state.workMinutes - 5 });
  };

  setRestTime = ({ target }) => {
    target.title === '+'
      ? this.setState({ restMinutes: this.state.restMinutes + 2 })
      : this.setState({ restMinutes: this.state.restMinutes - 2 });
  };

  render() {
    const { workMinutes, restMinutes, seconds } = this.state;
    return (
      <Card
        style={{ width: '40%' }}
        className="p-3 mx-auto bg-light shadow-lg border border-warning rounded-pill"
      >
        <Row className="mx-auto text-uppercase text-warning">
          {this.props.children}
        </Row>
        <Row className="mx-auto">
          <Col>
            <TimerDisplay
              secondary
              minutes={
                this.props.children === 'WORK' ? workMinutes : restMinutes
              }
            />
          </Col>
          <Col className="w-25 d-flex flex-sm-column align-items-sm-center">
            <TimerColon />
          </Col>
          <Col>
            <TimerDisplay seconds={seconds} />
          </Col>
        </Row>
        <Row>
          <TimerSetButtons
            setTime={
              this.props.children === 'WORK'
                ? this.setWorkTime
                : this.setRestTime
            }
          />
        </Row>
      </Card>
    );
  }
}

export default TimeUnit;
