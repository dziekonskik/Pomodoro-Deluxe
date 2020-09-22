import React from 'react';
import styles from './ToggleTimeUnit.module.scss';

const ToggleUnit = ({ checkFn, children, checked }) => (
  <label className={styles.label}>
    <input type="checkbox" checked={checked} onChange={checkFn} />
    <div className={styles.checkboxDiv} />
    {children}
  </label>
);

export default ToggleUnit;
