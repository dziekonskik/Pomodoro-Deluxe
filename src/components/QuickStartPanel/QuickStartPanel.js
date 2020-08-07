import React, { Component } from 'react';
import { Jumbotron, Button, Row, Col } from 'react-bootstrap';
import TimeUnit from '../TimeUnit/TimeUnit';
import styles from './QuickStartPanel.module.scss';

export class QuickStartPanel extends Component {
  render() {
    return (
      <Jumbotron className={styles.cardGeneralStyles}>
        <h2 className="text-danger">Quick Pomodoro</h2>
        <Row>
          <Col>
            <TimeUnit />
            <TimeUnit />
          </Col>
        </Row>
        <p>
          <Button className="mt-5" variant="danger">
            start
          </Button>
        </p>
      </Jumbotron>
    );
  }
}

export default QuickStartPanel;
