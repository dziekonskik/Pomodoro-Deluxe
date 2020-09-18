import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import TimeUnit from '../TimeUnit/TimeUnit';
import StartStopButton from '../PomodoroButtons/StartStopButton';
import CancelButton from '../PomodoroButtons/CancelButton';
import ToggleUnit from '../PomodoroButtons/ToggleUnit';
import styles from './QuickStartPanel.module.scss';

export class QuickStartPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAppReady: false,
      isTimeRunning: false,
      workMinutes: 0,
      restMinutes: 0,
      elapsedWorkTimeInSeconds: 0,
      elapsedRestTimeInSeconds: 0,
    };
    this.customTimer = null;
  }

  handleCancelTimer = () => {
    this.setState({
      isAppReady: false,
      isTimeRunning: false,
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
    this.setState({ isTimeRunning: true });
    if (this.customTimer === null) {
      this.customTimer = window.setInterval(() => {
        this.setState((prevState) => ({
          elapsedWorkTimeInSeconds: prevState.elapsedWorkTimeInSeconds + 1,
        }));
      }, 1000);
    }
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

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.workMinutes > 0 &&
      this.state.restMinutes > 0 &&
      this.state.isAppReady === false
    ) {
      console.count('appReady');
      this.setState({ isAppReady: true });
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
    } = this.state;
    let mediaQueryList = window.matchMedia('(max-width: 767px)');

    return (
      <Container className={`p-3 ${styles.cardGeneralStyles}`}>
        <h2 className="text-warning text-center my-3">Quick Pomodoro</h2>
        <Row>
          <Col className="d-flex">
            <TimeUnit
              workMinutes={workMinutes}
              elapsedWorkTimeInSeconds={elapsedWorkTimeInSeconds}
              setWorkTime={this.setWorkTime}
            >
              WORK
            </TimeUnit>
            {!mediaQueryList.matches && (
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

          {mediaQueryList.matches && <ToggleUnit>Set Break</ToggleUnit>}
        </Row>
      </Container>
    );
  }
}

export default QuickStartPanel;
