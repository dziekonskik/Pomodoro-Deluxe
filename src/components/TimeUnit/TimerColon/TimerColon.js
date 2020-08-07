import React from 'react';
import styles from './TimerColon.module.scss';
import { Image } from 'react-bootstrap';
import dot from '../../../img/svg/dot (1).svg';

const TimerColon = () => (
  <>
    <Image className={styles.timerColonStyles} src={dot} roundedCircle />
    <Image className={styles.timerColonStyles} src={dot} roundedCircle />
  </>
);

export default TimerColon;
