import React from 'react';
import PropTypes from 'prop-types';
import { Button, Badge } from 'react-bootstrap';

const StartStopButton = ({
  children,
  disabled,
  handleStartStop,
  pausesCount,
}) => {
  return (
    <p>
      <Button
        className={`mt-5 mx-3 ${disabled ? 'disabled' : null}`}
        variant="primary"
        data-toggle="tooltip"
        data-placement="top"
        title="Start pomodoro"
        onClick={disabled ? null : handleStartStop}
      >
        {children}
        <Badge className="ml-2" variant="light">
          {pausesCount}
        </Badge>
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
