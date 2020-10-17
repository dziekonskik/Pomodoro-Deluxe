import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import HistoryPanel from '../../components/HistoryPanel/HistoryPanel';
import QuickStartPanel from '../../components/QuickStartPanel/QuickStartPanel';
import ErrorBoundry from '../../components/ErrorBoundry/ErrorBoundry';
import SessionsView from '../SessionsView/SessionsView';
import StatsView from '../StatsView/StatsView';
import HydrappView from '../HydrappView/HydrappView';

import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import TimeSetContext from '../../TimeSetContext';

import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';

class App extends React.Component {
  state = {
    title: 'Quick Pomodoro',
    workTime: 0,
    restTime: 0,
    elapsedWorkTimeInSeconds: 0,
    elapsedRestTimeInSeconds: 0,
    pausesCount: 0,
    sessionsCount: 0,
    listOfCycles: [],
    redirect: true,
  };

  setWorkTime = ({ target }, that) => {
    target.title === '+'
      ? that.setState({ workMinutes: that.state.workMinutes + 0.2 })
      : that.state.workMinutes > 0
      ? that.setState({ workMinutes: that.state.workMinutes - 0.2 })
      : that.setState({ workMinutes: 0 });
  };

  setRestTime = ({ target }, that) => {
    target.title === '+'
      ? that.setState({ restMinutes: that.state.restMinutes + 0.1 })
      : that.state.restMinutes > 0
      ? that.setState({ restMinutes: that.state.restMinutes - 0.1 })
      : that.setState({ restMinutes: 0 });
  };

  toggleTimeUnitDisplay() {
    this.setState((prevState) => ({
      userSetsRestTime: !prevState.userSetsRestTime,
    }));
  }

  componentDidMount() {
    console.count('App mount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.count('App update');
  }

  componentWillUnmount() {
    console.count('App mount');
  }

  fetchFromQuickStartPanel = (
    title,
    elapsedWorkTimeInSeconds,
    elapsedRestTimeInSeconds,
    pausesCount,
    sessionsCount
  ) => {
    sessionsCount = sessionsCount - 1;
    this.setState({
      title,
      elapsedWorkTimeInSeconds,
      elapsedRestTimeInSeconds,
      pausesCount,
      sessionsCount,
      listOfCycles: [],
    });
  };

  fetchFromSessionForm = (title, listOfCycles) => {
    this.setState({ title, listOfCycles });
  };

  render() {
    const mediaQuery = window.matchMedia('(max-width: 992px)');
    const timeSetFunctions = {
      setWorkTime: this.setWorkTime,
      setRestTime: this.setRestTime,
      toggleTimeUnitDisplay: this.toggleTimeUnitDisplay,
      fetchFromSessionForm: this.fetchFromSessionForm,
    };
    return (
      <React.StrictMode>
        <>
          <Container
            fluid
            className={`${!mediaQuery.matches ? 'vh-100' : ''} p-4`}
          >
            <BrowserRouter>
              <>
                <Redirect to={{ pathname: '/', state: { redirect: true } }} />
                <Row>
                  <NavBar />
                </Row>
                <Row>
                  <TimeSetContext.Provider value={timeSetFunctions}>
                    <Col
                      sm={12}
                      md={{ order: 2 }}
                      className="col-md-6 col-lg-9"
                      style={{ height: '90vh' }}
                    >
                      <Route exact path="/">
                        <ErrorBoundry message="Błąd w QuickstartPanel">
                          <QuickStartPanel
                            {...this.state}
                            fetchFn={this.fetchFromQuickStartPanel}
                          />
                        </ErrorBoundry>
                      </Route>
                      <Route path="/session">
                        <ErrorBoundry message="Błąd w Sessions">
                          {this.state.listOfCycles.length ? (
                            <Redirect to="/" />
                          ) : (
                            <SessionsView />
                          )}
                        </ErrorBoundry>
                      </Route>
                      <Route path="/stats">
                        <ErrorBoundry message="Błąd w Stats">
                          <StatsView />
                        </ErrorBoundry>
                      </Route>
                      <Route path="/hydrapp">
                        <ErrorBoundry message="Błąd w Hydrapp">
                          <HydrappView />
                        </ErrorBoundry>
                      </Route>
                    </Col>
                    <Col
                      sm={12}
                      className="col-md-6 col-lg-3 rounded overflow-auto"
                      // style={{ maxHeight: '90vh' }}
                    >
                      <ErrorBoundry message="Błąd w HistoryPanel">
                        <HistoryPanel {...this.state} />
                      </ErrorBoundry>
                    </Col>
                  </TimeSetContext.Provider>
                </Row>
              </>
            </BrowserRouter>
          </Container>
        </>
      </React.StrictMode>
    );
  }
}

export default App;
