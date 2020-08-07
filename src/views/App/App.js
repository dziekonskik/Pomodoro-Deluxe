import React from 'react';
import QuickStartView from '../QuickStartView/QuickStartView';
import HistoryView from '../HistoryView/HistoryView';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './App.module.scss';

function App() {
  return (
    <div className="App">
      <Container className="vh-100 py-5">
        <Row className="h-100">
          <Col xs={12} md={{ order: 2 }} className="col-md-9 shadow">
            <QuickStartView />
          </Col>
          <Col xs={12} className="col-md-3 border border-danger rounded shadow">
            <HistoryView />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
