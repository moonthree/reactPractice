import logo from './logo.svg';
import { useState } from 'react';
import { Nav, Container, Navbar, Row, Col } from 'react-bootstrap';
import './App.css';
import bg from './img/bg.png';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './pages/Detail.js'

function App() {

  let [shoes] = useState(data)
  let navigate = useNavigate();

  return (
    <div className="App">

      {/* navbar */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">쇼핑쇼핑</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
            <button onClick={()=>{ navigate('/about') }}>About</button>
            <button onClick={()=>{ navigate('/event') }}>Event</button>
          </Nav>
        </Container>
      </Navbar>

      <Link to='/'>Home</Link>
      <br/>
      <Link to='/about'>About</Link>
      <br/>
      <Link to='/detail'>Detail</Link>
      <br />
      <button onClick={()=>{ navigate(1) }}>앞으로가기</button>
      <button onClick={()=>{ navigate(-1) }}>뒤로가기</button>
      <br />
      <Link to='*'>없는 페이지에요</Link>

      {/* 대문 */}
      <Routes>
        <Route path='/' element={
          <div>메인페이지임
            <div className='main-bg' style={{ backgroundImage : `url(${bg})` }}></div>
          </div>
          }>
        </Route>
        <Route path="/about" element={
            <div>
              디테일페이지임
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
          }>
          
        </Route>
        {/* <Route path="/detail" element={<Detail />}></Route> */}
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>}></Route>

        <Route path="/event" element={<EventPage/>}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
          <Route path="two" element={<p>생일기념 쿠폰받기</p>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

function EventPage(){
  let navigate = useNavigate();
  return (    
    <div>
      <h4>오늘의 이벤트</h4>
      <button onClick={()=>{ navigate('/event/one') }}>Event1</button>
      <button onClick={()=>{ navigate('/event/two') }}>Event2</button>
      <Outlet></Outlet>
    </div>
  )
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
