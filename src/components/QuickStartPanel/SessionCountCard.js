import React from 'react';
import { Card } from 'react-bootstrap';

const SessionCountCard = ({ sessionsTotal, currentSession, icon }) => {
  return (
    <Card bg="light" border="dark" text="dark">
      <Card.Body>
        <Card.Text className="d-flex justify-content-around align-items-center">
          <div>
            <span className="h3 mx-3"> {currentSession}</span> /{' '}
            <span className="h3 mx-3">{sessionsTotal}</span>{' '}
          </div>
          <span className="h1 text-dark">{icon}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SessionCountCard;