import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <Nav variant="tabs" defaultActiveKey="/">
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

export default NavBar;
