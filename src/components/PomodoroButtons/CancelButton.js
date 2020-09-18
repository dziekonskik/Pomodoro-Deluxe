import React from 'react';
import { Button } from 'react-bootstrap';

const CancelButton = ({ children, disabled, onCancel }) => {
  return (
    <p>
      <Button
        className={`mt-5 mx-3 ${disabled ? 'disabled' : null}`}
        variant="danger"
        data-toggle="tooltip"
        data-placement="top"
        title="Cancel session"
        onClick={onCancel}
      >
        {children}
      </Button>
    </p>
  );
};

export default CancelButton;
