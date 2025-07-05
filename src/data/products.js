// Product data structure mapping to your assets
export const products = [
  // Women's Products (p_img1.png to p_img20.png)
  { id: 1, name: "Floral Off-Shoulder Dress", price: 2599, originalPrice: 3299, discount: 21, category: "Women", type: "Dress", brand: "Zara", size: ["S", "M", "L", "XL"], color: "Pink", image: "/assets/p_img1.png", rating: 4.5, reviews: 128 },
  { id: 2, name: "Designer Maxi Dress", price: 899, originalPrice: 1299, discount: 31, category: "Women", type: "Top", brand: "H&M", size: ["S", "M", "L"], color: "White", image: "/assets/p_img2.png", rating: 4.2, reviews: 95 },
  { id: 3, name: "Designer Jacket", price: 1899, originalPrice: 2599, discount: 27, category: "Women", type: "Jumpsuit", brand: "Zara", size: ["S", "M", "L", "XL"], color: "Black", image: "/assets/p_img3.png", rating: 4.7, reviews: 203 },
  { id: 4, name: "Printed Leggings", price: 1599, originalPrice: 2199, discount: 27, category: "Women", type: "Dress", brand: "Zara", size: ["S", "M", "L"], color: "Floral", image: "/assets/p_img4.png", rating: 4.3, reviews: 156 },
  { id: 5, name: "Casual T-shirt", price: 1299, originalPrice: 1899, discount: 32, category: "Women", type: "Jacket", brand: "puma", size: ["S", "M", "L", "XL"], color: "Blue", image: "/assets/p_img5.png", rating: 4.6, reviews: 89 },
  { id: 6, name: "Pink Puffer Jacket", price: 1099, originalPrice: 1499, discount: 27, category: "Women", type: "Blouse", brand: "H&M", size: ["S", "M", "L"], color: "Pink", image: "/assets/p_img6.png", rating: 4.4, reviews: 112 },
  { id: 7, name: "Light Blue Top", price: 2299, originalPrice: 2999, discount: 23, category: "Women", type: "Blazer", brand: "Zara", size: ["S", "M", "L", "XL"], color: "Navy", image: "/assets/p_img7.png", rating: 4.5, reviews: 78 },
  { id: 8, name: "up and bottom fit", price: 1199, originalPrice: 1599, discount: 25, category: "Women", type: "Skirt", brand: "Nike", size: ["S", "M", "L"], color: "Multi", image: "/assets/p_img8.png", rating: 4.1, reviews: 134 },
  { id: 9, name: "Maroon Zip-Up Hoodie", price: 1599, originalPrice: 2199, discount: 27, category: "Women", type: "Sweater", brand: "H&M", size: ["S", "M", "L", "XL"], color: "Beige", image: "/assets/p_img9.png", rating: 4.6, reviews: 167 },
  { id: 10, name: "Grey T-Shirt", price: 999, originalPrice: 1399, discount: 29, category: "Women", type: "Skirt", brand: "Zara", size: ["S", "M", "L"], color: "Black", image: "/assets/p_img10.png", rating: 4.3, reviews: 98 },
  { id: 11, name: "Light Blue Denim Jacket", price: 799, originalPrice: 1199, discount: 33, category: "Women", type: "Camisole", brand: "H&M", size: ["S", "M", "L"], color: "White", image: "/assets/p_img11.png", rating: 4.2, reviews: 76 },
  { id: 12, name: "Beige Two-Piece Outfit", price: 1799, originalPrice: 2399, discount: 25, category: "Women", type: "Dress", brand: "Zara", size: ["S", "M", "L", "XL"], color: "Red", image: "/assets/p_img12.png", rating: 4.7, reviews: 189 },
  { id: 13, name: "Lycra Black Knee-Length Bodycon Dress", price: 1399, originalPrice: 1899, discount: 26, category: "Women", type: "Cardigan", brand: "Zara", size: ["S", "M", "L", "XL"], color: "Gray", image: "/assets/p_img13.png", rating: 4.4, reviews: 123 },
  { id: 14, name: "Cotton sleevless one piece dress ", price: 1099, originalPrice: 1499, discount: 27, category: "Women", type: "Pants", brand: "H&M", size: ["S", "M", "L", "XL"], color: "Black", image: "/assets/p_img14.png", rating: 4.1, reviews: 145 },
  { id: 15, name: "Red Traditional Lehenga", price: 699, originalPrice: 999, discount: 30, category: "Women", type: "Top", brand: "Zara", size: ["S", "M", "L"], color: "Pink", image: "/assets/p_img15.png", rating: 4.0, reviews: 87 },
  { id: 16, name: "Floral Midi Dress", price: 1699, originalPrice: 2299, discount: 26, category: "Women", type: "Dress", brand: "H&M", size: ["S", "M", "L", "XL"], color: "Blue", image: "/assets/p_img16.png", rating: 4.5, reviews: 201 },
  { id: 17, name: "Tie and Dye A-Line Midi Dress", price: 1199, originalPrice: 1599, discount: 25, category: "Women", type: "Top", brand: "Zara", size: ["S", "M", "L"], color: "Black", image: "/assets/p_img17.png", rating: 4.3, reviews: 109 },
  { id: 18, name: "Vintage floor length dress", price: 2299, originalPrice: 4799, discount: 28, category: "Women", type: "Skirt", brand: "Zara", size: ["S", "M", "L"], color: "Navy", image: "/assets/p_img18.png", rating: 4.4, reviews: 156 },
  { id: 19, name: "Pink Gown", price: 899, originalPrice: 1299, discount: 31, category: "Women", type: "Top", brand: "H&M", size: ["S", "M", "L"], color: "White", image: "/assets/p_img19.png", rating: 4.2, reviews: 94 },
  { id: 20, name: "Printed Maxi pant", price: 999, originalPrice: 1999, discount: 25, category: "Women", type: "Coat", brand: "Zara", size: ["S", "M", "L", "XL"], color: "Camel", image: "/assets/p_img20.png", rating: 4.8, reviews: 234 },

  // Men's Products (p_img21.png to p_img35.png)
  { id: 21, name: "Pink Polo Shirt", price: 1299, originalPrice: 1799, discount: 28, category: "Men", type: "Shirt", brand: "Zudio", size: ["S", "M", "L", "XL", "XXL"], color: "White", image: "/assets/p_img21.png", rating: 4.5, reviews: 187 },
  { id: 22, name: "Black T-Shirt", price: 1899, originalPrice: 2599, discount: 27, category: "Men", type: "Jeans", brand: "Puma", size: ["30", "32", "34", "36", "38"], color: "Blue", image: "/assets/p_img22.png", rating: 4.6, reviews: 298 },
  { id: 23, name: "Maroon & Cream T-Shirt", price: 899, originalPrice: 1299, discount: 31, category: "Men", type: "T-Shirt", brand: "Ralph Lauren", size: ["S", "M", "L", "XL"], color: "Navy", image: "/assets/p_img23.png", rating: 4.4, reviews: 156 },
  { id: 24, name: "Navy Blue Sports T-Shirt", price: 1599, originalPrice: 2199, discount: 27, category: "Men", type: "Chinos", brand: "H&M", size: ["30", "32", "34", "36"], color: "Khaki", image: "/assets/p_img24.png", rating: 4.3, reviews: 134 },
  { id: 25, name: "Short-Sleeve Jacket", price: 4999, originalPrice: 6999, discount: 29, category: "Men", type: "Jacket", brand: "Zara", size: ["S", "M", "L", "XL"], color: "Black", image: "/assets/p_img25.png", rating: 4.7, reviews: 89 },
  { id: 26, name: "Grey Bomber Jacket", price: 799, originalPrice: 1199, discount: 33, category: "Men", type: "T-Shirt", brand: "H&M", size: ["S", "M", "L", "XL"], color: "Gray", image: "/assets/p_img26.png", rating: 4.2, reviews: 123 },
  { id: 27, name: "Denim Jacket", price: 2999, originalPrice: 3999, discount: 25, category: "Men", type: "Blazer", brand: "Raymond", size: ["S", "M", "L", "XL", "XXL"], color: "Navy", image: "/assets/p_img27.png", rating: 4.8, reviews: 76 },
  { id: 28, name: "Yellow Puffer Jacket", price: 1199, originalPrice: 1699, discount: 29, category: "Men", type: "Shorts", brand: "H&M", size: ["S", "M", "L", "XL"], color: "Olive", image: "/assets/p_img28.png", rating: 4.1, reviews: 167 },
  { id: 29, name: "Printed White Button-Up Shirt", price: 1799, originalPrice: 2499, discount: 28, category: "Men", type: "Hoodie", brand: "Nike", size: ["S", "M", "L", "XL"], color: "Black", image: "/assets/p_img29.png", rating: 4.6, reviews: 234 },
  { id: 30, name: "Formal Plain Burgundy Shirt ", price: 1499, originalPrice: 1999, discount: 25, category: "Men", type: "Shirt", brand: "zudio", size: ["S", "M", "L", "XL", "XXL"], color: "Light Blue", image: "/assets/p_img30.png", rating: 4.5, reviews: 145 },
  { id: 31, name: "White Short-Sleeve Shirt", price: 1299, originalPrice: 1799, discount: 28, category: "Men", type: "Track Pants", brand: "Puma", size: ["S", "M", "L", "XL"], color: "Black", image: "/assets/p_img31.png", rating: 4.4, reviews: 198 },
  { id: 32, name: "Sweatshirt", price: 1099, originalPrice: 1599, discount: 31, category: "Men", type: "Shirt", brand: "Mango", size: ["S", "M", "L", "XL"], color: "Checkered", image: "/assets/p_img32.png", rating: 4.3, reviews: 112 },
  { id: 33, name: "Grey Cargo Joggers", price: 1599, originalPrice: 2199, discount: 27, category: "Men", type: "Sweatshirt", brand: "zudio", size: ["S", "M", "L", "XL"], color: "Gray", image: "/assets/p_img33.png", rating: 4.5, reviews: 178 },
  { id: 34, name: "Cool Wedding Outfit ", price: 1799, originalPrice: 2399, discount: 25, category: "Men", type: "Trousers", brand: "zudio", size: ["30", "32", "34", "36", "38"], color: "Black", image: "/assets/p_img34.png", rating: 4.6, reviews: 156 },
  { id: 35, name: "Dark blue denim Jacket", price: 2299, originalPrice: 3199, discount: 28, category: "Men", type: "Jacket", brand: "H&M", size: ["S", "M", "L", "XL"], color: "Olive", image: "/assets/p_img35.png", rating: 4.4, reviews: 98 },

  // Kids Products (p_img36.png to p_img55.png)
  { id: 36, name: "Floral Girl's Dress", price: 599, originalPrice: 899, discount: 33, category: "Kids", type: "T-Shirt", brand: "H&M Kids", size: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"], color: "Yellow", image: "/assets/p_img36.png", rating: 4.7, reviews: 89 },
  { id: 37, name: "Pink Top and Skirt", price: 1199, originalPrice: 1699, discount: 29, category: "Kids", type: "Overalls", brand: "Gap Kids", size: ["2-3Y", "4-5Y", "6-7Y"], color: "Blue", image: "/assets/p_img37.png", rating: 4.5, reviews: 67 },
  { id: 38, name: "Blue Boy's Shirt", price: 899, originalPrice: 1299, discount: 31, category: "Kids", type: "Dress", brand: "Zara Kids", size: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"], color: "Pink", image: "/assets/p_img38.png", rating: 4.8, reviews: 134 },
  { id: 39, name: "Navy blue T-shirt", price: 1099, originalPrice: 1599, discount: 31, category: "Kids", type: "Hoodie", brand: "Marvel", size: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"], color: "Red", image: "/assets/p_img39.png", rating: 4.6, reviews: 198 },
  { id: 40, name: "Pink Tshirt For Girl", price: 499, originalPrice: 799, discount: 38, category: "Kids", type: "Shorts", brand: "H&M Kids", size: ["2-3Y", "4-5Y", "6-7Y"], color: "Khaki", image: "/assets/p_img40.png", rating: 4.3, reviews: 76 },
  { id: 41, name: "Striped Boy's Shirt", price: 799, originalPrice: 1199, discount: 33, category: "Kids", type: "Frock", brand: "Mothercare", size: ["2-3Y", "4-5Y", "6-7Y"], color: "Floral", image: "/assets/p_img41.png", rating: 4.7, reviews: 112 },
  { id: 42, name: "White Boy's T-Shirt", price: 699, originalPrice: 999, discount: 30, category: "Kids", type: "Polo", brand: "Ralph Lauren Kids", size: ["4-5Y", "6-7Y", "8-9Y"], color: "Striped", image: "/assets/p_img42.png", rating: 4.4, reviews: 89 },
  { id: 43, name: "Blue Jeans", price: 799, originalPrice: 1099, discount: 27, category: "Kids", type: "Pajama", brand: "Carter's", size: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"], color: "Blue", image: "/assets/p_img43.png", rating: 4.5, reviews: 156 },
  { id: 44, name: "Beige Girl's Outfit", price: 1299, originalPrice: 1799, discount: 28, category: "Kids", type: "Jacket", brand: "Levi's Kids", size: ["4-5Y", "6-7Y", "8-9Y"], color: "Blue", image: "/assets/p_img44.png", rating: 4.6, reviews: 78 },
  { id: 45, name: "T shirts for Boys ", price: 899, originalPrice: 1299, discount: 31, category: "Kids", type: "Skirt", brand: "Zara Kids", size: ["2-3Y", "4-5Y", "6-7Y"], color: "Pink", image: "/assets/p_img45.png", rating: 4.8, reviews: 123 },
  { id: 46, name: "Red T-shirt And Shorts", price: 599, originalPrice: 899, discount: 33, category: "Kids", type: "T-Shirt", brand: "Disney", size: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"], color: "White", image: "/assets/p_img46.png", rating: 4.5, reviews: 167 },
  { id: 47, name: "casual Pant", price: 999, originalPrice: 1399, discount: 29, category: "Kids", type: "Pants", brand: "Gap Kids", size: ["4-5Y", "6-7Y", "8-9Y"], color: "Olive", image: "/assets/p_img47.png", rating: 4.3, reviews: 98 },
  { id: 48, name: "Light blue top-skirt combo Dress", price: 1499, originalPrice: 2199, discount: 32, category: "Kids", type: "Dress", brand: "H&M Kids", size: ["4-5Y", "6-7Y", "8-9Y"], color: "Gold", image: "/assets/p_img48.png", rating: 4.7, reviews: 89 },
  { id: 49, name: "Black T-shirt", price: 899, originalPrice: 1299, discount: 31, category: "Kids", type: "Sweatshirt", brand: "Adidas Kids", size: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"], color: "Gray", image: "/assets/p_img49.png", rating: 4.4, reviews: 145 },
  { id: 50, name: "Green plazzo", price: 699, originalPrice: 999, discount: 30, category: "Kids", type: "Romper", brand: "Carter's", size: ["2-3Y", "4-5Y"], color: "Multi", image: "/assets/p_img50.png", rating: 4.6, reviews: 112 },
  { id: 51, name: "Newly-launched Kids-wear Dress", price: 499, originalPrice: 799, discount: 38, category: "Kids", type: "Leggings", brand: "H&M Kids", size: ["2-3Y", "4-5Y", "6-7Y"], color: "Black", image: "/assets/p_img51.png", rating: 4.2, reviews: 134 },
  { id: 52, name: "Girls Floral Printed Pure Cotton Kurta leggings", price: 799, originalPrice: 1199, discount: 33, category: "Kids", type: "Shirt", brand: "Zara Kids", size: ["4-5Y", "6-7Y", "8-9Y"], color: "Checkered", image: "/assets/p_img52.png", rating: 4.5, reviews: 76 },
  { id: 53, name: "Twirl & Shine Black Dress", price: 1199, originalPrice: 1699, discount: 29, category: "Kids", type: "Jumpsuit", brand: "Gap Kids", size: ["4-5Y", "6-7Y", "8-9Y"], color: "Navy", image: "/assets/p_img53.png", rating: 4.7, reviews: 156 },
  { id: 54, name: "Urban Explorer Olive Set ", price: 1299, originalPrice: 1899, discount: 32, category: "Kids", type: "Jacket", brand: "Nike Kids", size: ["6-7Y", "8-9Y", "10-11Y"], color: "Blue", image: "/assets/p_img54.png", rating: 4.6, reviews: 98 },
  { id: 55, name: "Mint Fairy Layered Dress ", price: 1999, originalPrice: 2799, discount: 29, category: "Kids", type: "Suit", brand: "H&M Kids", size: ["6-7Y", "8-9Y", "10-11Y"], color: "Navy", image: "/assets/p_img55.png", rating: 4.8, reviews: 67 },

  // Beauty Products (p_img56.png to p_img70.png)
  { id: 56, name: "Essential Beauty Combo Kit", price: 2599, originalPrice: 5899, discount: 33, category: "Beauty", brand: "Maybelline", size: ["One Size"], image: "/assets/p_img56.png", rating: 4.6, reviews: 234 },
  { id: 57, name: "Maybelline Color Sensational Lipstick", price: 1299, originalPrice: 1799, discount: 28, category: "Beauty", brand: "Maybelline Color Sensational", size: ["One Size"], image: "/assets/p_img57.png", rating: 4.5, reviews: 198 },
  { id: 58, name: "MAC Classic Matte Lipstick", price: 1999, originalPrice: 2799, discount: 29, category: "Beauty",  brand: "Urban Decay", size: ["One Size"], color: "Multi", image: "/assets/p_img58.png", rating: 4.8, reviews: 156 },
  { id: 59, name: "Lakmé Radiance Compact Powder", price: 899, originalPrice: 1299, discount: 31, category: "Beauty",  brand: "Lakmé", size: ["50ml"], color: "White", image: "/assets/p_img59.png", rating: 4.7, reviews: 289 },
  { id: 60, name: "Maybelline Fit Me Foundation Tube", price: 2499, originalPrice: 3499, discount: 29, category: "Beauty", brand: "Maybelline Fit Me", size: ["50ml"], color: "Clear", image: "/assets/p_img60.png", rating: 4.9, reviews: 167 },
  { id: 61, name: "Velvet Matte Lip Crayon – Nude Peach", price: 799, originalPrice: 1199, discount: 33, category: "Beauty", brand: "Maybelline", size: ["One Size"], color: "Black", image: "/assets/p_img61.png", rating: 4.4, reviews: 213 },
  { id: 62, name: "Minimalist Niacinamide 10% Serum", price: 1599, originalPrice: 2199, discount: 27, category: "Beauty", brand: "Minimalist", size: ["30ml"], color: "Clear", image: "/assets/p_img62.png", rating: 4.8, reviews: 145 },
  { id: 63, name: "Glow Elixir Facial Oil Set", price: 699, originalPrice: 999, discount: 30, category: "Beauty",  brand: "St. Botanica ", size: ["One Size"], color: "Pink", image: "/assets/p_img63.png", rating: 4.6, reviews: 178 },
  { id: 64, name: "Natural Radiance Skincare Bundle", price: 599, originalPrice: 899, discount: 33, category: "Beauty",  brand: "Mamaearth", size: ["50ml"], color: "White", image: "/assets/p_img64.png", rating: 4.5, reviews: 267 },
  { id: 65, name: " Blush & Bloom Korean Skincare Kit", price: 4199, originalPrice: 7999, discount: 38, category: "Beauty", brand: "The Face Shop ", size: ["One Size"], color: "Clear", image: "/assets/p_img65.png", rating: 4.3, reviews: 134 },
  { id: 66, name: "Ultimate Makeup 10-in-1 Combo Box", price: 3899, originalPrice: 8299, discount: 31, category: "Beauty", brand: "Miss Rose", size: ["One Size"], color: "Light", image: "/assets/p_img66.png", rating: 4.7, reviews: 189 },
  { id: 67, name: "Luxe Liquid Lipstick", price: 1199, originalPrice: 1699, discount: 29, category: "Beauty", size: ["One Size"], color: "Bronze", image: "/assets/p_img67.png", rating: 4.5, reviews: 112 },
  { id: 68, name: " Long-Wear Comfort Matte Lipstick Set", price: 799, originalPrice: 1199, discount: 33, category: "Beauty", brand: "	L'Oréal Paris", size: ["One Size"], color: "Green", image: "/assets/p_img68.png", rating: 4.6, reviews: 156 },
  { id: 69, name: "Maybelline Fit Me Liquid Foundation – Full Coverage", price: 2199, originalPrice: 4999, discount: 40, category: "Beauty", brand: "Maybelline Fit Me", size: ["One Size"], color: "Red", image: "/assets/p_img69.png", rating: 4.4, reviews: 98 },
  { id: 70, name: "SKIN SILK Glow Serum Foundation", price: 1099, originalPrice: 1599, discount: 31, category: "Beauty",  brand: "L'Oréal Paris", size: ["120ml"], color: "Clear", image: "/assets/p_img70.png", rating: 4.7, reviews: 223 }
];

export const categories = [
  { id: 1, name: "Women", image: "/assets/women-category.jpg", count: 20 },
  { id: 2, name: "Men", image: "/assets/men-category.jpg", count: 15 },
  { id: 3, name: "Kids", image: "/assets/kids-category.jpg", count: 20 },
  { id: 4, name: "Beauty", image: "/assets/beauty-category.jpg", count: 15 }
];

export const brands = [
  "Zara", "H&M", "Forever 21", "Levi's", "Mango", "Free People", "Victoria's Secret", "Uniqlo", "Global Desi",
  "Arrow", "Ralph Lauren", "Gap", "Raymond", "Roadster", "Nike", "Van Heusen", "Adidas", "Puma", "Allen Solly",
  "Marvel", "Mothercare", "Carter's", "Disney", "Maybelline", "L'Oréal", "Urban Decay", "Cetaphil", "Chanel",
  "MAC", "The Ordinary", "Neutrogena", "Fenty Beauty", "Tarte", "Benefit", "Origins", "Essie"
];

export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const searchProducts = (query) => {
  return products.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.brand.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase())
  );
};

export const filterProducts = (products, filters) => {
  let filtered = [...products];

  if (filters.priceRange) {
    filtered = filtered.filter(product => 
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    );
  }

  if (filters.brands && filters.brands.length > 0) {
    filtered = filtered.filter(product => filters.brands.includes(product.brand));
  }

  if (filters.sizes && filters.sizes.length > 0) {
    filtered = filtered.filter(product => 
      product.size.some(size => filters.sizes.includes(size))
    );
  }

  if (filters.colors && filters.colors.length > 0) {
    filtered = filtered.filter(product => filters.colors.includes(product.color));
  }

  return filtered;
};

export const sortProducts = (products, sortBy) => {
  switch (sortBy) {
    case 'priceLowToHigh':
      return [...products].sort((a, b) => a.price - b.price);
    case 'priceHighToLow':
      return [...products].sort((a, b) => b.price - a.price);
    case 'newest':
      return [...products].sort((a, b) => b.id - a.id);
    case 'rating':
      return [...products].sort((a, b) => b.rating - a.rating);
    case 'discount':
      return [...products].sort((a, b) => b.discount - a.discount);
    default:
      return products;
  }
};