import './App.css';
import Board from './components/Board/Board';
import Nav from './components/Nav/Nav';
import styled from 'styled-components';

let Container = styled.div`
  width: 1200px;
`

function App() {
  return (
    <div className="App">
      <Container>
        <Nav/>
        <Board/>
      </Container>
    </div>
  );
}

export default App;
