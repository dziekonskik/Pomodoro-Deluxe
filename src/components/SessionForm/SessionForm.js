import React, { Component } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import TimeUnit from '../TimeUnit/TimeUnit';
import ToggleTimeUnit from '../PomodoroButtons/ToggleTimeUnit';
import UtilityButton from '../PomodoroButtons/UtilityButton';
import SessionListItem from './SessionListItem';
import styles from './SessionForm.module.scss';

export class SessionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workMinutes: 0,
      restMinutes: 0,
      userSetsRestTime: false,
    };
  }

  toggleTimeUnitDisplay = () => {
    this.setState((prevState) => ({
      userSetsRestTime: !prevState.userSetsRestTime,
    }));
  };

  render() {
    const { userSetsRestTime } = this.state;
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
          <Col xs={12} className="col-sm-9 col-lg-4">
            {shouldDisplayWorkTimeUnit && <TimeUnit>Work</TimeUnit>}
          </Col>
          <Col xs={12} className="col-sm-9 col-lg-4">
            {shouldDisplayRestTimeUnit && <TimeUnit>Break</TimeUnit>}
          </Col>
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
          <Col
            className="overflow-auto col-lg-6"
            style={{ 'max-height': '240px' }}
          >
            <ListGroup style={{ cursor: 'pointer' }}>
              <SessionListItem />
              <SessionListItem />
              <SessionListItem />
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
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
