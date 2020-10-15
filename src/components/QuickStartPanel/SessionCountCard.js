import React from 'react';
import { Card } from 'react-bootstrap';
import styles from './SessionCountCard.module.scss';

const SessionCountCard = ({ sessionsTotal, currentSession, icon }) => {
  return (
    <Card bg="warning" text="light" className="shadow-lg">
      <Card.Body>
        <Card.Text className="d-flex justify-content-around align-items-center">
          <div>
            <span className="h3 mx-3"> {currentSession}</span> /{' '}
            <span className="h3 mx-3">{sessionsTotal}</span>{' '}
          </div>
          <span className="h1 text-danger">{icon}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SessionCountCard;
