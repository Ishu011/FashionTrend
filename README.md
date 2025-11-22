# FashionTrend - Modern E-commerce Web App
A complete full-stack fashion e-commerce application — built using React 18 + Vite, Node.js + Express, MongoDB, JWT Authentication, bcrypt, and Tailwind CSS.
FashionTrend delivers a clean, modern shopping experience with smart filtering, real-time search, cart/wishlist management, authentication, order processing, and a fully functional production-ready backend system following clean MVC architecture.
##  Project Overview
FashionTrend is a full-stack fashion e-commerce platform designed for the modern shopper.
Users can browse products across Men, Women, Kids, and Beauty categories with:
Real-time search
Advanced client + server-side filtering
Cart & Wishlist sync with backend
Authentication (Signup/Login) with JWT
Order creation & tracking
Profile and Order History pages
Scalable API structure with MongoDB
The backend includes:
REST API
JWT authentication
Secure password hashing
MongoDB models for Users, Products, Cart, Wishlist, Orders
Controllers, Routes, Middleware
CORS + JSON parsing
![image](https://github.com/user-attachments/assets/efc5c5e8-4fd6-4891-8b19-fba307e57846)


---
## Live Demo

Hosted Link : https://fashion-trend-ishu.vercel.app/


![image](https://github.com/user-attachments/assets/2213a188-7b38-4f34-8093-f27fd35aac55)


---

## Features 

###  Core Functionalities
Product Catalog
Fetches products from MongoDB through REST API

Advanced Filtering
Server-side + client-side filtering (brand, price, size)

Smart Search
Real-time search through API

Shopping Cart
Add/remove/update items (stored in DB per user)

Wishlist
Save/remove products (MongoDB-controlled)

Authentication (JWT)
Signup, Login, Profile fetch

Order Management
Checkout → Order creation → Clear cart → Order history page

Protected Routes
Uses JWT in HTTP headers

Responsive UI
Built with Tailwind CSS

Global State
Context API for cart, wishlist, auth

---

##  Tech Stack

Tech Stack
Technology	Purpose
React 18	Frontend UI framework
Vite	Frontend bundler
Tailwind CSS	Styling
React Router	SPA routing
Context API	State management
Node.js	Backend runtime
Express.js	Backend server
MongoDB	Database
Mongoose	Object modeling
JWT	Authentication
bcrypt	Password hashing
CORS	API access management
               

---
##  Application Flow

### User Journey Flowchart

```mermaid
graph TD
    A[Landing Page] --> B{User Action}

    B -->|Browse Categories| C[Category Page]
    B -->|Search Products| D[Search Page]
    B -->|Login or Signup| E[Authentication]

    C --> F[Product Detail]
    D --> F

    F --> G{User Decision}
    G -->|Add to Cart (API: cart/add)| H[Shopping Cart]
    G -->|Add to Wishlist (API: wishlist/add)| I[Wishlist]
    G -->|Continue Shopping| C

    H --> J{Checkout Process}
    J -->|Proceed to Checkout| K[Shipping Info]
    J -->|Login Required| E

    E -->|Auth Successful (JWT)| L[User Dashboard]

    L --> M{Dashboard Options}
    M -->|Profile Page| N[Profile]
    M -->|Order History| O[Orders]
    M -->|Continue Shopping| A

    K --> P[Order Creation (API: orders/create)]
    P --> Q[Order Review]
    Q --> R[Order Confirmation]
    R --> O

    I --> S{Wishlist Actions}
    S -->|Move to Cart (API: cart/add)| H
    S -->|Remove Item (API: wishlist/remove)| I
    S -->|View Product| F


```


##  Folder Structure
```
FashionTrend/
│
├── frontend/                      # React 18 + Vite + Tailwind CSS
│   ├── public/
│   │   ├── assets/
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   └── FilterSidebar.jsx      # Handles product filtering
│   │   │
│   │   ├── pages/                     # Route-based pages
│   │   │   ├── Home.jsx               # Landing page
│   │   │   ├── CategoryPage.jsx       # Category-wise products
│   │   │   ├── ProductDetail.jsx      # Product details page
│   │   │   ├── Cart.jsx               # User shopping cart
│   │   │   ├── Wishlist.jsx           # Saved products
│   │   │   ├── Checkout.jsx           # Handling checkout flow
│   │   │   ├── Login.jsx              # User login
│   │   │   ├── Signup.jsx             # User registration
│   │   │   ├── Profile.jsx            # User profile (Protected)
│   │   │   ├── Orders.jsx             # Order history (Protected)
│   │   │   ├── Search.jsx             # Search results page
│   │   │   └── Contact.jsx            # Contact page
│   │   │
│   │   ├── context/
│   │   │   └── AppContext.jsx         # Global state (cart, auth, wishlist)
│   │   │
│   │   ├── data/
│   │   │   └── products.js            # Optional (used before backend)
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
│
│
└── backend/                       # Node.js + Express + MongoDB (MERN API)
    ├── server.js                  # Entry point for server
    ├── package.json
    ├── .env.example               # Env variables
    │
    ├── config/
    │   └── db.js                  # MongoDB connection
    │
    ├── models/                    # Mongoose data models
    │   ├── User.js
    │   ├── Product.js
    │   ├── Cart.js
    │   ├── Wishlist.js
    │   └── Order.js
    │
    ├── controllers/               # API Controllers (CRUD logic)
    │   ├── authController.js
    │   ├── productController.js
    │   ├── cartController.js
    │   ├── wishlistController.js
    │   └── orderController.js
    │
    ├── routes/                    # Route definitions
    │   ├── auth.js                # /api/auth
    │   ├── products.js            # /api/products
    │   ├── cart.js                # /api/cart
    │   ├── wishlist.js            # /api/wishlist
    │   └── orders.js              # /api/orders
    │
    └── middleware/
        └── authMiddleware.js      # JWT token verification

```
## Running the Project (Full Stack)
1️⃣ Install Dependencies (Both Sides)
## Frontend:
cd frontend
npm install
npm run dev

## Backend:
cd backend
npm install
npm run dev

## Future Scope
Payment gateway (Stripe/Razorpay)
Admin dashboard for managing products & orders
Cloud image upload (Cloudinary)
Reviews & Ratings
Recommended products using ML
Email/OTP authentication

##  Deployment

### Build Process
1. Run `npm run build`
2. Test with `npm run preview`
3. Deploy `dist/` folder to hosting service

##  License

This project is ©2025 Ishu. All rights reserved.

##  Acknowledgments

- **Design Inspiration**: Myntra's modern e-commerce interface
- **Icons**: Lucide React icon library
- **Styling**: Tailwind CSS framework
- MERN Stack Architecture Principles

---

*This is a demonstration project showcasing modern React development practices and beautiful UI design.*




