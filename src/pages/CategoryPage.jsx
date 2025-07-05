import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Grid, List, SortDesc } from 'lucide-react';
import { getProductsByCategory, sortProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

const CategoryPage = () => {
  const location = useLocation();
  const categoryPath = location.pathname.split('/').filter(Boolean).pop() || '';
  // Capitalize the first letter to match the product data format
  const category = categoryPath.charAt(0).toUpperCase() + categoryPath.slice(1);
  
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');

  useEffect(() => {
    const categoryProducts = getProductsByCategory(category);
    setProducts(categoryProducts);
    setFilteredProducts(categoryProducts);
  }, [category]);

  useEffect(() => {
    let sorted = sortProducts(products, sortBy);
    setFilteredProducts(sorted);
  }, [products, sortBy]);

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  const getCategoryTitle = () => {
    return category || 'Category';
  };

  const getBreadcrumb = () => {
    return `Home > ${getCategoryTitle()}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-60 h-60 bg-gradient-to-br from-indigo-200/20 to-pink-200/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-br from-purple-200/25 to-pink-200/25 rounded-full blur-xl"></div>
      </div>

     {/* Header */}
<div
  className="relative bg-white/80 shadow-lg border-b border-white/20 bg-cover bg-no-repeat bg-top"
  style={{
    backgroundImage: "url('/assets/Background.png')",
    height: "400px", // height 
  }}
>
  <div className="container mx-auto px-4 py-12 flex items-start justify-start h-full">
    <div className="bg-white/70 backdrop-blur-md p-6 rounded-md max-w-md">
      <nav className="text-sm text-purple-600/70 mb-2 font-medium">
        {getBreadcrumb()}
      </nav>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent mb-2">
        {getCategoryTitle()}
      </h1>
      <p className="text-gray-700 text-lg">
        {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
      </p>
    </div>
  </div>
</div>


      <div className="relative container mx-auto px-4 py-8">
        {/* Toolbar */}
        <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-white/30 p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  viewMode === 'grid' 
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg transform scale-105' 
                    : 'text-gray-600 hover:bg-white/50 hover:shadow-md'
                }`}
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  viewMode === 'list' 
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg transform scale-105' 
                    : 'text-gray-600 hover:bg-white/50 hover:shadow-md'
                }`}
              >
                <List size={18} />
              </button>
            </div>
            <div className="flex items-center space-x-3">
              <SortDesc size={18} className="text-purple-600" />
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="bg-white/80 backdrop-blur-sm border border-purple-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-md text-gray-700 font-medium"
              >
                <option value="featured">Featured</option>
                <option value="priceLowToHigh">Price: Low to High</option>
                <option value="priceHighToLow">Price: High to Low</option>
                <option value="newest">Newest</option>
                <option value="rating">Highest Rated</option>
                <option value="discount">Highest Discount</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map(product => (
              <div key={product.id} className="transform hover:scale-105 transition-all duration-300">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-white/60 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-white/30 max-w-md mx-auto">
              <div className="text-purple-300 mb-6">
                <Grid size={80} className="mx-auto" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                No products found
              </h3>
              <p className="text-gray-600 text-lg">
                No products available in this category at the moment
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;