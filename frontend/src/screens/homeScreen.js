import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/product';
import { useDispatch, useSelector } from 'react-redux';
import { listProduct } from '../actions/productActions';
import Loader from '../components/loader';
import Message from '../components/message';
const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  console.log(productList);

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);
  return (
    <>
      <h1 className='text-center'>Check Out Our Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};
export default HomeScreen;
