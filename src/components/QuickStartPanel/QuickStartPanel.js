import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import TimeUnit from '../TimeUnit/TimeUnit';
import UtilityButton from '../UtilityButton/UtilityButton';
import styles from './QuickStartPanel.module.scss';

export class QuickStartPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTimeRunning: false,
      isItWorkTime: false,
      isItBreakTime: false,
      workMinutes: 0,
      restMinutes: 0,
      elapsedWorkTimeInSeconds: 0,
      elapsedRestTimeInSeconds: 0,
    };
  }

  startTimer = () => {
    window.setInterval(() => {
      this.setState((prevState) => ({
        elapsedWorkTimeInSeconds: prevState.elapsedWorkTimeInSeconds + 1,
      }));
    }, 1000);
    console.log(this.state.elapsedWorkTimeInSeconds);
  };

  timeStartStop = () => {
    this.setState((prevState) => ({
      isTimeRunning: !prevState.isTimeRunning,
    }));
    if (this.state.isTimeRunning) this.startTimer();
  };

  setWorkTime = ({ target }) => {
    target.title === '+'
      ? this.setState({ workMinutes: this.state.workMinutes + 5 })
      : this.state.workMinutes > 0
      ? this.setState({ workMinutes: this.state.workMinutes - 5 })
      : this.setState({ workMinutes: 0 });
  };

  setRestTime = ({ target }) => {
    target.title === '+'
      ? this.setState({ restMinutes: this.state.restMinutes + 2 })
      : this.state.restMinutes > 0
      ? this.setState({ restMinutes: this.state.restMinutes - 2 })
      : this.setState({ restMinutes: 0 });
  };

  render() {
    const {
      isTimeRunning,
      workMinutes,
      restMinutes,
      elapsedWorkTimeInSeconds,
      elapsedRestTimeInSeconds,
    } = this.state;
    let mediaQueryList = window.matchMedia('(max-width: 767px)');
    const workTimeInSeconds = workMinutes * 60;
    const restTimeInSeconds = restMinutes * 60;
    const workTimeLeftInSeconds = workTimeInSeconds - elapsedWorkTimeInSeconds;
    const workMinutesLeft = Math.floor(workTimeLeftInSeconds / 60);
    const workSecondsLeft = Math.floor(workTimeLeftInSeconds % 60);
    const restTimeLeftInSeconds = restTimeInSeconds - elapsedRestTimeInSeconds;
    const restMinutesLeft = Math.floor(restTimeLeftInSeconds / 60);
    const restSecondsLeft = Math.floor(restTimeLeftInSeconds % 60);
    return (
      <Container className={`p-3 ${styles.cardGeneralStyles}`}>
        <h2 className="text-warning text-center my-3">Quick Pomodoro</h2>
        <Row>
          <Col className="d-flex">
            <TimeUnit
              isTimeRunning={isTimeRunning}
              workMinutes={workMinutes}
              workMinutesLeft={workMinutesLeft}
              workSecondsLeft={workSecondsLeft}
              setWorkTime={this.setWorkTime}
            >
              WORK
            </TimeUnit>
            {!mediaQueryList.matches && (
              <TimeUnit
                isTimeRunning={isTimeRunning}
                restMinutes={restMinutes}
                restMinutesLeft={restMinutesLeft}
                restSecondsLeft={restSecondsLeft}
                setRestTime={this.setRestTime}
              >
                BREAK
              </TimeUnit>
            )}
          </Col>
        </Row>
        <Row>
          <UtilityButton
            onClick={this.state.isTimeRunning ? this.startTimer : null}
            timeStartStop={this.timeStartStop}
          >
            {this.state.isTimeRunning ? 'Stop Pomodoro' : 'Start Pomodoro'}
          </UtilityButton>
          <UtilityButton disabled={!isTimeRunning}>Cancel</UtilityButton>
          {mediaQueryList.matches && <UtilityButton>Set Break</UtilityButton>}
        </Row>
      </Container>
    );
  }
}

export default QuickStartPanel;
