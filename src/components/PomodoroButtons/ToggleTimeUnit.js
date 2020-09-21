import React from 'react';
import styles from './ToggleUnit.module.scss';

const ToggleUnit = ({ checked, children }) => (
  <label className={styles.label}>
    <input type="checkbox" checked={checked} />
    <div className={styles.checkboxDiv} />
    {children}
  </label>
);

export default ToggleUnit;
