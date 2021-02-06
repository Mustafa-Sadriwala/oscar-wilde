import './styles/App.css';
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="outer-border">
      <div className="inner-border">
        <Container>
          <h1>Oscar Wilde</h1>
          <p>
            This website was created by Dr. Kenneth Brewer's Spring 2021 Oscar Wilde class
          </p>
        </Container>
      </div>
    </div>
  );
}

export default App;
