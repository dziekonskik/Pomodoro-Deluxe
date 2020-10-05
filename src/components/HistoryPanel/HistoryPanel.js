import React, { Component } from 'react';
import { Row, Button } from 'react-bootstrap';
import HistoryItem from './HistoryItem/HistoryItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import './HistoryPanel.css';

export class HistoryPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemArrived: false,
      storageID: 0,
      historyItemsFromStorage: [],
      animateItem: false,
      animatedItemID: '',
      sorted: false,
    };
  }
  sendId = (id) => {
    this.setState({ animatedItemID: id });
  };

  animationFn = (bool) => {
    setTimeout(() => {
      this.setState({ animateItem: bool });
    }, 10);
  };

  sortByDate = () => {
    this.setState((prevState) => {
      const sorted = !prevState.sorted;
      const historyItemsFromStorage = prevState.historyItemsFromStorage.sort(
        (itemOne, ItemTwo) => {
          const dateOne = new Date(itemOne.date);
          const dateTwo = new Date(ItemTwo.date);
          return sorted
            ? parseInt(dateOne.getTime()) - parseInt(dateTwo.getTime())
            : parseInt(dateTwo.getTime()) - parseInt(dateOne.getTime());
        }
      );
      return { historyItemsFromStorage, sorted };
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
    const propsHasChanged = prevProps !== this.props;
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
    }
    console.count('HistoryPanel update');
  }

  componentDidMount() {
    this.moveDataFromStorageToState();
    this.prepareDataForHistoryItem();
    this.sortByDate();
    console.count('HistoryPanel mount');
  }

  componentWillUnmount() {
    console.count('HistoryPanel unmount');
  }
  render() {
    const ItemsToDisplay = this.state.historyItemsFromStorage;
    return (
      <>
        <Row>
          <Button
            onClick={this.sortByDate}
            block
            size="lg"
            variant="outline-light"
          >
            {this.state.sorted ? 'Newest First' : 'Oldest First'}
          </Button>
        </Row>
        <Row>
          <div className={`mx-auto`}>
            <TransitionGroup>
              {ItemsToDisplay.length
                ? ItemsToDisplay.map((historyItem) => {
                    return (
                      <CSSTransition
                        key={historyItem.id}
                        timeout={300}
                        classNames={'historyItem'}
                        appear={true}
                      >
                        <HistoryItem
                          handleClose={() => {
                            this.deleteItem(historyItem.id);
                            this.sendId(historyItem.id);
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

export default HistoryPanel;
