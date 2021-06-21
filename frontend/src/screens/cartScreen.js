import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  Button,
  ListGroup,
  Image,
  Form,
  Card,
} from 'react-bootstrap';
import Message from '../components/message';
import { addToCart } from '../actions/cartActions';

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;

  const qty = window.location.search
    ? Number(window.location.search.split('=')[1])
    : 0;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const cartItems = { cart };

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return <div></div>;
};

export default CartScreen;
