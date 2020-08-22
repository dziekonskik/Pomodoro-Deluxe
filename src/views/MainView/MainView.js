import React from 'react';
import QuickStartPanel from '../../components/QuickStartPanel/QuickStartPanel';
import { Container, Row } from 'react-bootstrap';
import styles from './MainView.module.scss';

class MainView extends React.Component {
  render() {
    return (
      <Container className="vh-100">
        <Row>
          <QuickStartPanel />
        </Row>
      </Container>
    );
  }
}

export default MainView;
