import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import TimeUnit from '../TimeUnit/TimeUnit';
import StartStopButton from '../PomodoroButtons/StartStopButton';
import CancelButton from '../PomodoroButtons/CancelButton';
import ToggleTimeUnit from '../PomodoroButtons/ToggleTimeUnit';
import ProgressArc from './ProgressArc';
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
      pausesCount: 0,
      elapsedWorkTimeInSeconds: 0,
      elapsedRestTimeInSeconds: 0,
      userSetsRestTime: false,
    };
    this.customTimerID = null;
  }

  resetInterval = () => {
    window.clearInterval(this.customTimerID);
    this.customTimerID = null;
  };

  toggleTimeUnitDisplay = () => {
    this.setState((prevState) => ({
      userSetsRestTime: !prevState.userSetsRestTime,
    }));
  };

  handleCancelTimer = () => {
    const {
      workMinutes,
      restMinutes,
      elapsedWorkTimeInSeconds,
      elapsedRestTimeInSeconds,
      pausesCount,
    } = this.state;
    this.props.fetchFn(
      workMinutes,
      restMinutes,
      elapsedWorkTimeInSeconds,
      elapsedRestTimeInSeconds,
      pausesCount
    );

    this.setState({
      isAppReady: false,
      isTimeRunning: false,
      isItWorkTime: false,
      isItRestTime: false,
      workMinutes: 0,
      restMinutes: 0,
      pausesCount: 0,
      elapsedWorkTimeInSeconds: 0,
      elapsedRestTimeInSeconds: 0,
    });
    this.resetInterval();
  };

  handlePauseTimer = () => {
    this.setState((prevState) => ({
      isTimeRunning: false,
      pausesCount: prevState.pausesCount + 1,
    }));
    this.resetInterval();
  };

  handleStartTimer = () => {
    if (this.customTimerID === null) {
      this.setState({ isTimeRunning: true, isItWorkTime: true });
      this.customTimerID = window.setInterval(() => {
        if (this.state.isItWorkTime) {
          this.setState((prevState) => ({
            elapsedWorkTimeInSeconds: prevState.elapsedWorkTimeInSeconds + 1,
          }));
        }
        if (this.state.isItRestTime && this.state.restMinutes > 0) {
          this.setState((prevState) => ({
            elapsedRestTimeInSeconds: prevState.elapsedRestTimeInSeconds + 1,
          }));
        }
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

  componentDidUpdate() {
    const workMinutesInSeconds = this.state.workMinutes * 60;
    const restMinutesInSeconds = this.state.restMinutes * 60;
    const timesAreSetAndAppIsReadyToLaunch =
      this.state.workMinutes > 0 &&
      this.state.restMinutes > 0 &&
      this.state.isAppReady === false;
    const workTImeHasFinishedNowRestTimeBegins =
      workMinutesInSeconds === this.state.elapsedWorkTimeInSeconds &&
      this.state.isItWorkTime &&
      this.state.restMinutes > 0;
    const restTimeHasFinishedAndSessionIsOver =
      !this.state.isItWorkTime &&
      this.state.isItRestTime &&
      restMinutesInSeconds === this.state.elapsedRestTimeInSeconds;
    const itIsWorkTimeAndWorkTimeIsOnDisplay =
      this.state.isItWorkTime && this.state.userSetsRestTime;
    const itIsRestTimeAndRestTimeIsOnDisplay =
      this.state.isItRestTime && !this.state.userSetsRestTime;

    if (timesAreSetAndAppIsReadyToLaunch) {
      this.setState({ isAppReady: true });
    }

    if (workTImeHasFinishedNowRestTimeBegins) {
      this.setState({ isItWorkTime: false, isItRestTime: true });
    }
    if (restTimeHasFinishedAndSessionIsOver) {
      this.setState({
        isAppReady: false,
        isTimeRunning: false,
        isItWorkTime: false,
        isItRestTime: false,
        workMinutes: 0,
        restMinutes: 0,
        pausesCount: 0,
        elapsedWorkTimeInSeconds: 0,
        elapsedRestTimeInSeconds: 0,
      });
      this.resetInterval();
    }

    if (itIsWorkTimeAndWorkTimeIsOnDisplay) {
      this.setState({ userSetsRestTime: false });
    }
    if (itIsRestTimeAndRestTimeIsOnDisplay) {
      this.setState({ userSetsRestTime: true });
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
      userSetsRestTime,
      pausesCount,
    } = this.state;
    const mediaQueryList = window.matchMedia('(max-width: 992px)');
    const screenIsWideEnough = !mediaQueryList.matches;
    const userWantsToDisplayWorkTime = !userSetsRestTime;

    const workprogressInPercent =
      (elapsedWorkTimeInSeconds / (workMinutes * 60)) * 100.0;
    const restprogressInPercent =
      (elapsedRestTimeInSeconds / (restMinutes * 60)) * 100.0;

    const shouldDisplayWorkTimeUnit =
      screenIsWideEnough || userWantsToDisplayWorkTime;
    const shouldDisplayRestTimeUnit =
      screenIsWideEnough || !userWantsToDisplayWorkTime;

    return (
      <Container className={`p-3 ${styles.cardGeneralStyles}`}>
        <h2 className="text-warning text-center my-3">Quick Pomodoro</h2>
        <Row>
          <Col className="d-flex">
            {
              <>
                {shouldDisplayWorkTimeUnit && (
                  <TimeUnit
                    minutesSet={workMinutes}
                    elapsedTimeInSeconds={elapsedWorkTimeInSeconds}
                    setTime={this.setWorkTime}
                  >
                    WORK
                  </TimeUnit>
                )}
                {shouldDisplayRestTimeUnit && (
                  <TimeUnit
                    minutesSet={restMinutes}
                    elapsedTimeInSeconds={elapsedRestTimeInSeconds}
                    setTime={this.setRestTime}
                  >
                    BREAK
                  </TimeUnit>
                )}
              </>
            }
          </Col>
        </Row>
        <Row>
          <StartStopButton
            handleStartStop={
              isAppReady && !isTimeRunning
                ? this.handleStartTimer
                : this.handlePauseTimer
            }
            pausesCount={pausesCount}
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

          {!screenIsWideEnough && (
            <ToggleTimeUnit
              checked={userSetsRestTime}
              checkFn={this.toggleTimeUnitDisplay}
            >
              Set Break
            </ToggleTimeUnit>
          )}
        </Row>
        <Row>
          <ProgressArc
            percent={
              this.state.isItWorkTime
                ? workprogressInPercent
                : restprogressInPercent
            }
            canvasSize={screenIsWideEnough ? 250 : 150}
          />
        </Row>
      </Container>
    );
  }
}

export default QuickStartPanel;
