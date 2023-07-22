import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import Home from './pages/Home';
import About from './pages/About';
import Counter from './pages/Counter';
import Foryou from './pages/Foryou';
import './logo.svg';

function App() {
  return (
    <div
      className="d-flex flex-column site-container"
      style={{ minHeight: '100vh' }}
    >
      {/* footer를 위해 추가 */}
      <header>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="/">
              {' '}
              {/* header에 사진 추가 */}
              <img
                src={require('./logo.svg').default}
                width="150"
                height="50"
                className="d-inline-block align-top"
                alt="push logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/products/foryou">FOR YOU</Nav.Link>
                  <Nav.Link href="/products/best">BEST</Nav.Link>
                  <Nav.Link href="/products/cart">CART</Nav.Link>
                  <Nav.Link href="/products/mypage">MY PAGE</Nav.Link>
                  {/* Dropdown 쓰고 싶으면 밑에 꺼 주석 없애기 */}
                  {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      </header>
      <div className="App" style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/products/foryou" element={<Foryou />} />
        </Routes>
      </div>
      <footer>
        <div>All rights reserved</div>
      </footer>
    </div>
  );
}

export default App;
