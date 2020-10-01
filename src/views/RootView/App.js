import React from 'react';
import HistoryPanel from '../../components/HistoryPanel/HistoryPanel';
import QuickStartPanel from '../../components/QuickStartPanel/QuickStartPanel';
import ErrorBoundry from '../../components/ErrorBoundry/ErrorBoundry';
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

  componentDidMount() {
    console.count('App mount');
  }

  componentDidUpdate() {
    console.count('App update');
  }

  componentWillUnmount() {
    console.count('App mount');
  }

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
        <Container fluid className={`App ${styles.bgColor} min-vh-100 p-5`}>
          <Row className="h-100">
            <Col sm={12} md={{ order: 2 }} className="col-md-6 col-lg-9 shadow">
              <ErrorBoundry message="Błąd w QuickstartPanel">
                <QuickStartPanel fetchFn={this.fetchSessionData} />
              </ErrorBoundry>
            </Col>
            <Col
              sm={12}
              className="col-md-6 col-lg-3 border border-danger rounded shadow"
            >
              <ErrorBoundry message="Błąd w HistoryPanel">
                <HistoryPanel {...this.state} />
              </ErrorBoundry>
            </Col>
          </Row>
        </Container>
      </React.StrictMode>
    );
  }
}

export default App;
