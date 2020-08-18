import React from 'react';
import { Button } from 'react-bootstrap';

const UtilityButton = ({ children, timeStartStop }) => {
  return (
    <p>
      <Button
        className="mt-5"
        variant="outline-warning"
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
