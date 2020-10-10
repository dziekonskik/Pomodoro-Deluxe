import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: '',
    };
  }

  setActiveTab = (selectedTab) => {
    this.setState({ activeTab: selectedTab });
  };

  render() {
    return (
      <Nav
        onSelect={(eventKey) => this.setActiveTab(eventKey)}
        variant="tabs"
        defaultActiveKey="/"
      >
        <Nav.Item>
          <Nav.Link eventKey="/" as={Link} to="/">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/session" as={Link} to="/session">
            Set Sessions
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/stats" as={Link} to="/stats">
            Stats
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/hydrapp" as={Link} to="/hydrapp">
            Hydrapp!
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}

export default NavBar;
