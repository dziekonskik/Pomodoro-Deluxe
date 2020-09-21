import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const StartStopButton = ({
  children,
  disabled,
  onStart,
  onPause,
  isTimeRunning,
}) => {
  return (
    <p>
      <Button
        className={`mt-5 mx-3 ${disabled ? 'disabled' : null}`}
        variant="warning"
        data-toggle="tooltip"
        data-placement="top"
        title="Start pomodoro"
        onClick={isTimeRunning && !disabled ? onPause : onStart}
      >
        {children}
      </Button>
    </p>
  );
};

StartStopButton.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onStart: PropTypes.func,
  onPause: PropTypes.func,
  isTimeRunning: PropTypes.bool.isRequired,
};

export default StartStopButton;
