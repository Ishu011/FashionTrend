import React, { useState } from 'react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import { brands } from '../data/products';

const FilterSidebar = ({ isOpen, onClose, filters, onFilterChange, category }) => {
  const [expandedSections, setExpandedSections] = useState({
    price: true,
    brand: true,
    size: true,
    color: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handlePriceChange = (min, max) => {
    onFilterChange({ ...filters, priceRange: [min, max] });
  };

  const handleBrandChange = (brand) => {
    const newBrands = filters.brands.includes(brand)
      ? filters.brands.filter(b => b !== brand)
      : [...filters.brands, brand];
    onFilterChange({ ...filters, brands: newBrands });
  };

  const handleSizeChange = (size) => {
    const newSizes = filters.sizes.includes(size)
      ? filters.sizes.filter(s => s !== size)
      : [...filters.sizes, size];
    onFilterChange({ ...filters, sizes: newSizes });
  };

  const handleColorChange = (color) => {
    const newColors = filters.colors.includes(color)
      ? filters.colors.filter(c => c !== color)
      : [...filters.colors, color];
    onFilterChange({ ...filters, colors: newColors });
  };

  const clearAllFilters = () => {
    onFilterChange({
      priceRange: [0, 10000],
      brands: [],
      sizes: [],
      colors: []
    });
  };

  const getSizesForCategory = (category) => {
    switch (category) {
      case 'Men':
        return ['S', 'M', 'L', 'XL', 'XXL', '30', '32', '34', '36', '38'];
      case 'Women':
        return ['S', 'M', 'L', 'XL'];
      case 'Kids':
        return ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y'];
      case 'Beauty':
        return ['One Size', '30ml', '50ml', '120ml'];
      default:
        return ['S', 'M', 'L', 'XL'];
    }
  };

  const getColorsForCategory = (category) => {
    switch (category) {
      case 'Men':
        return ['Black', 'White', 'Navy', 'Gray', 'Blue', 'Khaki', 'Olive', 'Checkered', 'Light Blue'];
      case 'Women':
        return ['Black', 'White', 'Pink', 'Red', 'Blue', 'Navy', 'Floral', 'Beige', 'Gray', 'Multi', 'Camel'];
      case 'Kids':
        return ['Black', 'White', 'Pink', 'Blue', 'Red', 'Yellow', 'Navy', 'Floral', 'Multi', 'Olive', 'Khaki', 'Striped', 'Gold', 'Gray'];
      case 'Beauty':
        return ['Red', 'Pink', 'Black', 'Clear', 'White', 'Fair', 'Light', 'Multi', 'Bronze', 'Green'];
      default:
        return ['Black', 'White', 'Pink', 'Red', 'Blue', 'Navy', 'Gray'];
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden" onClick={onClose} />
      )}

      {/* Sidebar */}
      <div className={`fixed lg:relative top-0 left-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      } overflow-y-auto`}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">Filters</h2>
            <div className="flex items-center space-x-2">
              <button
                onClick={clearAllFilters}
                className="text-sm text-pink-600 hover:text-pink-800 transition-colors"
              >
                Clear All
              </button>
              <button onClick={onClose} className="lg:hidden">
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('price')}
              className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-3"
            >
              <span>Price Range</span>
              {expandedSections.price ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {expandedSections.price && (
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    step="100"
                    value={filters.priceRange[0]}
                    onChange={(e) => handlePriceChange(parseInt(e.target.value), filters.priceRange[1])}
                    className="flex-1"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    step="100"
                    value={filters.priceRange[1]}
                    onChange={(e) => handlePriceChange(filters.priceRange[0], parseInt(e.target.value))}
                    className="flex-1"
                  />
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>₹{filters.priceRange[0]}</span>
                  <span>₹{filters.priceRange[1]}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handlePriceChange(0, 1000)}
                    className="px-3 py-1 border rounded text-sm hover:bg-gray-50"
                  >
                    Under ₹1000
                  </button>
                  <button
                    onClick={() => handlePriceChange(1000, 2000)}
                    className="px-3 py-1 border rounded text-sm hover:bg-gray-50"
                  >
                    ₹1000-2000
                  </button>
                  <button
                    onClick={() => handlePriceChange(2000, 3000)}
                    className="px-3 py-1 border rounded text-sm hover:bg-gray-50"
                  >
                    ₹2000-3000
                  </button>
                  <button
                    onClick={() => handlePriceChange(3000, 10000)}
                    className="px-3 py-1 border rounded text-sm hover:bg-gray-50"
                  >
                    Above ₹3000
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Brand */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('brand')}
              className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-3"
            >
              <span>Brand</span>
              {expandedSections.brand ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {expandedSections.brand && (
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {brands.map(brand => (
                  <label key={brand} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={filters.brands.includes(brand)}
                      onChange={() => handleBrandChange(brand)}
                      className="rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                    />
                    <span className="text-sm text-gray-700">{brand}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Size */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('size')}
              className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-3"
            >
              <span>Size</span>
              {expandedSections.size ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {expandedSections.size && (
              <div className="grid grid-cols-3 gap-2">
                {getSizesForCategory(category).map(size => (
                  <button
                    key={size}
                    onClick={() => handleSizeChange(size)}
                    className={`px-3 py-2 border rounded text-sm transition-colors ${
                      filters.sizes.includes(size)
                        ? 'bg-pink-600 text-white border-pink-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Color */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('color')}
              className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-3"
            >
              <span>Color</span>
              {expandedSections.color ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {expandedSections.color && (
              <div className="grid grid-cols-2 gap-2">
                {getColorsForCategory(category).map(color => (
                  <label key={color} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={filters.colors.includes(color)}
                      onChange={() => handleColorChange(color)}
                      className="rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                    />
                    <span className="text-sm text-gray-700">{color}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;