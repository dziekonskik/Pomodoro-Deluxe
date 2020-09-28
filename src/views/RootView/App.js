import React from 'react';
import HistoryPanel from '../../components/HistoryPanel/HistoryPanel';
import QuickStartPanel from '../../components/QuickStartPanel/QuickStartPanel';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './App.module.scss';

function App() {
  return (
    <React.StrictMode>
      <div className={`App ${styles.bgColor} vh-100`}>
        <Container className="py-5">
          <Row className="h-100">
            <Col sm={12} md={{ order: 2 }} className="col-md-9 shadow">
              <QuickStartPanel />
            </Col>
            <Col
              sm={12}
              className="col-md-3 border border-danger rounded shadow"
            >
              <HistoryPanel />
            </Col>
          </Row>
        </Container>
      </div>
    </React.StrictMode>
  );
}

export default App;
