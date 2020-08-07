import React from 'react';
import QuickStartPanel from '../../components/QuickStartPanel/QuickStartPanel';
import { Container, Row, Jumbotron, Button } from 'react-bootstrap';

class QuickStartView extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <h1 className="mx-auto text-danger font-weight-bold">
            Welcome to Pomodoro-Deluxe!
          </h1>
        </Row>
        <Row>
          <QuickStartPanel />
        </Row>
      </Container>
    );
  }
}

export default QuickStartView;
