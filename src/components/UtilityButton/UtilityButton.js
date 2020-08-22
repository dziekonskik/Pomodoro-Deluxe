import React from 'react';
import { Button } from 'react-bootstrap';

const UtilityButton = ({ children, timeStartStop, disabled }) => {
  return (
    <p>
      <Button
        className={`mt-5 mx-3 ${disabled ? 'disabled' : null}`}
        variant="warning"
        data-toggle="tooltip"
        data-placement="top"
        title="Start pomodoro"
        onClick={timeStartStop}
      >
        {children}
      </Button>
    </p>
  );
};

export default UtilityButton;
