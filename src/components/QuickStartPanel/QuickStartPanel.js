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
    };
  }

  timeStartStop = () => {
    this.setState(function (prevState) {
      return {
        isTimeRunning: !prevState.isTimeRunning,
      };
    });
  };

  render() {
    const { isTimeRunning } = this.state;
    return (
      <Container className={`p-3 col-lg-12 ${styles.cardGeneralStyles}`}>
        <h2 className="text-warning text-center my-3">Quick Pomodoro</h2>
        <Row>
          <Col className="d-flex">
            <TimeUnit isTimeRunning={isTimeRunning}>WORK</TimeUnit>
            <TimeUnit>BREAK</TimeUnit>
          </Col>
        </Row>
        <UtilityButton timeStartStop={this.timeStartStop}>
          {this.state.isTimeRunning ? 'Stop Pomodoro' : 'Start Pomodoro'}
        </UtilityButton>
      </Container>
    );
  }
}

export default QuickStartPanel;
