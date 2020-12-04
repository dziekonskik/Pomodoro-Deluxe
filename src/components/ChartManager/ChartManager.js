import React, { Component } from 'react';
import ChartWrapper from './ChartWrapper/ChartWrapper';
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
      const filtredObject = {
        title: category.title,
        date: category.date,
        selectedCategory: category[selectedCategory],
      };
      return filtredObject;
    });

    this.setState({ categoryArray });
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
    const { categoryArray } = this.state;
    return (
      <>
        <Row>
          <Col>
            <h2 className="text-center">Your Statistics</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            <FilterDropdown selectCategory={this.selectCategory} />
          </Col>
          <Col cs={10}>
            {categoryArray.length > 0 && <ChartWrapper data={categoryArray} />}
          </Col>
        </Row>
      </>
    );
  }
}

export default ChartManager;
