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
      pausesCount: 0,
      workMinutes: 0,
      restMinutes: 0,
      elapsedWorkTimeInSeconds: 0,
      elapsedRestTimeInSeconds: 0,
    };
  }

  activateTheTime = () => {
    this.setState({ isTimeRunning: true });
  };

  handleCancelTimer = () => {
    this.setState({
      workMinutes: 0,
      restMinutes: 0,
      elapsedWorkTimeInSeconds: 0,
      elapsedRestTimeInSeconds: 0,
    });
  };

  handlePauseTimer = () => {
    this.setState({ isTimeRunning: false });
    window.clearInterval(this.customTimer);
  };

  handleStartTimer = () => {
    this.activateTheTime();

    this.customTimer = window.setInterval(() => {
      this.setState((prevState) => ({
        elapsedWorkTimeInSeconds: prevState.elapsedWorkTimeInSeconds + 1,
      }));
    }, 1000);
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
          <UtilityButton
            onStart={this.handleStartTimer}
            onPause={this.handlePauseTimer}
            isTimeRunning={isTimeRunning}
          >
            {this.state.isTimeRunning ? 'Stop Pomodoro' : 'Start Pomodoro'}
          </UtilityButton>
          <UtilityButton
            disabled={!isTimeRunning}
            onCancel={this.handleCancelTimer}
          >
            Cancel
          </UtilityButton>
          {mediaQueryList.matches && <UtilityButton>Set Break</UtilityButton>}
        </Row>
      </Container>
    );
  }
}

export default QuickStartPanel;
