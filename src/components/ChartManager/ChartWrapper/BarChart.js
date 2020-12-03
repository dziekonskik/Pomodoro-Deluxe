import * as d3 from 'd3';

const MARGIN = { TOP: 10, BOTTOM: 40, LEFT: 70, RIGHT: 10 };
const WIDTH = 700 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 500 - MARGIN.TOP - MARGIN.BOTTOM;

export default class BarChart {
    constructor(element, data) {
        this.svg = d3.select(element).append('svg')
    }
}
