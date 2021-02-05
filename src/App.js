import './styles/App.css';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Oscar Wilde</h1>
        <p>
          This website was created by Dr. Kenneth Brewer's Spring 2021 Oscar Wilde class
        </p>
      </Container>
    </Jumbotron>
  );
}

export default App;
