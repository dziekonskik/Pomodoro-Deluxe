import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
//import styles from './TimerSetButtons.module.scss';

const TimerSetButtons = ({ setTime }) => {
  return (
    <ButtonGroup className="btn-sm w-50 mx-auto">
      <Button
        variant="danger"
        data-toggle="tooltip"
        data-placement="bottom"
        title="+"
        className="shadow"
        onClick={setTime}
      >
        +
      </Button>
      <Button
        variant="outline-danger"
        data-toggle="tooltip"
        data-placement="bottom"
        title="-"
        className="shadow"
        onClick={setTime}
      >
        -
      </Button>
    </ButtonGroup>
  );
};

export default TimerSetButtons;
