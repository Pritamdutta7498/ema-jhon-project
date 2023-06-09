import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";

const Cart = ({cart, handleClearCart, children}) => {

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
      // long----------
      // if(product.quantity === 0){
      //   product.quantity = 1;
      // }
      // shortcut------------
      // product.quantity = product.quantity || 1;
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity =quantity + product.quantity;

    }
    const totalTax = totalPrice*7/100;
    const grandTotal = totalPrice + totalShipping + totalTax;
    
  return (
    <div>
      
      <div className="cart-container">
        <h2>Order Summary</h2>
        <p>Selected Item: {quantity}</p>
        <p>Total Price: ${totalPrice}</p>
        <p>Total Shipping: ${totalShipping}</p>
        <p>Tax: ${totalTax.toFixed(2)}</p>
        <h4>Grand Total: <span className="grand-total">${grandTotal.toFixed(2)}</span> </h4>
        <button onClick={handleClearCart} className="btn-clear-cart">
          <span>Clear Cart</span>
        <FontAwesomeIcon className='' icon={faTrashAlt} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Cart;
