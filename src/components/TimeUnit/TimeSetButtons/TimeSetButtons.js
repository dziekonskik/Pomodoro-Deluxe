import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const TimeSetButtons = () => {
  return (
    <ButtonGroup className="w-100">
      <Button variant="danger">+</Button>
      <Button variant="outline-danger">-</Button>
    </ButtonGroup>
  );
};

export default TimeSetButtons;
