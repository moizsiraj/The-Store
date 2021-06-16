import React from 'react';

const CartScreen = ({ match }) => {
  return <div>cart{match.params.quant}</div>;
};

export default CartScreen;
