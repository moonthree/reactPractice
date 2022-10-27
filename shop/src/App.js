import logo from './logo.svg';
import { useState } from 'react';
import { Nav, Container, Navbar, Row, Col } from 'react-bootstrap';
import './App.css';
import bg from './img/bg.png';
import data from './data.js';

function App() {

  let [shoes] = useState(data)

  return (
    <div className="App">
      {/* navbar */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">쇼핑쇼핑</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* 대문 */}
      <div className='main-bg' style={{ backgroundImage : `url(${bg})` }}></div>

      {/* 상품 3개 */}
      <Container>
        <Row>
          {/* <Card shoes={shoes[0]} i={1}></Card>
          <Card shoes={shoes[1]} i={2}></Card>
          <Card shoes={shoes[2]} i={3}></Card> */}
          {
            shoes.map((a, i) => {
              return (
                <Card shoes={shoes[i]} i={i+1}></Card>
              )
            })
          }
        </Row>
      </Container>

      

    </div>
  );
}

function Card(props) {
  return (
    <Col>
      <img src={`https://codingapple1.github.io/shop/shoes${props.i}.jpg`} width="80%" alt="" />
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.content }</p>
    </Col>
  )
}

export default App;
