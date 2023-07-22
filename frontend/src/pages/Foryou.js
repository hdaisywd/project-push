import { useEffect, useReducer } from 'react';
import axios from 'axios';
import logger from 'use-reducer-logger';
import { Container, Row, Col } from 'react-bootstrap';
import Product from '../components/Product';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function Foryou() {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products/foryou');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <main>
        <Container>
          <h1>Featured Products</h1>
          <div className="products">
            {loading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>{error}</div>
            ) : (
              <Row>
                {' '}
                {/* Row로 감싸줍니다 */}
                {products.map((product) => (
                  <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                    <Product product={product}></Product>
                  </Col>
                ))}
              </Row>
            )}
          </div>
        </Container>
      </main>
    </div>
  );
}

export default Foryou;
