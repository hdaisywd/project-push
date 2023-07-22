import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Rating from './Rating';

function Product(props) {
  const { product } = props;
  return (
    <Card key={product.slug}>
      <Link to={`/products/foryou${product.slug}`}>
        <img
          src={product.image}
          calssName="card-img-top"
          alt={product.name}
          style={{ width: '100%', height: 'auto' }} // 박스 안에 이미지 맞추기!
        />
      </Link>
      <Card.Body>
        <Link to={`/products/foryou${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>${product.price}</Card.Text>
        <Button>Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
