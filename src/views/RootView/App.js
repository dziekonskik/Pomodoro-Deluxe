import React from 'react';
import HistoryPanel from '../../components/HistoryPanel/HistoryPanel';
import QuickStartPanel from '../../components/QuickStartPanel/QuickStartPanel';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './App.module.scss';

class App extends React.Component {
  state = {
    title: 'Quick Pomodoro',
    date: new Date(),
    workTime: 0,
    restTime: 0,
    sessions: 1,
    pausesCount: 0,
  };

  fetchSessionData = (workTime, restTime, pausesCount) => {
    this.setState({
      workTime,
      restTime,
      pausesCount,
    });
  };

  render() {
    return (
      <React.StrictMode>
        <div className={`App ${styles.bgColor} vh-100`}>
          <Container className="py-5">
            <Row className="h-100">
              <Col sm={12} md={{ order: 2 }} className="col-md-9 shadow">
                <QuickStartPanel fetchFn={this.fetchSessionData} />
              </Col>
              <Col
                sm={12}
                className="col-md-3 border border-danger rounded shadow"
              >
                <HistoryPanel {...this.state} />
              </Col>
            </Row>
          </Container>
        </div>
      </React.StrictMode>
    );
  }
}

export default App;
