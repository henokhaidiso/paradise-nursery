import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const itemCount = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <header className="site-header">
      <NavLink to="/" className="brand" aria-label="Paradise Nursery home">
        <span className="brand-mark">✿</span>
        <span>paradise<span className="brand-light">nursery</span></span>
      </NavLink>
      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/cart" className="cart-nav">
          <span className="cart-symbol" aria-hidden="true">🛒</span>
          <span>Cart</span>
          <span className="cart-count">{itemCount}</span>
        </NavLink>
      </nav>
    </header>
  );
}