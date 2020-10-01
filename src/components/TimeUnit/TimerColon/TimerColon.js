import React from 'react';
import styles from './TimerColon.module.scss';
import { Image, Container } from 'react-bootstrap';
import dot from '../../../img/svg/dot.svg';

const TimerColon = () => (
  <Container className="d-flex flex-column align-items-center">
    <Image className={styles.timerColonStyles} src={dot} roundedCircle />
    <Image className={styles.timerColonStyles} src={dot} roundedCircle />
  </Container>
);

export default TimerColon;
