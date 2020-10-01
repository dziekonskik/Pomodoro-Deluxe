import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import HistoryItem from './HistoryItem/HistoryItem';

export class HistoryPanel extends Component {
  state = {
    itemArrived: false,
    storageID: 0,
    historyItemsFromStorage: [],
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
    this.setState(() => {
      const historyItemsFromStorage = localStoragePomodoros;
      const storageID =
        this.state.storageID < localStoragePomodoros.length
          ? localStoragePomodoros.length + 1
          : this.state.storageID;
      return { historyItemsFromStorage, storageID };
    });
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
    const newItemArived = this.state.itemArrived;

    if (propsHasChanged) {
      this.setState((prevState) => {
        const itemArrived = true;
        const storageID = prevState.storageID++;
        return { itemArrived, storageID };
      });
    }

    if (newItemArived) {
      localStorage.setItem(
        `Pomodoro-${this.state.storageID}`,
        JSON.stringify(this.props)
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
          <div className="mx-auto">
            {ItemsToDisplay.length
              ? ItemsToDisplay.map((historyItem) => {
                  return (
                    <HistoryItem
                      handleClick={this.deleteItem}
                      key={historyItem.id}
                      {...historyItem}
                    />
                  );
                })
              : null}
          </div>
        </Row>
      </>
    );
  }
}

export default HistoryPanel;
