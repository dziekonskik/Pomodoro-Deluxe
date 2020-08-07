import React from 'react';
import QuickStartPanel from '../../components/QuickStartPanel/QuickStartPanel';
import { Container, Row, Jumbotron, Button, Card } from 'react-bootstrap';

class MainView extends React.Component {
  render() {
    return (
      <Container className="h-100">
        <Row>
          <h1 className="mx-auto text-danger font-weight-bold">
            Welcome to Pomodoro-Deluxe!
          </h1>
        </Row>
        <Row>
          <QuickStartPanel />
        </Row>
        <Row>
          <Jumbotron>
            <Card style={{ height: '8rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Jumbotron>
        </Row>
      </Container>
    );
  }
}

export default MainView;
