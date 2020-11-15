import React, { Component } from 'react';
import BarChart from './BarChart/BarChart';
import * as d3 from 'd3';

export class ChartManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pomodoroStats: [],
    };
  }

  fetchStatistics() {
    const pomodoroStats = Object.entries(localStorage)
      .map(
        (entry) =>
          entry[0].startsWith('Pomodoro-Deluxe') && JSON.parse(entry[1])
      )
      .filter((justDefineds) => justDefineds);
    this.setState({ pomodoroStats });
  }

  componentDidMount() {
    this.fetchStatistics();
  }

  render() {
    return (
      <div>
        <h3>elooaso</h3>
        <BarChart />
      </div>
    );
  }
}

export default ChartManager;
