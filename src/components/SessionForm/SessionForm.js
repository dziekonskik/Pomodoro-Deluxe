import React, { Component } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import TimeUnit from '../TimeUnit/TimeUnit';
import ToggleTimeUnit from '../PomodoroButtons/ToggleTimeUnit';
import UtilityButton from '../PomodoroButtons/UtilityButton';
import SessionListItem from './SessionListItem';

import TimeSetContext from '../../TimeSetContext';

import styles from './SessionForm.module.scss';
import {
  GiBiceps,
  GiBoatFishing,
  GiArmorUpgrade,
  GiAmericanFootballBall,
  GiBeachBucket,
  GiCroissant,
  GiCoins,
  GiHighKick,
  GiPodium,
  GiPush,
  GiSunglasses,
  GiAtom,
  GiTeslaTurret,
  GiSnail,
} from 'react-icons/gi';

function randomIconGenerator(arr) {
  const random = Math.floor(Math.random() * arr.length);

  return arr[random];
}

const workIcons = [
  <GiBiceps />,
  <GiArmorUpgrade />,
  <GiCoins />,
  <GiHighKick />,
  <GiPodium />,
  <GiPush />,
  <GiAtom />,
];
const breakIcons = [
  <GiBoatFishing />,
  <GiAmericanFootballBall />,
  <GiBeachBucket />,
  <GiCroissant />,
  <GiSunglasses />,
  <GiTeslaTurret />,
  <GiSnail />,
];

export class SessionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      listOfCycles: [],
      workMinutes: 0,
      restMinutes: 0,
      userSetsRestTime: false,
    };
  }

  setTitle = ({ target }) => {
    this.setState({ title: target.value });
  };

  addItem = () => {
    this.setState((prevState) => {
      const listOfCycles = [
        ...prevState.listOfCycles,
        {
          id: uuidv4(),
          workMinutes: this.state.workMinutes,
          restMinutes: this.state.restMinutes,
          workIcon: randomIconGenerator(workIcons),
          restIcon: randomIconGenerator(breakIcons),
        },
      ];
      const workMinutes = 0;
      const restMinutes = 0;
      return { listOfCycles, workMinutes, restMinutes };
    });
  };

  removeItem = (itemToRemove) => {
    this.setState((prevState) => {
      const listOfCycles = prevState.listOfCycles.filter(
        (item) => item.id !== itemToRemove
      );
      return { listOfCycles };
    });
  };

  render() {
    const {
      userSetsRestTime,
      title,
      listOfCycles,
      workMinutes,
      restMinutes,
    } = this.state;
    const mediaQuery = window.matchMedia('(max-width: 992px)');
    const screenIsWideEnough = !mediaQuery.matches;
    const userWantsToDisplayWorkTime = !userSetsRestTime;
    const shouldDisplayWorkTimeUnit =
      screenIsWideEnough || userWantsToDisplayWorkTime;
    const shouldDisplayRestTimeUnit =
      screenIsWideEnough || !userWantsToDisplayWorkTime;
    const workAndRestTimeIsSet = workMinutes > 0 && restMinutes > 0;

    return (
      <Container className={`p-3 mt-1 mb-2 ${styles.background}`}>
        <TimeSetContext.Consumer>
          {(context) => (
            <>
              <Row className="d-flex justify-content-center">
                <Col xs={12} lg={6}>
                  <input
                    placeholder="Session Name"
                    className={`text-center ${styles.input}`}
                    onChange={this.setTitle}
                  />
                </Col>
              </Row>
              <TransitionGroup>
                <Row className="d-flex justify-content-center my-3">
                  <Col xs={8} className="col-sm-7 col-lg-3">
                    {shouldDisplayWorkTimeUnit && (
                      <CSSTransition
                        in={shouldDisplayWorkTimeUnit}
                        timeout={700}
                        classNames={'workTimeUnit'}
                      >
                        <TimeUnit
                          justMinutes
                          setTime={({ target }) =>
                            context.setWorkTime({ target }, this)
                          }
                          minutesSet={workMinutes}
                        >
                          Work
                        </TimeUnit>
                      </CSSTransition>
                    )}
                  </Col>
                  <Col xs={8} className="col-sm-7 col-lg-3">
                    {shouldDisplayRestTimeUnit && (
                      <CSSTransition
                        in={shouldDisplayRestTimeUnit}
                        timeout={700}
                        classNames={'restTimeUnit'}
                      >
                        <TimeUnit
                          justMinutes
                          setTime={({ target }) =>
                            context.setRestTime({ target }, this)
                          }
                          minutesSet={restMinutes}
                        >
                          Break
                        </TimeUnit>
                      </CSSTransition>
                    )}
                  </Col>
                </Row>
              </TransitionGroup>
              <Row className="d-flex justify-content-around align-items-center my-3">
                <UtilityButton
                  handleClick={workAndRestTimeIsSet ? this.addItem : null}
                  size={'lg'}
                  variant={'outline-primary'}
                >
                  Add Cycle
                </UtilityButton>
                {!screenIsWideEnough && (
                  <ToggleTimeUnit
                    checked={userSetsRestTime}
                    checkFn={context.toggleTimeUnitDisplay.bind(this)}
                  >
                    Set Break
                  </ToggleTimeUnit>
                )}
              </Row>
              <Row className="d-flex justify-content-center text-center">
                <Col
                  className="overflow-auto col-lg-6"
                  style={{ height: '190px' }}
                >
                  <ListGroup style={{ cursor: 'pointer' }}>
                    <TransitionGroup>
                      {listOfCycles.map((item) => (
                        <CSSTransition
                          key={item.id}
                          timeout={{ enter: 300, exit: 200 }}
                          classNames={'sessionListItem'}
                        >
                          <SessionListItem
                            handleRemove={() => {
                              this.removeItem(item.id);
                            }}
                            key={item.id}
                            {...item}
                          />
                        </CSSTransition>
                      ))}
                    </TransitionGroup>
                  </ListGroup>
                </Col>
              </Row>
              <Row className="d-flex justify-content-around align-items-center my-3">
                <UtilityButton
                  handleClick={
                    title !== '' && listOfCycles.length
                      ? () => context.fetchFromSessionForm(title, listOfCycles)
                      : null
                  }
                  size={'lg'}
                  variant={'primary'}
                >
                  {title !== '' && listOfCycles.length
                    ? 'Complete Session'
                    : 'Set Session Parameters'}
                </UtilityButton>
              </Row>
            </>
          )}
        </TimeSetContext.Consumer>
      </Container>
    );
  }
}

export default SessionForm;
