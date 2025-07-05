import React, { createContext, useContext, useReducer, useEffect } from 'react';

const AppContext = createContext();

const initialState = {
  user: null,
  cart: [],
  wishlist: [],
  orders: [],
  isAuthenticated: false,
  searchQuery: '',
  filters: {
    priceRange: [0, 10000],
    brands: [],
    sizes: [],
    colors: []
  }
};

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload
      };
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(item => 
        item.id === action.payload.id && item.size === action.payload.size
      );
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id && item.size === action.payload.size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }]
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => 
          !(item.id === action.payload.id && item.size === action.payload.size)
        )
      };
    case 'UPDATE_CART_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id && item.size === action.payload.size
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cart: []
      };
    case 'ADD_TO_WISHLIST':
      if (state.wishlist.find(item => item.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload]
      };
    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        wishlist: state.wishlist.filter(item => item.id !== action.payload.id)
      };
    case 'ADD_ORDER':
      return {
        ...state,
        orders: [...state.orders, action.payload]
      };
    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.payload
      };
    case 'SET_FILTERS':
      return {
        ...state,
        filters: { ...state.filters, ...action.payload }
      };
    case 'LOGOUT':
      return {
        ...initialState
      };
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    // Load user data from localStorage
    const savedUser = localStorage.getItem('user');
    const savedCart = localStorage.getItem('cart');
    const savedWishlist = localStorage.getItem('wishlist');
    const savedOrders = localStorage.getItem('orders');

    if (savedUser) {
      dispatch({ type: 'SET_USER', payload: JSON.parse(savedUser) });
    }
    if (savedCart) {
      dispatch({ type: 'SET_CART', payload: JSON.parse(savedCart) });
    }
    if (savedWishlist) {
      dispatch({ type: 'SET_WISHLIST', payload: JSON.parse(savedWishlist) });
    }
    if (savedOrders) {
      dispatch({ type: 'SET_ORDERS', payload: JSON.parse(savedOrders) });
    }
  }, []);

  useEffect(() => {
    // Save to localStorage whenever state changes
    if (state.user) {
      localStorage.setItem('user', JSON.stringify(state.user));
    }
    localStorage.setItem('cart', JSON.stringify(state.cart));
    localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    localStorage.setItem('orders', JSON.stringify(state.orders));
  }, [state.user, state.cart, state.wishlist, state.orders]);

  const value = {
    ...state,
    dispatch,
    // Helper functions
    addToCart: (product, size) => {
      dispatch({ type: 'ADD_TO_CART', payload: { ...product, size } });
    },
    removeFromCart: (productId, size) => {
      dispatch({ type: 'REMOVE_FROM_CART', payload: { id: productId, size } });
    },
    updateCartQuantity: (productId, size, quantity) => {
      if (quantity <= 0) {
        dispatch({ type: 'REMOVE_FROM_CART', payload: { id: productId, size } });
      } else {
        dispatch({ type: 'UPDATE_CART_QUANTITY', payload: { id: productId, size, quantity } });
      }
    },
    addToWishlist: (product) => {
      dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
    },
    removeFromWishlist: (productId) => {
      dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: { id: productId } });
    },
    isInWishlist: (productId) => {
      return state.wishlist.some(item => item.id === productId);
    },
    getTotalCartItems: () => {
      return state.cart.reduce((total, item) => total + item.quantity, 0);
    },
    getTotalCartValue: () => {
      return state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    login: (userData) => {
      dispatch({ type: 'SET_USER', payload: userData });
    },
    logout: () => {
      localStorage.removeItem('user');
      localStorage.removeItem('cart');
      localStorage.removeItem('wishlist');
      localStorage.removeItem('orders');
      dispatch({ type: 'LOGOUT' });
    },
    addOrder: (order) => {
      dispatch({ type: 'ADD_ORDER', payload: order });
    },
    setSearchQuery: (query) => {
      dispatch({ type: 'SET_SEARCH_QUERY', payload: query });
    },
    setFilters: (filters) => {
      dispatch({ type: 'SET_FILTERS', payload: filters });
    }
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};