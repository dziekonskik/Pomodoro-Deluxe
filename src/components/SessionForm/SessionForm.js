import React, { Component } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import TimeUnit from '../TimeUnit/TimeUnit';
import UtilityButton from '../PomodoroButtons/UtilityButton';
import SessionListItem from './SessionListItem';
import styles from './SessionForm.module.scss';

export class SessionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workMinutes: 0,
      restMinutes: 0,
    };
  }

  render() {
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
          <Col className="col-lg-4 mx-3">
            <TimeUnit>Work</TimeUnit>
          </Col>
          <Col className="col-lg-4">
            <TimeUnit>Break</TimeUnit>
          </Col>
        </Row>
        <Row className="d-flex justify-content-around align-items-center my-3">
          <UtilityButton size={'lg'} variant={'outline-warning'}>
            Add Cycle
          </UtilityButton>
        </Row>
        <Row className="d-flex justify-content-center text-center">
          <Col className="overflow-auto" style={{ 'max-height': '240px' }}>
            <ListGroup>
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

export default SessionForm;
