import { plantCategories } from '../data/plants';
import PlantCard from '../components/PlantCard';

export default function ProductList() {
  return (
    <main className="page-shell catalogue">
      <section className="page-intro">
        <p className="eyebrow">THE PLANT COLLECTION</p>
        <h1>Find your <em>green</em>.</h1>
        <p>From easy-care favorites to statement greenery, find the right plant for your space.</p>
      </section>
      {plantCategories.map((category) => (
        <section className="plant-category" key={category.id}>
          <div className="category-heading">
            <div><h2>{category.name}</h2><p>{category.description}</p></div>
            <span>{category.plants.length} plants</span>
          </div>
          <div className="plant-grid">
            {category.plants.map((plant) => <PlantCard key={plant.id} plant={plant} />)}
          </div>
        </section>
      ))}
    </main>
  );
}