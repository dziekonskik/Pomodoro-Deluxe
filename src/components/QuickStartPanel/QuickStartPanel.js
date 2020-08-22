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
    };
  }

  timeStartStop = () => {
    this.setState((prevState) => ({
      isTimeRunning: !prevState.isTimeRunning,
    }));
  };

  render() {
    const { isTimeRunning } = this.state;
    let mediaQueryList = window.matchMedia('(max-width: 767px)');
    return (
      <Container className={`p-3 ${styles.cardGeneralStyles}`}>
        <h2 className="text-warning text-center my-3">Quick Pomodoro</h2>
        <Row>
          <Col className="d-flex">
            <TimeUnit isTimeRunning={isTimeRunning}>WORK</TimeUnit>
            {!mediaQueryList.matches && (
              <TimeUnit isTimeRunning={isTimeRunning}>BREAK</TimeUnit>
            )}
          </Col>
        </Row>
        <Row>
          <UtilityButton timeStartStop={this.timeStartStop}>
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
