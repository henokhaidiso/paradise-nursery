
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import ProductList from './pages/ProductList';
import CartItem from './pages/CartItem';

export default function App() {
  const location = useLocation();

  const isLanding = location.pathname === '/';
  const isProductList = location.pathname === '/plants';

  return (
    <div className="app">

      {/* Navbar for About Us and Cart pages.
          ProductList contains its own navbar. */}
      {!isLanding && !isProductList && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <main className="landing">
              <div className="landing-overlay" />

              <section className="landing-content">
                <p className="eyebrow landing-eyebrow">
                  GROW A LITTLE HAPPINESS
                </p>

                <h1>
                  Welcome to <em>Paradise Nursery</em>
                </h1>

                <p className="landing-copy">
                  Discover beautiful houseplants and bring
                  the beauty of nature into your home.
                </p>

                <Link className="button button-cream" to="/plants">
                  Get Started <span>→</span>
                </Link>

                <div className="landing-note">
                  <span>✳</span> A greener home starts here
                </div>
              </section>

              <div className="landing-bottom">
                <span>PLANTS THAT MAKE A DIFFERENCE</span>
                <span>EST. WITH LOVE · 2024</span>
              </div>
            </main>
          }
        />

        <Route path="/about" element={<AboutUs />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
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
