import React from 'react';
import QuickStartView from './views/QuickStartView/QuickStartView';
import StatsView from './views/StatsView/StatsView';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col className="col-xs-12 col-md-3">
            <StatsView />
          </Col>
          <Col className="col-xs-12 col-md-9">
            <QuickStartView />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
