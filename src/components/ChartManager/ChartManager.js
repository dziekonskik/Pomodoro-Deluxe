import React, { Component } from 'react';
import BarChart from './BarChart/BarChart';

export class ChartManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pomodoroStats: [],
    };
  }

  fetchStatistics() {
    try {
      const pomodoroStats = Object.entries(localStorage)
        .map(
          (entry) =>
            entry[0].startsWith('Pomodoro-Deluxe') && JSON.parse(entry[1])
        )
        .filter((justDefineds) => justDefineds);
      this.setState({ pomodoroStats });
    } catch (error) {
      console.error(error);
    }
  }

  componentDidMount() {
    this.fetchStatistics();
  }

  render() {
    const { pomodoroStats } = this.state;
    return (
      <div style={{ backgroundColor: 'rgba(255, 127, 89, .4)' }}>
        <h3>elooaso</h3>
        {!!pomodoroStats && (
          <BarChart width={700} height={600} data={pomodoroStats} />
        )}
      </div>
    );
  }
}

export default ChartManager;
