import React from 'react';
import MainView from '../MainView/MainView';
import HistoryView from '../HistoryView/HistoryView';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './App.module.scss';

function App() {
  return (
    <React.StrictMode>
      <div className={`App ${styles.bgColor}`}>
        <Container className="py-5">
          <Row className="h-100">
            <Col sm={12} md={{ order: 2 }} className="col-md-9 shadow">
              <MainView />
            </Col>
            <Col
              sm={12}
              className="col-md-3 border border-danger rounded shadow"
            >
              <HistoryView />
            </Col>
          </Row>
        </Container>
      </div>
    </React.StrictMode>
  );
}

export default App;
