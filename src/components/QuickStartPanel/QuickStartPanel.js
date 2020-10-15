import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import TimeUnit from '../TimeUnit/TimeUnit';
import StartStopButton from '../PomodoroButtons/StartStopButton';
import CancelButton from '../PomodoroButtons/CancelButton';
import ToggleTimeUnit from '../PomodoroButtons/ToggleTimeUnit';
import SessionCountCard from './SessionCountCard';
import ProgressArc from './ProgressArc';
import styles from './QuickStartPanel.module.scss';

import TimeSetContext from '../../TimeSetContext';

export class QuickStartPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Quick Pomodoro',
      isAppReady: false,
      isTimeRunning: false,
      isItWorkTime: false,
      isItRestTime: false,
      workMinutes: 0,
      restMinutes: 0,
      pausesCount: 0,
      sessionsCount: 0,
      elapsedWorkTimeInSeconds: 0,
      totalElapsedWorkTimeInSeconds: 0,
      elapsedRestTimeInSeconds: 0,
      totalElapsedRestTimeInSeconds: 0,
      userSetsRestTime: false,
      listOfCycles: [],
      id: '',
    };
    this.customTimerID = null;
  }
  //==================SESSION FORM DATA AREA =================
  handleIncommingSession = () => {
    this.setState({
      title: this.props.title,
      listOfCycles: this.props.listOfCycles,
    });
  };

  takeFirstSessionObjectAndUseIt = () => {
    this.setState((prevState) => {
      const sessionObjects = this.state.listOfCycles.slice();
      const firstSessionObject = sessionObjects.shift();
      const {
        id,
        workMinutes,
        restMinutes,
        workIcon,
        restIcon,
      } = firstSessionObject;
      const sessionsCount = prevState.sessionsCount + 1;
      return {
        id,
        workMinutes,
        restMinutes,
        workIcon,
        restIcon,
        sessionsCount,
      };
    });
  };

  // ========================== TIMER FUNCTIONS ==========================
  resetInterval = () => {
    window.clearInterval(this.customTimerID);
    this.customTimerID = null;
  };

  resetState() {
    this.setState({
      isAppReady: false,
      isTimeRunning: false,
      isItWorkTime: false,
      isItRestTime: false,
      workMinutes: 0,
      restMinutes: 0,
      pausesCount: 0,
      sessionsCount: 0,
      workIcon: null,
      restIcon: null,
      elapsedWorkTimeInSeconds: 0,
      totalElapsedWorkTimeInSeconds: 0,
      elapsedRestTimeInSeconds: 0,
      totalElapsedRestTimeInSeconds: 0,
      listOfCycles: [],
    });
  }

  handleCancelTimer = () => {
    const {
      title,
      workMinutes,
      restMinutes,
      elapsedWorkTimeInSeconds,
      totalElapsedWorkTimeInSeconds,
      elapsedRestTimeInSeconds,
      totalElapsedRestTimeInSeconds,
      pausesCount,
      sessionsCount,
    } = this.state;
    this.setState((prevState) => {
      const totalElapsedWorkTimeInSeconds =
        prevState.totalElapsedWorkTimeInSeconds + elapsedWorkTimeInSeconds;
      const totalElapsedRestTimeInSeconds =
        prevState.totalElapsedRestTimeInSeconds + elapsedRestTimeInSeconds;
      return { totalElapsedWorkTimeInSeconds, totalElapsedRestTimeInSeconds };
    });
    this.props.fetchFn(
      title,
      workMinutes,
      restMinutes,
      totalElapsedWorkTimeInSeconds,
      totalElapsedRestTimeInSeconds,
      pausesCount,
      sessionsCount
    );

    this.resetState();
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

  componentDidUpdate(prevProps, prevState) {
    const {
      title,
      workMinutes,
      restMinutes,
      totalElapsedWorkTimeInSeconds,
      totalElapsedRestTimeInSeconds,
      pausesCount,
      sessionsCount,
    } = this.state;
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
      const { elapsedWorkTimeInSeconds, elapsedRestTimeInSeconds } = this.state;

      this.setState((prevState) => {
        const totalElapsedWorkTimeInSeconds =
          prevState.totalElapsedWorkTimeInSeconds + elapsedWorkTimeInSeconds;
        const totalElapsedRestTimeInSeconds =
          prevState.totalElapsedRestTimeInSeconds + elapsedRestTimeInSeconds;
        return { totalElapsedWorkTimeInSeconds, totalElapsedRestTimeInSeconds };
      });
      console.log(
        this.state.totalElapsedWorkTimeInSeconds,
        this.state.totalElapsedRestTimeInSeconds
      );
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
      this.resetInterval();
    }

    if (itIsWorkTimeAndWorkTimeIsOnDisplay) {
      this.setState({ userSetsRestTime: false });
    }
    if (itIsRestTimeAndRestTimeIsOnDisplay) {
      this.setState({ userSetsRestTime: true });
    }
    //==================SESSION FORM DATA PREPARATION AREA =================
    const readyToStartNewSession =
      this.state.listOfCycles.length && this.state.workMinutes === 0;
    const allSessionsHasFinished =
      this.state.sessionsCount > this.props.listOfCycles.length;
    const beforeBegin = this.state.sessionsCount === 0;

    if (readyToStartNewSession && beforeBegin) {
      this.takeFirstSessionObjectAndUseIt();
    }

    if (readyToStartNewSession && !beforeBegin) {
      this.takeFirstSessionObjectAndUseIt();
      this.handleStartTimer();
    }

    if (allSessionsHasFinished) {
      this.props.fetchFn(
        title,
        workMinutes,
        restMinutes,
        totalElapsedWorkTimeInSeconds,
        totalElapsedRestTimeInSeconds,
        pausesCount,
        sessionsCount
      );
      this.resetState();
    }

    console.count(`QuickStartPanel Update`);
  }

  componentDidMount() {
    const sessionTitleWasSet = this.state.title !== this.props.title;

    if (sessionTitleWasSet) {
      this.handleIncommingSession();
    }

    console.count('QuickStartPanel Mounted');
  }

  render() {
    const {
      title,
      isAppReady,
      isTimeRunning,
      workMinutes,
      restMinutes,
      elapsedWorkTimeInSeconds,
      elapsedRestTimeInSeconds,
      userSetsRestTime,
      pausesCount,
      isItWorkTime,
      isItRestTime,
      workIcon,
      restIcon,
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

    const clocksAreNotTicking = !isItWorkTime && !isItRestTime;

    return (
      <Container className={`p-3 ${styles.cardGeneralStyles}`}>
        <TimeSetContext.Consumer>
          {(context) => (
            <>
              <h2 className="text-warning text-center my-3">
                {title !== 'Quick Pomodoro' ? title : 'Quick Pomodoro'}
              </h2>
              <Row>
                <Col className="d-flex">
                  {shouldDisplayWorkTimeUnit && (
                    <TimeUnit
                      minutesSet={workMinutes}
                      elapsedTimeInSeconds={elapsedWorkTimeInSeconds}
                      setTime={
                        clocksAreNotTicking
                          ? ({ target }) =>
                              context.setWorkTime({ target }, this)
                          : null
                      }
                    >
                      WORK
                    </TimeUnit>
                  )}
                  {shouldDisplayRestTimeUnit && (
                    <TimeUnit
                      minutesSet={restMinutes}
                      elapsedTimeInSeconds={elapsedRestTimeInSeconds}
                      setTime={
                        clocksAreNotTicking
                          ? ({ target }) =>
                              context.setRestTime({ target }, this)
                          : null
                      }
                    >
                      BREAK
                    </TimeUnit>
                  )}
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
                  {this.state.isTimeRunning
                    ? 'Stop Pomodoro'
                    : 'Start Pomodoro'}
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
                    checkFn={context.toggleTimeUnitDisplay.bind(this)}
                  >
                    Set Break
                  </ToggleTimeUnit>
                )}
              </Row>
              <Row>
                <Col xs={3} lg={4} className="p-3">
                  {this.props.listOfCycles.length > 0 && (
                    <SessionCountCard
                      sessionsTotal={this.props.listOfCycles.length}
                      currentSession={this.state.sessionsCount}
                      icon={isItRestTime ? restIcon : workIcon}
                    />
                  )}
                </Col>
                <Col xs={9} lg={8} className="mx-auto">
                  <ProgressArc
                    percent={
                      this.state.isItWorkTime
                        ? workprogressInPercent
                        : restprogressInPercent
                    }
                    canvasSize={screenIsWideEnough ? 250 : 150}
                  />
                </Col>
              </Row>
            </>
          )}
        </TimeSetContext.Consumer>
      </Container>
    );
  }
}

export default QuickStartPanel;
