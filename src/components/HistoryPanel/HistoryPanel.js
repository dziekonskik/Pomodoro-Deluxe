import React, { Component } from 'react';
import HistoryItem from './HistoryItem/HistoryItem';

export class HistoryPanel extends Component {
  state = {
    itemArrived: false,
    storageID: 0,
    historyItemsFromStorage: [],
  };

  moveDataFromStorageToState() {}

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
    }
    console.count('HistoryPanel update');
    console.log(this.state.storageID, this.state.historyItemsFromStorage);
  }

  componentDidMount() {
    const localStoragePomodoros = Object.entries(localStorage)
      .map((item) => {
        return item[0].includes('Pomodoro') ? item[1] : null;
      })
      .filter((item) => JSON.parse(item));
    this.setState(() => {
      const historyItemsFromStorage = localStoragePomodoros;
      const storageID = localStoragePomodoros.length;
      return { historyItemsFromStorage, storageID };
    });
    console.count('HistoryPanel mount');
  }

  componentWillUnmount() {
    console.count('HistoryPanel unmount');
  }
  render() {
    return (
      <div className="overflow-hidden">
        {this.state.historyItemsFromStorage.map((historyItem) => {
          return <HistoryItem {...this.props} />;
        })}
      </div>
    );
  }
}

export default HistoryPanel;
