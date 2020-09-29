import React, { Component } from 'react';
import HistoryItem from './HistoryItem/HistoryItem';

export class HistoryPanel extends Component {
  state = {
    itemArrived: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.setState({ itemArrived: true });
    }
  }
  render() {
    return (
      <div>
        <HistoryItem {...this.props} />
      </div>
    );
  }
}

export default HistoryPanel;
