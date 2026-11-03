import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../features/cart/CartSlice';

export default function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const isAdded = useSelector((state) =>
    state.cart.items.some((item) => item.id === plant.id)
  );

  return (
    <article className="plant-card">
      <div className="plant-image-wrap">
        <img src={plant.image} alt={plant.name} loading="lazy" />
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
            className={`button ${isAdded ? 'button-added' : 'button-small'}`}
            type="button"
            disabled={isAdded}
            onClick={() => dispatch(addItem(plant))}
          >
            {isAdded ? '✓ Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </article>
  );
}