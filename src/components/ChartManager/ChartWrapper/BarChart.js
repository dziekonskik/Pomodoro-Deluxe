import * as d3 from 'd3';

const MARGIN = { TOP: 10, BOTTOM: 70, LEFT: 70, RIGHT: 10 };
const WIDTH = 700 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 500 - MARGIN.TOP - MARGIN.BOTTOM;

export default class BarChart {
  constructor(element, data) {
    this.data = data;

    this.svg = d3
      .select(element)
      .append('svg')
      .attr('width', WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
      .attr('height', HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
      .append('g')
      .attr('transform', `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`);

    const y = d3
      .scaleLinear()
      .domain([
        d3.min(this.data, (d) => d.selectedCategory),
        d3.max(this.data, (d) => d.selectedCategory),
      ])
      .range([HEIGHT, 0]);

    const x = d3
      .scaleBand()
      .domain(this.data.map((d) => d.title))
      .range([0, WIDTH])
      .padding(0.3);

    const xAxis = d3.axisBottom(x);
    this.svg
      .append('g')
      .attr('transform', `translate(0,${HEIGHT})`)
      .call(xAxis);

    const yAxis = d3.axisLeft(y);
    this.svg.append('g').call(yAxis);

    this.svg
      .append('text')
      .attr('x', WIDTH / 2)
      .attr('y', HEIGHT + MARGIN.BOTTOM)
      .attr('text-anchor', 'middle')
      .text('Pomodoro name and duration');

    this.svg
      .append('text')
      .attr('x', -HEIGHT / 2)
      .attr('y', -30)
      .attr('text-anchor', 'middle')
      .text('This will be dynamic')
      .attr('transform', 'rotate(-90)');

    const rects = this.svg.selectAll('rect').data(data);

    rects
      .enter()
      .append('rect')
      .attr('x', (d) => x(d.title))
      .attr('y', (d) => y(d.selectedCategory))
      .attr('width', x.bandwidth)
      .attr('height', (d) => HEIGHT - y(d.selectedCategory))
      .attr('fill', 'tomato');
  }

  update() {}
}
