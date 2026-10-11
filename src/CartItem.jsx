
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from "./CartSlice.jsx";

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="page-container">
      <header className="page-heading">
        <span className="eyebrow">YOUR SELECTION</span>
        <h1 className="page-title">Shopping Cart</h1>
        <p>{totalItems} item(s) in your cart</p>
      </header>

      {items.length === 0 ? (
        <section className="empty-cart">
          <h2>Your cart is waiting for some greenery 🌿</h2>
          <p>Explore our houseplants and find your favorites.</p>
          <Link className="primary-button" to="/plants">
            Continue Shopping
          </Link>
        </section>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {items.map(item => (
              <article className="cart-item" key={item.id}>
                <img
                  className="cart-item-image"
                  src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=300&q=80`}
                  alt={item.name}
                />

                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Unit price: ${item.price.toFixed(2)}</p>
                  <p>
                    Item total: ${(item.price * item.quantity).toFixed(2)}
                  </p>

                  <div className="quantity-controls">
                    <button
                      aria-label={`Decrease ${item.name} quantity`}
                      disabled={item.quantity <= 1}
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      aria-label={`Increase ${item.name} quantity`}
                      onClick={() => dispatch(increaseQuantity(item.id))}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="remove-button"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    🗑 Remove
                  </button>
                </div>
              </article>
            ))}
          </div>

          <aside className="cart-summary">
            <h2>Order Summary</h2>
            <p>Total plants: {totalItems}</p>
            <p className="summary-total">
              Total: ${totalAmount.toFixed(2)}
            </p>

            <button
              className="checkout-button"
              onClick={() => window.alert("Coming Soon!")}
            >
              Checkout
            </button>

            <Link className="continue-button" to="/plants">
              ← Continue Shopping
            </Link>
          </aside>
        </div>
      )}
    </div>
  );
}
