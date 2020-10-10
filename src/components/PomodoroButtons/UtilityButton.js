import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const UtilityButton = ({ children, handleClick, variant, size }) => {
  return (
    <p>
      <Button size={size} variant={variant} onClick={handleClick}>
        {children}
      </Button>
    </p>
  );
};

UtilityButton.propTypes = {
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  size: PropTypes.string,
};

export default UtilityButton;
