import React from 'react';
import styles from './ToggleTimeUnit.module.scss';
import PropTypes from 'prop-types';

const ToggleUnit = ({ checkFn, children, checked }) => (
  <label className={styles.label}>
    <input type="checkbox" checked={checked} onChange={checkFn} />
    <div className={styles.checkboxDiv} />
    {children}
  </label>
);

ToggleUnit.propTypes = {
  checkFn: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  checked: PropTypes.string.isRequired,
};

export default ToggleUnit;
