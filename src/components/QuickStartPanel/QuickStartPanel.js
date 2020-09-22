import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import TimeUnit from '../TimeUnit/TimeUnit';
import StartStopButton from '../PomodoroButtons/StartStopButton';
import CancelButton from '../PomodoroButtons/CancelButton';
import ToggleTimeUnit from '../PomodoroButtons/ToggleTimeUnit';
import styles from './QuickStartPanel.module.scss';

export class QuickStartPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAppReady: false,
      isTimeRunning: false,
      isItWorkTime: false,
      isItRestTime: false,
      workMinutes: 0,
      restMinutes: 0,
      elapsedWorkTimeInSeconds: 0,
      elapsedRestTimeInSeconds: 0,
      checkboxChecked: false,
    };
    this.customTimer = null;
  }

  toggleTimeUnitDisplay = () => {
    this.setState((prevState) => ({
      checkboxChecked: !prevState.checkboxChecked,
    }));
  };

  handleCancelTimer = () => {
    this.setState({
      isAppReady: false,
      isTimeRunning: false,
      isItWorkTime: false,
      isItRestTime: false,
      workMinutes: 0,
      restMinutes: 0,
      elapsedWorkTimeInSeconds: 0,
      elapsedRestTimeInSeconds: 0,
    });
    this.customTimer = null;
  };

  handlePauseTimer = () => {
    this.setState({ isTimeRunning: false });
    window.clearInterval(this.customTimer);
    this.customTimer = null;
  };

  handleStartTimer = () => {
    this.setState({ isTimeRunning: true, isItWorkTime: true });
    if (this.customTimer === null) {
      this.customTimer = window.setInterval(() => {
        if (this.state.isItWorkTime) {
          this.setState((prevState) => ({
            elapsedWorkTimeInSeconds: prevState.elapsedWorkTimeInSeconds + 1,
          }));
        }
        if (!this.state.isItWorkTime && this.state.restMinutes > 0) {
          this.setState((prevState) => ({
            elapsedRestTimeInSeconds: prevState.elapsedRestTimeInSeconds + 1,
          }));
        }
      }, 1000);
    }
  };

  setWorkTime = ({ target }) => {
    target.title === '+'
      ? this.setState({ workMinutes: this.state.workMinutes + 0.5 })
      : this.state.workMinutes > 0
      ? this.setState({ workMinutes: this.state.workMinutes - 0.5 })
      : this.setState({ workMinutes: 0 });
  };

  setRestTime = ({ target }) => {
    target.title === '+'
      ? this.setState({ restMinutes: this.state.restMinutes + 0.5 })
      : this.state.restMinutes > 0
      ? this.setState({ restMinutes: this.state.restMinutes - 0.5 })
      : this.setState({ restMinutes: 0 });
  };

  componentDidUpdate() {
    const workMinutesInSeconds = this.state.workMinutes * 60;
    const restMinutesInSeconds = this.state.restMinutes * 60;
    if (
      this.state.workMinutes > 0 &&
      this.state.restMinutes > 0 &&
      this.state.isAppReady === false
    ) {
      this.setState({ isAppReady: true });
    }

    if (
      workMinutesInSeconds === this.state.elapsedWorkTimeInSeconds &&
      this.state.isItWorkTime &&
      this.state.restMinutes > 0
    ) {
      this.setState({ isItWorkTime: false, isItRestTime: true });
    }
    if (
      !this.state.isItWorkTime &&
      this.state.isItRestTime &&
      restMinutesInSeconds === this.state.elapsedRestTimeInSeconds
    ) {
      this.setState({
        isTimeRunning: false,
        isItRestTime: false,
        isAppReady: false,
        checkboxChecked: false,
        workMinutes: 0,
        restMinutes: 0,
      });
    }

    if (this.state.isItWorkTime && this.state.checkboxChecked) {
      this.setState({ checkboxChecked: false });
    }
    if (this.state.isItRestTime && !this.state.checkboxChecked) {
      this.setState({ checkboxChecked: true });
    }
  }

  render() {
    const {
      isAppReady,
      isTimeRunning,
      workMinutes,
      restMinutes,
      elapsedWorkTimeInSeconds,
      elapsedRestTimeInSeconds,
      checkboxChecked,
    } = this.state;
    let mediaQueryList = window.matchMedia('(max-width: 767px)');

    return (
      <Container className={`p-3 ${styles.cardGeneralStyles}`}>
        <h2 className="text-warning text-center my-3">Quick Pomodoro</h2>
        <Row>
          <Col className="d-flex">
            {mediaQueryList.matches && !checkboxChecked && (
              <TimeUnit
                workMinutes={workMinutes}
                elapsedWorkTimeInSeconds={elapsedWorkTimeInSeconds}
                setWorkTime={this.setWorkTime}
              >
                WORK
              </TimeUnit>
            )}
            {mediaQueryList.matches && checkboxChecked && (
              <TimeUnit
                restMinutes={restMinutes}
                elapsedRestTimeInSeconds={elapsedRestTimeInSeconds}
                setRestTime={this.setRestTime}
              >
                BREAK
              </TimeUnit>
            )}
          </Col>
        </Row>
        <Row>
          <StartStopButton
            onStart={isAppReady ? this.handleStartTimer : null}
            onPause={isAppReady ? this.handlePauseTimer : null}
            isTimeRunning={isTimeRunning}
            disabled={workMinutes === 0 || restMinutes === 0}
          >
            {this.state.isTimeRunning ? 'Stop Pomodoro' : 'Start Pomodoro'}
          </StartStopButton>
          <CancelButton
            disabled={!isAppReady}
            onCancel={isAppReady ? this.handleCancelTimer : null}
          >
            Cancel
          </CancelButton>

          {mediaQueryList.matches && (
            <ToggleTimeUnit
              checked={checkboxChecked}
              checkFn={this.toggleTimeUnitDisplay}
            >
              Set Break
            </ToggleTimeUnit>
          )}
        </Row>
      </Container>
    );
  }
}

export default QuickStartPanel;
