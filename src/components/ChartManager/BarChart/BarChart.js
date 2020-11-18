import React, { Component } from 'react';
import * as d3 from 'd3';

const width = 600;
const height = 400;
const red = '#FF3737';
const blue = '#007BFF';

export class BarChart extends Component {
  constructor(props) {
    super(props);
    this.chart = React.createRef();
    this.state = {
      heighs: null,
      lows: null,
    };
  }

  draw = () => {
    const { width, height, data } = this.props;
    const domain = data.map((stats) => stats.elapsedRestTimeInSeconds);
    const margin = { top: 20, right: 20, bottom: 100, left: 100 };

    const graphWidth = width - margin.left - margin.right;
    const graphHeight = height - margin.top - margin.bottom;

    const yScale = d3
      .scaleLinear()
      .domain([0, Math.max(...domain)])
      .range([0, height]);

    const xScale = d3
      .scaleBand()
      .domain(data.map(({ date }) => date))
      .range([0, width])
      .paddingInner(0.2)
      .paddingOuter(0.2);

    const canvas = d3
      .select(this.chart)
      .selectAll('rect')
      .data(data)
      .attr('width', xScale.bandwidth)
      .attr('height', (d) => yScale(d.elapsedRestTimeInSeconds))
      .attr('x', (d) => xScale(d.date))
      .style('fill', blue);

    const graph = canvas
      .append('g')
      .attr('width', graphWidth)
      .attr('height', graphHeight)
      .attr('transform', `translate(${margin.left},${margin.top})`);
  };

  componentDidMount() {
    this.draw();
  }

  componentDidUpdate() {
    this.draw();
  }

  render() {
    const { width, height, data } = this.props;
    const bars = data.map((d) => <rect key={d.date} />);
    return (
      <svg ref={(el) => (this.chart = el)} width={width} height={height}>
        {bars}
      </svg>
    );
  }
}

export default BarChart;
