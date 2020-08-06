import React from 'react';
import { Container, Row } from 'react-bootstrap';
import TimeUnit from '../../components/TimeUnit/TimeUnit';

class QuickStartView extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <h2 className="mx-auto">Next Break 9:00 min</h2>
        </Row>
        <Row>
          <TimeUnit />
          <TimeUnit />
          <TimeUnit />
        </Row>
      </Container>
    );
  }
}

export default QuickStartView;
