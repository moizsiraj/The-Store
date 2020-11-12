import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './rating';

const Product = ({ product }) => {
  return (
    <>
      <Card className='my-2 p-2 rounded'>
        <a href={`/product/${product._id}`}>
          <Card.Img src={product.image} variant='top' />
        </a>
        <Card.Body>
          <a href={`/product/${product._id}`}>
            <Card.Title as='div' className='text-center'>
              <strong>{product.name}</strong>
            </Card.Title>
          </a>

          <Card.Text as='div' className='mb-2'>
            <Rating
              rating={product.rating}
              noOfReviews={` ${product.numReviews} reviews`}
              color='#78c2ad'
            />
          </Card.Text>

          <Card.Text as='h4' className='text-center'>
            ${product.price}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
