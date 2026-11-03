import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, updateQuantity } from '../features/cart/CartSlice';

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <main className="page-shell cart-page">
      <section className="page-intro cart-intro">
        <p className="eyebrow">YOUR LITTLE GREEN CORNER</p>
        <h1>Shopping <em>cart.</em></h1>
        <p>{totalItems} {totalItems === 1 ? 'item' : 'items'} selected for your home</p>
      </section>
      {items.length === 0 ? (
        <section className="empty-cart">
          <div className="empty-icon">♧</div>
          <h2>Your cart is waiting to grow.</h2>
          <p>Explore our collection and find a plant to bring home.</p>
          <Link to="/plants" className="button">Continue shopping <span>→</span></Link>
        </section>
      ) : (
        <div className="cart-layout">
          <section className="cart-items" aria-label="Cart items">
            {items.map((item) => (
              <article className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <span className="eyebrow">{item.category}</span>
                  <h2>{item.name}</h2>
                  <p>${item.price.toFixed(2)} <span>each</span></p>
                  <div className="quantity-control">
                    <button type="button" aria-label={`Decrease ${item.name} quantity`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>−</button>
                    <span>{item.quantity}</span>
                    <button type="button" aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
                  </div>
                </div>
                <div className="cart-item-end">
                  <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                  <button className="remove-button" type="button" onClick={() => dispatch(removeItem(item.id))}>Remove</button>
                </div>
              </article>
            ))}
            <Link to="/plants" className="text-link">← Continue shopping</Link>
          </section>
          <aside className="order-summary">
            <p className="eyebrow">ORDER SUMMARY</p>
            <h2>Your total</h2>
            <div className="summary-line"><span>Items ({totalItems})</span><span>${total.toFixed(2)}</span></div>
            <div className="summary-line"><span>Shipping</span><span className="free-shipping">Free</span></div>
            <div className="summary-total"><span>Total</span><strong>${total.toFixed(2)}</strong></div>
            <button className="button checkout-button" type="button" onClick={() => window.alert('Coming Soon! Thank you for shopping at Paradise Nursery.')}>Checkout <span>→</span></button>
            <p className="secure-note">A little green joy is on its way.</p>
          </aside>
        </div>
      )}
    </main>
  );
}