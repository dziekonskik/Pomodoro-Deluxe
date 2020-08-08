import React from 'react';
import styles from './TimerColon.module.scss';
import { Image, Container } from 'react-bootstrap';
import dot from '../../../img/svg/dot.svg';
const TimerColon = () => (
  <Container className="w-25 d-flex flex-sm-column align-items-sm-center my-auto">
    <Image className={styles.timerColonStyles} src={dot} roundedCircle />
    <Image className={styles.timerColonStyles} src={dot} roundedCircle />
  </Container>
);

export default TimerColon;
