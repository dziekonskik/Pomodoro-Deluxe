import React from 'react';
import { Button } from 'react-bootstrap';

const UtilityButton = ({ children }) => {
  return (
    <p>
      <Button
        className="mt-5"
        variant="outline-warning"
        data-toggle="tooltip"
        data-placement="top"
        title="Start pomodoro"
      >
        {children}
      </Button>
    </p>
  );
};

export default UtilityButton;
