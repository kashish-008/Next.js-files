export const categories = [
  {
    slug: "cloth",
    name: "Cloth",
    description: "Trendy fashion for everyone",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400",
  },
  {
    slug: "tech",
    name: "Tech",
    description: "Latest gadgets and electronics",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400",
  },
  {
    slug: "electronic",
    name: "Electronic",
    description: "Home electronics & appliances",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=400",
  },
  {
    slug: "grocery",
    name: "Grocery",
    description: "Fresh groceries daily",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400",
  },
];

export const products = [
  // Cloth category (6 products)
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    description: "Soft, breathable cotton t-shirt",
    price: 29.99,
    category: "cloth",
    thumbnail:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500",
    ],
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    description: "Comfortable stretch denim",
    price: 59.99,
    category: "cloth",
    thumbnail:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300",
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500",
    ],
  },
  {
    id: 3,
    name: "Winter Hoodie",
    description: "Warm fleece hoodie",
    price: 79.99,
    category: "cloth",
    thumbnail:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300",
    images: ["https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500"],
  },
  {
    id: 4,
    name: "Summer Dress",
    description: "Light floral dress",
    price: 49.99,
    category: "cloth",
    thumbnail:
      "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=300",
    images: [
      "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=500",
    ],
  },
  {
    id: 5,
    name: "Sports Jacket",
    description: "Water resistant jacket",
    price: 89.99,
    category: "cloth",
    thumbnail:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500",
    ],
  },
  {
    id: 6,
    name: "Casual Shorts",
    description: "Comfort cotton shorts",
    price: 34.99,
    category: "cloth",
    thumbnail:
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=300",
    images: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500",
    ],
  },

  // Tech categor{ params } y (5 products)
  {
    id: 7,
    name: "Wireleimss Headphones",
    description: "Noise cancelling, 30hr battery",
    price: 99.99,
    category: "tech",
    thumbnail:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500",
    ],
  },
  {
    id: 8,
    name: "Smart Watch",
    description: "Fitness tracker, heart rate monitor",
    price: 199.99,
    category: "tech",
    thumbnail:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    ],
  },
  {
    id: 9,
    name: "Bluetooth Speaker",
    description: "Portable, waterproof, 20W",
    price: 79.99,
    category: "tech",
    thumbnail:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300",
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
    ],
  },
  {
    id: 10,
    name: "Laptop Stand",
    description: "Ergonomic aluminum stand",
    price: 39.99,
    category: "tech",
    thumbnail:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300",
    images: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
    ],
  },
  {
    id: 11,
    name: "Phone Case",
    description: "Shockproof, slim design",
    price: 19.99,
    category: "tech",
    thumbnail:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300",
    images: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500",
    ],
  },

  // Electronic category (4 products)
  {
    id: 12,
    name: "4K Smart TV",
    description: "55 inch, HDR, smart features",
    price: 599.99,
    category: "electronic",
    thumbnail:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300",
    images: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500",
    ],
  },
  {
    id: 13,
    name: "Air Purifier",
    description: "HEPA filter, quiet operation",
    price: 149.99,
    category: "electronic",
    thumbnail:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300",
    images: [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500",
    ],
  },
  {
    id: 14,
    name: "Microwave Oven",
    description: "900W, digital controls",
    price: 129.99,
    category: "electronic",
    thumbnail:
      "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=300",
    images: [
      "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=500",
    ],
  },
  {
    id: 15,
    name: "Vacuum Cleaner",
    description: "Cordless, lightweight",
    price: 249.99,
    category: "electronic",
    thumbnail:
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=300",
    images: ["https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500"],
  },

  // Grocery category (6 products)
  {
    id: 16,
    name: "Organic Rice",
    description: "5kg, premium quality",
    price: 15.99,
    category: "grocery",
    thumbnail:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=300",
    images: [
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500",
    ],
  },
  {
    id: 17,
    name: "Olive Oil",
    description: "Extra virgin, 1 liter",
    price: 12.99,
    category: "grocery",
    thumbnail:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300",
    images: [
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500",
    ],
  },
  {
    id: 18,
    name: "Fresh Fruits Basket",
    description: "Seasonal fruits, 2kg",
    price: 24.99,
    category: "grocery",
    thumbnail:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300",
    images: ["https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500"],
  },
  {
    id: 19,
    name: "Whole Wheat Bread",
    description: "Fresh baked, 400g",
    price: 4.99,
    category: "grocery",
    thumbnail:
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=300",
    images: ["https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=500"],
  },
  {
    id: 20,
    name: "Milk Pack",
    description: "1 liter, pasteurized",
    price: 3.99,
    category: "grocery",
    thumbnail:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300",
    images: ["https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500"],
  },
  {
    id: 21,
    name: "Spices Set",
    description: "6 essential spices",
    price: 18.99,
    category: "grocery",
    thumbnail:
      "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=300",
    images: [
      "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=500",
    ],
  },
];