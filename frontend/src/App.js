import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import Home from './pages/Home';
import About from './pages/About';
import Counter from './pages/Counter';
import Products from './pages/Products';
import './logo.svg';
// import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <div
      className="d-flex flex-column site-container"
      style={{ minHeight: '100vh' }}
    >
      {/* footer를 위해 추가 */}
      <header>
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/"> {/* header에 사진 추가 */}
              <img
                src={require('./logo.svg').default}
                width="150"
                height="50"
                className="d-inline-block align-top"
                alt="push logo"
              />
            </Navbar.Brand>

          </Container>
        </Navbar>
      </header>
      <div className="App" style={{ flex: 1 }}>
        <nav>
          <Link to="/about">About</Link> | <Link to="/products">Products</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
      <footer>
        <div>All rights reserved</div>
      </footer>
    </div>
  );
}

export default App;
