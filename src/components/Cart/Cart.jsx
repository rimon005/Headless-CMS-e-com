import React from "react";
import "./Cart.scss";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
const Cart = ({ setShowCart }) => {
  return (
    <div className="cart-panel">
      <div className="opac-layout"></div>
      <div className="cart-content">
        {/* cart header start */}
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">Close</span>
          </span>
        </div>

        {/* cart header end  */}

        {/* Empty cart start */}

        {/* <div className="empty-cart">
          <BsCartX />
          <span>No Products in the cart</span>
          <button className="return-cta">RETURN TO SHOP</button>
        </div> */}

        {/* Empty cart end */}

        {/* cart item start */}
        <>
          <CartItem />
          <div className="cart-footer">
            <div className="subtotal">
              <span className="text">Subtotal:</span>
              <span className="text total">$465</span>
            </div>
            <div className="button">
              <button className="checkout-cta">Checkout</button>
            </div>
          </div>
        </>

        {/* cart item end */}
      </div>
    </div>
  );
};

export default Cart;
