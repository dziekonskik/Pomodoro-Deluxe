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
    workTime: 0,
    restTime: 0,
    elapsedWorkTimeInSeconds: 0,
    elapsedRestTimeInSeconds: 0,
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

  fetchSessionData = (
    workTime,
    restTime,
    elapsedWorkTimeInSeconds,
    elapsedRestTimeInSeconds,
    pausesCount
  ) => {
    this.setState({
      workTime,
      restTime,
      elapsedWorkTimeInSeconds,
      elapsedRestTimeInSeconds,
      pausesCount,
    });
    console.log(typeof workTime, typeof elapsedRestTimeInSeconds);
  };

  render() {
    return (
      <React.StrictMode>
        <Container fluid className={`App ${styles.bgColor} vh-100 p-5`}>
          <Row>
            <Col
              sm={12}
              md={{ order: 2 }}
              className="col-md-6 col-lg-9 shadow"
              style={{ maxHeight: '90vh' }}
            >
              <ErrorBoundry message="Błąd w QuickstartPanel">
                <QuickStartPanel fetchFn={this.fetchSessionData} />
              </ErrorBoundry>
            </Col>
            <Col
              sm={12}
              className="col-md-6 col-lg-3 rounded shadow overflow-auto"
              style={{ maxHeight: '90vh' }}
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
