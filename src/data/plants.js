export const plantCategories = [
  {
    id: 'easy-care',
    name: 'Easy-care favorites',
    description: 'Low-maintenance greenery for a fresh start.',
    plants: [
      { id: 'snake-plant', name: 'Snake Plant', price: 24.99, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee', description: 'Architectural upright leaves that thrive with little attention.' },
      { id: 'zz-plant', name: 'ZZ Plant', price: 29.99, image: 'https://images.unsplash.com/photo-1632207691143-643e2e6a6c7b', description: 'Glossy green foliage and a wonderfully forgiving nature.' },
      { id: 'pothos', name: 'Golden Pothos', price: 18.50, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b', description: 'Trailing heart-shaped leaves that brighten shelves and corners.' },
      { id: 'spider-plant', name: 'Spider Plant', price: 16.99, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333', description: 'A cheerful, adaptable plant with arching striped leaves.' },
      { id: 'peace-lily', name: 'Peace Lily', price: 27.50, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee', description: 'Elegant deep-green leaves and graceful white blooms.' },
      { id: 'jade-plant', name: 'Jade Plant', price: 21.00, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09', description: 'A compact succulent with plump, rounded leaves.' },
    ],
  },
  {
    id: 'statement-plants',
    name: 'Statement plants',
    description: 'Make a room feel alive with a bold focal point.',
    plants: [
      { id: 'monstera', name: 'Monstera Deliciosa', price: 39.99, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b', description: 'Iconic split leaves bring a lush tropical feel indoors.' },
      { id: 'fiddle-leaf', name: 'Fiddle Leaf Fig', price: 54.00, image: 'https://images.unsplash.com/photo-1597055181300-a8b4be5f4a2f', description: 'Sculptural oversized leaves make a striking statement.' },
      { id: 'rubber-plant', name: 'Rubber Plant', price: 34.50, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6', description: 'Bold, glossy leaves on a strong upright stem.' },
      { id: 'bird-paradise', name: 'Bird of Paradise', price: 64.99, image: 'https://images.unsplash.com/photo-1597055181449-1b4b8b0c9f0b', description: 'Large tropical foliage for a sunny, spacious room.' },
      { id: 'areca-palm', name: 'Areca Palm', price: 45.00, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee', description: 'Feathery fronds create a soft, resort-like atmosphere.' },
      { id: 'calathea', name: 'Calathea Orbifolia', price: 32.99, image: 'https://images.unsplash.com/photo-1597055181300-a8b4be5f4a2f', description: 'Rounded leaves with delicate silvery-green stripes.' },
    ],
  },
  {
    id: 'succulents',
    name: 'Succulents & little wonders',
    description: 'Small-space plants with personality.',
    plants: [
      { id: 'echeveria', name: 'Echeveria', price: 12.99, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09', description: 'A rosette-shaped succulent in soft, calming tones.' },
      { id: 'aloe-vera', name: 'Aloe Vera', price: 14.50, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6', description: 'A sun-loving succulent with sculptural fleshy leaves.' },
      { id: 'string-pearls', name: 'String of Pearls', price: 19.99, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e', description: 'Bead-like trailing leaves look beautiful in a hanging pot.' },
      { id: 'haworthia', name: 'Haworthia', price: 13.50, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411', description: 'A compact rosette with distinctive textured leaves.' },
      { id: 'burros-tail', name: "Burro's Tail", price: 17.99, image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a', description: 'Plump trailing stems that add texture to a sunny sill.' },
      { id: 'panda-plant', name: 'Panda Plant', price: 15.99, image: 'https://images.unsplash.com/photo-1463320726281-696a485928c7', description: 'Soft, fuzzy leaves make this succulent extra charming.' },
    ],
  },
];

export const allPlants = plantCategories.flatMap((category) =>
  category.plants.map((plant) => ({ ...plant, category: category.name }))
);