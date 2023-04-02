import React, { useContext } from "react";
import "./Cart.scss";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
import { Context } from "../../utils/context";
const Cart = ({ setShowCart }) => {
  const { cartSubTotal, cartItems } = useContext(Context);
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

        {!cartItems.length && (
          <div className="empty-cart">
            <BsCartX />
            <span>No Products in the cart</span>
            <button className="return-cta">RETURN TO SHOP</button>
          </div>
        )}

        {/* Empty cart end */}

        {/* cart item start */}
        {!!cartItems.length && (
          <>
            <CartItem />
            <div className="cart-footer">
              <div className="subtotal">
                <span className="text">Subtotal:</span>
                <span className="text total">${cartSubTotal}</span>
              </div>
              <div className="button">
                <button className="checkout-cta">Checkout</button>
              </div>
            </div>
          </>
        )}

        {/* cart item end */}
      </div>
    </div>
  );
};

export default Cart;
