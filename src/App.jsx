import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ProductList from './pages/ProductList';
import CartItem from './pages/CartItem';

export default function App() {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  return (
    <div className="app">
      {!isLanding && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="*" element={<Home />} />
      </Routes>
      {!isLanding && (
        <footer className="site-footer">
          <span>✿ paradise nursery</span>
          <span>Grow a little happiness.</span>
        </footer>
      )}
    </div>
  );
}