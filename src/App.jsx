
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import AboutUs from "./AboutUs.jsx";
import ProductList from "./ProductList.jsx";
import CartItem from "./CartItem.jsx";

function Navbar() {
  const items = useSelector(state => state.cart.items);
  const cartCount = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <Link className="brand" to="/">🌿 Paradise Nursery</Link>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink to="/cart" className="cart-link">
          🛒 Cart <span className="cart-count">{cartCount}</span>
        </NavLink>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <>
      <header className="hero">
        <div className="hero-content">
          <span className="eyebrow">GROW SOMETHING BEAUTIFUL</span>
          <h1>Paradise Nursery</h1>
          <p>
            Bring home the beauty of nature. Discover plants
            that transform your space into a green paradise.
          </p>
          <Link className="primary-button" to="/plants">
            Get Started →
          </Link>
        </div>
      </header>
      <AboutUs />
    </>
  );
}

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>© 2026 Paradise Nursery. Grow happiness, naturally. 🌱</p>
      </footer>
    </div>
  );
}
