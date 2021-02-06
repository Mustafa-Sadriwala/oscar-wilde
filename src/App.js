import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Page from './components/Page';
import { Col, Container, Row } from 'react-bootstrap';


function App() {
  return (
    <Container bsPrefix="fluid-container">
      <Row md="1" lg="2">
        <Col>
          <Page title="Preface: Oscar Wilde">
            <p>
              This website was created by Dr. Kenneth Brewer's Spring 2021 Oscar Wilde class
            </p>
          </Page>
        </Col>
        <Col>
          <Page title="Chapter 1: Biographical Websites">

          </Page>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
