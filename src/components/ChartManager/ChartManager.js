import React, { Component } from 'react';
import BarChart from './BarChart/BarChart';
import FilterDropdown from './FilterDropdown/FilterDropdown';
import { Row, Col } from 'react-bootstrap';

export class ChartManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pomodoroStats: [],
      selectedCategory: 'elapsedWorkTimeInSeconds',
      categoryArray: [],
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

  selectCategory = (selectedCategory) => this.setState({ selectedCategory });

  filterByCategory = () => {
    const { pomodoroStats, selectedCategory } = this.state;
    const categoryArray = pomodoroStats.map((category) => {
      const filtredObject = [
        category.title,
        category.date,
        category[selectedCategory],
      ];
      return filtredObject;
    });
    console.log(categoryArray);
  };

  componentDidMount() {
    this.fetchStatistics();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.pomodoroStats !== this.state.pomodoroStats ||
      prevState.selectedCategory !== this.state.selectedCategory
    )
      this.filterByCategory();
  }

  render() {
    const { pomodoroStats } = this.state;
    return (
      <Row>
        <Col xs={2}>
          <FilterDropdown selectCategory={this.selectCategory} />
        </Col>
        <Col cs={10}>
          {pomodoroStats.length > 0 && (
            <BarChart width={700} height={600} data={pomodoroStats} />
          )}
        </Col>
      </Row>
    );
  }
}

export default ChartManager;
