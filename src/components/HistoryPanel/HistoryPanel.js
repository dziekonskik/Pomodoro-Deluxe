import React, { Component } from 'react';
import HistoryItem from './HistoryItem/HistoryItem';

export class HistoryPanel extends Component {
  state = {
    itemArrived: false,
    storageID: 0,
    historyItemsFromStorag: [],
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
  }

  componentDidMount() {
    console.count('HistoryPanel mount');
  }

  componentWillUnmount() {
    console.count('HistoryPanel unmount');
  }
  render() {
    return (
      <div className="overflow-hidden">
        <HistoryItem {...this.props} />
      </div>
    );
  }
}

export default HistoryPanel;
