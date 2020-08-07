import React, { Component } from 'react';
import { Jumbotron, Button, Row } from 'react-bootstrap';
import TimeUnit from '../TimeUnit/TimeUnit';

export class QuickStartPanel extends Component {
  render() {
    return (
      <Jumbotron className="shadow">
        <h2 className="text-danger">Quick Pomodoro</h2>
        <Row>
          <TimeUnit />
          <TimeUnit />
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
