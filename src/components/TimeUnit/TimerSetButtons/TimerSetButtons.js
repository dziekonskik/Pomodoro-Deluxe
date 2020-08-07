import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import styles from './TimerSetButtons.module.scss';

const TimerSetButtons = () => {
  return (
    <ButtonGroup className="btn-sm w-100">
      <Button variant="danger">+</Button>
      <Button variant="outline-danger">-</Button>
    </ButtonGroup>
  );
};

export default TimerSetButtons;
