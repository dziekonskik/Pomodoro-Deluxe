import React from 'react';
import { Card } from 'react-bootstrap';

const SessionCountCard = (props) => {
  console.log(props);
  return (
    <Card bg="warning" text="light" className="shadow-lg">
      <Card.Body>
        <Card.Text
          styles={{ fontSize: '32px', width: '100px', height: '70px' }}
        >
          {Object.entries(props).length}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SessionCountCard;
