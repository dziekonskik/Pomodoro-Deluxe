import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const TimerSetButtons = ({ setTime }) => {
  return (
    <ButtonGroup className="btn-sm w-50 mx-auto">
      <Button
        variant="dark"
        data-toggle="tooltip"
        data-placement="bottom"
        title="+"
        onClick={setTime}
      >
        +
      </Button>
      <Button
        variant="outline-dark"
        data-toggle="tooltip"
        data-placement="bottom"
        title="-"
        onClick={setTime}
      >
        -
      </Button>
    </ButtonGroup>
  );
};

TimerSetButtons.propTypes = {
  setTime: PropTypes.func.isRequired,
};

export default TimerSetButtons;
