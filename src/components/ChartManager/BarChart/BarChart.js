import React, { Component } from 'react';

const width = 600;
const height = 400;
const red = '#FF3737';
const blue = '#007BFF';

export class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heighs: null,
      lows: null,
    };
  }

  render() {
    return <svg></svg>;
  }
}

export default BarChart;
