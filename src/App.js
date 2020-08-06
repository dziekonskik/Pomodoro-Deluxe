import React from 'react';
import QuickStartView from './views/QuickStartView/QuickStartView';
import StatsView from './views/StatsView/StatsView';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container className="vh-100 py-5">
        <Row className="h-100">
          <Col xs={12} md={{ order: 2 }} className="col-md-9">
            <QuickStartView />
          </Col>
          <Col xs={12} className="col-md-3 bg-danger">
            <StatsView />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
