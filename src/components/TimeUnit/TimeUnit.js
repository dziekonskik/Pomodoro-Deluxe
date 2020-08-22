import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import TimerDisplay from './TimerDisplay/TimerDisplay';
import TimerColon from './TimerColon/TimerColon';
import TimerSetButtons from './TimerSetButtons/TimerSetButtons';

class TimeUnit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workMinutes: 0,
      restMinutes: 0,
      seconds: 0,
      elapsedWorkTimeInSeconds: 0,
      elapsedRestTimeInSeconds: 0,
    };
  }

  setWorkTime = ({ target }) => {
    target.title === '+'
      ? this.setState({ workMinutes: this.state.workMinutes + 5 })
      : this.setState({
          workMinutes:
            this.state.workMinutes > 0
              ? this.state.workMinutes - 5
              : (this.state.workMinutes = 0),
        });
  };

  setRestTime = ({ target }) => {
    target.title === '+'
      ? this.setState({ restMinutes: this.state.restMinutes + 2 })
      : this.setState({
          restMinutes:
            this.state.restMinutes > 0
              ? this.state.restMinutes - 2
              : (this.state.restMinutes = 0),
        });
  };

  startTimer = () => {
    if (this.props.isTimeRunning) {
      window.setInterval(() => {
        this.setState((prevState) => ({
          elapsedWorkTimeInSeconds: prevState.elapsedWorkTimeInSeconds + 1,
        }));
      }, 1000);
    }
  };

  render() {
    const {
      workMinutes,
      restMinutes,
      seconds,
      elapsedWorkTimeInSeconds,
      elapsedRestTimeInSeconds,
    } = this.state;
    const { isTimeRunning } = this.props;
    const workTimeInSeconds = workMinutes * 60;
    const restTimeInSeconds = restMinutes * 60;
    const workTimeLeftInSeconds = workTimeInSeconds - elapsedWorkTimeInSeconds;
    const workMinutesLeft = Math.floor(workTimeLeftInSeconds / 60);
    const workSecondsLeft = Math.floor(workTimeLeftInSeconds % 60);
    const restTimeLeftInSeconds = restTimeInSeconds - elapsedRestTimeInSeconds;
    const restMinutesLeft = Math.floor(restTimeLeftInSeconds / 60);
    const restSecondsLeft = Math.floor(restTimeLeftInSeconds % 60);
    const minutesProp = {
      minutes: this.props.children === 'WORK' ? workMinutes : restMinutes,
      minutesLeft:
        this.props.children === 'WORK' ? workMinutesLeft : restMinutesLeft,
    };
    return (
      <Card className="p-3 mx-auto my-auto bg-light shadow-lg border border-warning rounded-pill">
        <Row className="mx-auto text-uppercase text-warning">
          {this.props.children}
        </Row>
        <Row className="mx-auto">
          <Col>
            <TimerDisplay
              minutes={
                this.props.children === 'WORK' ? workMinutes : restMinutes
              }
              minutesLeft={
                this.props.children === 'WORK'
                  ? workMinutesLeft
                  : restMinutesLeft
              }
            />
          </Col>
          <Col className="w-25 d-flex flex-sm-column align-items-sm-center">
            <TimerColon />
          </Col>
          <Col>
            <TimerDisplay
              seconds={seconds}
              secondsLeft={
                this.props.children === 'WORK'
                  ? workSecondsLeft
                  : restSecondsLeft
              }
            />
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
