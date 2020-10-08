import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Nav variant="tabs" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link as={Link} to="/" eventKey="/">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/session" eventKey="/session">
            Set Sessions
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/stats" eventKey="/stats">
            Stats
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/hydrapp" eventKey="/hydrapp">
            Hydrapp!
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}

export default NavBar;
