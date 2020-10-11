import React, { Component } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import TimeUnit from '../TimeUnit/TimeUnit';
import ToggleTimeUnit from '../PomodoroButtons/ToggleTimeUnit';
import UtilityButton from '../PomodoroButtons/UtilityButton';
import SessionListItem from './SessionListItem';

import TimeSetContext from '../../TimeSetContext';

import styles from './SessionForm.module.scss';

export class SessionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sessionTitle: '',
      listOfCycles: [],
      workMinutes: 0,
      restMinutes: 0,
      userSetsRestTime: false,
    };
  }

  setSessionTitle = ({ target }) => {
    this.setState({ sessionTitle: target.value });
  };

  toggleTimeUnitDisplay = () => {
    this.setState((prevState) => ({
      userSetsRestTime: !prevState.userSetsRestTime,
    }));
  };

  render() {
    const {
      userSetsRestTime,
      listOfCycles,
      workMinutes,
      restMinutes,
    } = this.state;
    const mediaQuery = window.matchMedia('(max-width: 992px)');
    const screenIsWideEnough = !mediaQuery.matches;
    const userWantsToDisplayWorkTime = !userSetsRestTime;
    const shouldDisplayWorkTimeUnit =
      screenIsWideEnough || userWantsToDisplayWorkTime;
    const shouldDisplayRestTimeUnit =
      screenIsWideEnough || !userWantsToDisplayWorkTime;

    return (
      <Container className={`p-3 ${styles.font}`}>
        <Row className="d-flex justify-content-center">
          <Col md={6}>
            <input
              placeholder="Session Name"
              className={`text-center ${styles.input}`}
            />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center my-3">
          <TimeSetContext.Consumer>
            {(context) => (
              <>
                <Col xs={8} className="col-sm-7 col-lg-3">
                  {shouldDisplayWorkTimeUnit && (
                    <TimeUnit
                      justMinutes
                      setTime={({ target }) =>
                        context.setWorkTime({ target }, this)
                      }
                      minutesSet={workMinutes}
                    >
                      Work
                    </TimeUnit>
                  )}
                </Col>
                <Col xs={8} className="col-sm-7 col-lg-3">
                  {shouldDisplayRestTimeUnit && (
                    <TimeUnit
                      justMinutes
                      setTime={({ target }) =>
                        context.setRestTime({ target }, this)
                      }
                      minutesSet={restMinutes}
                    >
                      Break
                    </TimeUnit>
                  )}
                </Col>
              </>
            )}
          </TimeSetContext.Consumer>
        </Row>
        <Row className="d-flex justify-content-around align-items-center my-3">
          <UtilityButton size={'lg'} variant={'outline-warning'}>
            Add Cycle
          </UtilityButton>
          {!screenIsWideEnough && (
            <ToggleTimeUnit
              checked={userSetsRestTime}
              checkFn={this.toggleTimeUnitDisplay}
            >
              Set Break
            </ToggleTimeUnit>
          )}
        </Row>
        <Row className="d-flex justify-content-center text-center">
          <Col className="overflow-auto col-lg-6" style={{ height: '240px' }}>
            <ListGroup style={{ cursor: 'pointer' }}>
              {listOfCycles.map((cycle) => (
                <SessionListItem />
              ))}
            </ListGroup>
          </Col>
        </Row>
        <Row className="d-flex justify-content-around align-items-center my-3">
          <UtilityButton size={'lg'} variant={'outline-warning'}>
            Complete Session
          </UtilityButton>
        </Row>
      </Container>
    );
  }
}
SessionForm.contextType = 'TimeSetContext';
export default SessionForm;
