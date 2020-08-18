import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import TimeUnit from '../TimeUnit/TimeUnit';
import UtilityButton from '../UtilityButton/UtilityButton';
import styles from './QuickStartPanel.module.scss';

export class QuickStartPanel extends Component {
  render() {
    return (
      <Container className={`p-3 col-lg-12 ${styles.cardGeneralStyles}`}>
        <h2 className="text-warning text-center my-3">Quick Pomodoro</h2>
        <Row>
          <Col className="d-flex">
            <TimeUnit>WORK</TimeUnit>
            <TimeUnit>BREAK</TimeUnit>
          </Col>
        </Row>
        <UtilityButton>Start Pomodoro</UtilityButton>
      </Container>
    );
  }
}

export default QuickStartPanel;
