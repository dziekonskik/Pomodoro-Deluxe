import React, { Component } from 'react';
import BarChart from './BarChart';

class ChartWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({ chart: new BarChart(this.chart) });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.gender !== this.props.gender) {
      this.state.chart.update(this.props.gender);
    }
  }

  render() {
    return <div ref={(el) => (this.chart = el)}></div>;
  }
}

export default ChartWrapper;
