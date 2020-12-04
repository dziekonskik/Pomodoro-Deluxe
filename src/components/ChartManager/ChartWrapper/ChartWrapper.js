import React, { Component } from 'react';
import BarChart from './BarChart';

class ChartWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({ chart: new BarChart(this.chart, this.props.data) });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== this.props.data) {
      this.state.chart.update(this.props.data);
    }
  }

  render() {
    return <div ref={(el) => (this.chart = el)}></div>;
  }
}

export default ChartWrapper;
