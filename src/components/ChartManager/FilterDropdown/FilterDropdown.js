import React from 'react';
import { Dropdown } from 'react-bootstrap';

const FilterDropdown = ({ selectCategory }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        Please Select
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          onSelect={() => selectCategory('elapsedWorkTimeInSeconds')}
        >
          Work Done
        </Dropdown.Item>
        <Dropdown.Item
          onSelect={() => selectCategory('elapsedRestTimeInSeconds')}
        >
          Rested
        </Dropdown.Item>
        <Dropdown.Item onSelect={() => selectCategory('pausesCount')}>
          Total Pauses
        </Dropdown.Item>
        <Dropdown.Item onSelect={() => selectCategory('sessionsCount')}>
          Total Sessions
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default FilterDropdown;
