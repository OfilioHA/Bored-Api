import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Activity } from "./Activity";
import { ActivityForm } from "./ActivityForm";
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';


function App() {
  return (
    <Container id="app">
      <Row className="align-items-center justify-content-evenly">
        <Col md={5}>
          <Activity />
        </Col>
        <Col md={5}>
          <ActivityForm />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
