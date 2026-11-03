
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { plantCategories } from '../data/plants';
import { addItem } from '../features/cart/CartSlice';

export default function ProductList() {
  const dispatch = useDispatch();

  // Get cart items from the Redux store
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate the total quantity of plants in the cart
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Check whether a plant has already been added
  const isAddedToCart = (plant) =>
    cartItems.some((item) => item.id === plant.id);

  // Add a plant to the Redux cart
  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <>
      {/* Navigation bar */}
      <header className="site-header navbar">
        <NavLink to="/" className="brand">
          <span className="brand-mark">✿</span>
          <span>
            paradise<span className="brand-light">nursery</span>
          </span>
        </NavLink>

        <nav className="main-nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/plants">Plants</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/cart" className="cart-nav">
            <span className="cart-symbol">🛒</span>
            <span>Cart</span>
            <span className="cart-count">{totalQuantity}</span>
          </NavLink>
        </nav>
      </header>

      {/* Product listing */}
      <main className="page-shell catalogue">
        <section className="page-intro">
          <p className="eyebrow">THE PLANT COLLECTION</p>
          <h1>Find your <em>green</em>.</h1>
          <p>
            From easy-care favorites to statement greenery,
            find the right plant for your space.
          </p>
        </section>

        {/* Display all plant categories */}
        {plantCategories.map((category) => (
          <section className="plant-category" key={category.id}>
            <div className="category-heading">
              <div>
                <h2>{category.name}</h2>
                <p>{category.description}</p>
              </div>
              <span>{category.plants.length} plants</span>
            </div>

            <div className="plant-grid">
              {category.plants.map((plant) => {
                const added = isAddedToCart(plant);

                return (
                  <article className="plant-card" key={plant.id}>
                    <div className="plant-image-wrap">
                      <img
                        src={plant.image}
                        alt={plant.name}
                        loading="lazy"
                      />
                      <span className="plant-tag">Indoor plant</span>
                    </div>

                    <div className="plant-card-body">
                      <div>
                        <h3>{plant.name}</h3>
                        <p>{plant.description}</p>
                      </div>

                      <div className="plant-card-footer">
                        <strong>${plant.price.toFixed(2)}</strong>

                        <button
                          className={`button ${
                            added ? 'button-added' : 'button-small'
                          }`}
                          type="button"
                          disabled={added}
                          onClick={() => handleAddToCart(plant)}
                        >
                          {added ? '✓ Added' : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
