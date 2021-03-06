import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';
import HistoryItem from './HistoryItem/HistoryItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import '../../css/transitions.css';

export class HistoryPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemArrived: false,
      storageID: 0,
      historyItemsFromStorage: [],
    };
  }

  sortByDate = () => {
    this.setState((prevState) => {
      const historyItemsFromStorage = prevState.historyItemsFromStorage.sort(
        (itemOne, ItemTwo) => {
          const dateOne = new Date(itemOne.date);
          const dateTwo = new Date(ItemTwo.date);
          return parseInt(dateTwo.getTime()) - parseInt(dateOne.getTime());
        }
      );
      return { historyItemsFromStorage };
    });
  };

  deleteItem = (itemToRemove) => {
    localStorage.removeItem(itemToRemove);
    this.setState((prevState) => {
      const historyItemsFromStorage = prevState.historyItemsFromStorage.filter(
        (item) => item.id !== itemToRemove
      );
      return { historyItemsFromStorage };
    });
  };

  moveDataFromStorageToState = () => {
    const localStoragePomodoros = Object.entries(localStorage)
      .map((item) => {
        return item[0].includes('Pomodoro') ? item : null;
      })
      .filter((item) => item);
    this.setState({ historyItemsFromStorage: localStoragePomodoros });
  };

  prepareDataForHistoryItem = () => {
    this.setState((prevState) => {
      const historyItemsFromStorage = prevState.historyItemsFromStorage.map(
        (item) => {
          const preparedItem = JSON.parse(item[1]);
          let dateToParse = preparedItem.date;
          dateToParse = new Date(dateToParse);
          delete preparedItem.date;
          preparedItem.date = dateToParse;
          preparedItem.id = item[0];
          return preparedItem;
        }
      );
      return { historyItemsFromStorage };
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const propsHasChanged =
      prevProps.elapsedWorkTimeInSeconds !==
      this.props.elapsedWorkTimeInSeconds;

    if (propsHasChanged) {
      const extensiblePropObj = { ...this.props };
      extensiblePropObj.date = new Date();

      localStorage.setItem(
        `Pomodoro-Deluxe-${uuidv4()}`,
        JSON.stringify(extensiblePropObj)
      );
      this.setState({ itemArrived: false });
      this.moveDataFromStorageToState();
      this.prepareDataForHistoryItem();
      this.sortByDate();
    }
    console.count('HistoryPanel update');
  }

  componentDidMount() {
    this.moveDataFromStorageToState();
    this.prepareDataForHistoryItem();
    this.sortByDate();
    console.count('HistoryPanel mount');
    console.log(this.props);
  }

  componentWillUnmount() {
    console.count('HistoryPanel unmount');
  }
  render() {
    const ItemsToDisplay = this.state.historyItemsFromStorage;
    return (
      <>
        <Row className="mt-3">
          <div className={`mx-auto`}>
            <TransitionGroup>
              {ItemsToDisplay.length
                ? ItemsToDisplay.map((historyItem) => {
                    return (
                      <CSSTransition
                        key={historyItem.id}
                        timeout={{ enter: 800, exit: 500 }}
                        classNames={'historyItem'}
                      >
                        <HistoryItem
                          handleClose={() => {
                            this.deleteItem(historyItem.id);
                          }}
                          key={historyItem.id}
                          {...historyItem}
                        />
                      </CSSTransition>
                    );
                  })
                : null}
            </TransitionGroup>
          </div>
        </Row>
      </>
    );
  }
}

HistoryPanel.propTypes = {
  elapsedRestTimeInSeconds: PropTypes.number,
  elapsedWorkTimeInSeconds: PropTypes.number,
  listOfCycles: PropTypes.array,
  pausesCount: PropTypes.number,
  restTime: PropTypes.number,
  sessionsCount: PropTypes.number,
  title: PropTypes.string,
  workTime: PropTypes.number,
};

export default HistoryPanel;
