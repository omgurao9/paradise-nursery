
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice.jsx";

const categories = [
  {
    name: "Air Purifying Plants",
    plants: [
      {
        id: 1, name: "Snake Plant", price: 18,
        image: "photo-1501004318641-b39e6451bec6",
        description: "A resilient, low-maintenance plant for fresh indoor spaces."
      },
      {
        id: 2, name: "Peace Lily", price: 22,
        image: "photo-1497250681960-ef046c08a56e",
        description: "Elegant foliage with beautiful white blooms."
      },
      {
        id: 3, name: "Spider Plant", price: 15,
        image: "photo-1459156212016-c812468e2115",
        description: "An easy-growing favorite with arching green leaves."
      },
      {
        id: 4, name: "Areca Palm", price: 28,
        image: "photo-1485955900006-10f4d324d411",
        description: "A tropical palm that adds height and greenery."
      },
      {
        id: 5, name: "Rubber Plant", price: 25,
        image: "photo-1509423350716-97f9360b4e09",
        description: "Glossy, bold leaves make a statement in any room."
      },
      {
        id: 6, name: "Boston Fern", price: 20,
        image: "photo-1509423350716-97f9360b4e09",
        description: "Soft, feathery fronds for a lush indoor look."
      }
    ]
  },
  {
    name: "Low-Maintenance Plants",
    plants: [
      {
        id: 7, name: "Golden Pothos", price: 14,
        image: "photo-1494438639946-1ebd1d20bf85",
        description: "A trailing plant that thrives in a variety of spaces."
      },
      {
        id: 8, name: "ZZ Plant", price: 24,
        image: "photo-1501004318641-b39e6451bec6",
        description: "A hardy plant that tolerates low light and dry soil."
      },
      {
        id: 9, name: "Jade Plant", price: 16,
        image: "photo-1509423350716-97f9360b4e09",
        description: "A charming succulent with thick, rounded leaves."
      },
      {
        id: 10, name: "Aloe Vera", price: 12,
        image: "photo-1459411552884-841db9b3cc2a",
        description: "A sun-loving succulent with sculptural leaves."
      },
      {
        id: 11, name: "Chinese Evergreen", price: 21,
        image: "photo-1497250681960-ef046c08a56e",
        description: "Colorful foliage that brightens shaded corners."
      },
      {
        id: 12, name: "Cast Iron Plant", price: 23,
        image: "photo-1485955900006-10f4d324d411",
        description: "A dependable leafy plant for busy plant owners."
      }
    ]
  },
  {
    name: "Decorative Foliage Plants",
    plants: [
      {
        id: 13, name: "Monstera Deliciosa", price: 32,
        image: "photo-1614594975525-e45190c55d0b",
        description: "Iconic split leaves bring tropical style indoors."
      },
      {
        id: 14, name: "Calathea", price: 27,
        image: "photo-1518531933037-91b2f5f229cc",
        description: "Patterned leaves add texture and visual interest."
      },
      {
        id: 15, name: "Bird of Paradise", price: 45,
        image: "photo-1494438639946-1ebd1d20bf85",
        description: "Large tropical leaves create a bold focal point."
      },
      {
        id: 16, name: "Philodendron", price: 19,
        image: "photo-1459156212016-c812468e2115",
        description: "Versatile green foliage for shelves and living rooms."
      },
      {
        id: 17, name: "Fiddle Leaf Fig", price: 38,
        image: "photo-1509423350716-97f9360b4e09",
        description: "Large violin-shaped leaves for a modern interior."
      },
      {
        id: 18, name: "Parlor Palm", price: 26,
        image: "photo-1485955900006-10f4d324d411",
        description: "A compact palm that suits desks and living spaces."
      }
    ]
  }
];

function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const isAdded = items.some(item => item.id === plant.id);

  const imageUrl =
    `https://images.unsplash.com/${plant.image}?auto=format&fit=crop&w=600&q=80`;

  return (
    <article className="product-card">
      <img
        className="product-image"
        src={imageUrl}
        alt={plant.name}
        loading="lazy"
      />
      <div className="product-info">
        <h3>{plant.name}</h3>
        <p>{plant.description}</p>
        <div className="product-price">${plant.price.toFixed(2)}</div>
        <button
          className="add-button"
          disabled={isAdded}
          onClick={() => dispatch(addToCart(plant))}
        >
          {isAdded ? "Added to Cart ✓" : "Add to Cart"}
        </button>
      </div>
    </article>
  );
}

export default function ProductList() {
  return (
    <div className="page-container">
      <header className="page-heading">
        <span className="eyebrow">FIND YOUR GREEN</span>
        <h1 className="page-title">Our Houseplant Collection</h1>
        <p>Discover the perfect plant for every corner of your home.</p>
      </header>

      {categories.map(category => (
        <section className="category-section" key={category.name}>
          <h2 className="category-title">{category.name}</h2>
          <div className="product-grid">
            {category.plants.map(plant => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
