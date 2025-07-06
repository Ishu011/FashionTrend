# FashionTrend - Modern E-commerce Web App

 **Aim**  
 To create a responsive, beautifully designed, and fully functional fashion e-commerce web application inspired by Myntra, using React and Tailwind CSS. The app offers a streamlined shopping experience focused on design simplicity, product browsing, smart filtering, and real-time cart functionality — built for the modern shopper.
![image](https://github.com/user-attachments/assets/c7bfdb52-600b-4cd8-8bb2-477028488085)


---

##  Project Overview

FashionTrend is a frontend-only fashion commerce web app offering seamless browsing of fashion products across categories like **Men**, **Women**, **Kids**, and **Beauty**.  
It features a clean user interface, advanced filtering, search capabilities, and cart/wishlist features with persistent state using **LocalStorage**.
![image](https://github.com/user-attachments/assets/efc5c5e8-4fd6-4891-8b19-fba307e57846)


---

## Features 

###  Core Functionalities
- **Product Catalog**: 70+ products across 4 categories (Women, Men, Kids, Beauty)
- **Advanced Filtering**: Price range, brand, size
- **Smart Search**: Real-time product search with suggestions
- **Shopping Cart**: Add/remove items, quantity management
- **Wishlist**: Save favorite products for later
- **User Authentication**: Login/signup with form validation
- **Order Management**: Complete checkout process with order tracking
- **Responsive Routing**: Built with React Router for page navigation.

---

## 📦 Tech Stack

| Technology     | Purpose                                     |
|----------------|---------------------------------------------|
| **React 18**    | Frontend framework for SPA                 |
| **Vite**        | Fast development and production bundling   |
| **Tailwind CSS**| Utility-first CSS styling                  |
| **React Router**| Client-side routing                        |
| **Lucide Icons**| Clean modern icon system                   |
| **Context API** | Global state (cart, wishlist, auth)        |
| **LocalStorage**| Persistence across reloads                 |

---

## 📁 Folder Structure
```
myntra-ecommerce/
├── public/
│   ├── assets/                
│   └── index.html
├── src/
│   ├── components/                      
│   │   ├── Header.jsx                  
│   │   ├── Footer.jsx                   
│   │   ├── ProductCard.jsx              
│   │   └── FilterSidebar.jsx            # Product filtering
│   ├── pages/                           # Route components
│   │   ├── Home.jsx                     # Landing page
│   │   ├── CategoryPage.jsx             # Product listings
│   │   ├── ProductDetail.jsx            # Individual product view
│   │   ├── Cart.jsx                     # Shopping cart
│   │   ├── Wishlist.jsx                 # Saved products
│   │   ├── Checkout.jsx                 # Order completion
│   │   ├── Login.jsx                    # User authentication
│   │   ├── Signup.jsx                   # User registration
│   │   ├── Profile.jsx                  # User account
│   │   ├── Orders.jsx                   # Order history
│   │   ├── Search.jsx                   # Search results
│   │   └── Contact.jsx                  # Contact form
│   ├── context/
│   │   └── AppContext.jsx               
│   ├── data/
│   │   └── products.js                  
│   ├── App.jsx                          
│   ├── main.tsx                         
│   └── index.css                        
├── package.json
├── tailwind.config.js
├── vite.config.ts
```
## 🔄 Application Flow

### User Journey Flowchart

```mermaid
graph TD
    A[Landing Page] --> B{User Action}
    
    B -->|Browse Categories| C[ Category Page]
    B -->|Search Products| D[ Search Page]
    B -->|Login/Signup| E[👤 Authentication]
    
    C --> F[ Product Detail]
    D --> F
    
    F --> G{User Decision}
    G -->|Add to Cart| H[ Shopping Cart]
    G -->|Add to Wishlist| I[Wishlist]
    G -->|Continue Shopping| C
    
    H --> J{Checkout Process}
    J -->|Guest Checkout| K[ Shipping Info]
    J -->|Login Required| E
    
    E -->|Successful Auth| L[👤 User Dashboard]
    L --> M{Dashboard Options}
    M -->|View Profile| N[Profile Page]
    M -->|Order History| O[ Orders Page]
    M -->|Continue Shopping| A
    
    K --> P[ Payment Info]
    P --> Q[ Order Review]
    Q --> R[Order Confirmation]
    R --> O
    
    I --> S{Wishlist Actions}
    S -->|Move to Cart| H
    S -->|Remove Item| I
    S -->|View Product| F
```

## Future Scope
- **Backend integration using Firebase or Node.js**
- **Payment gateway (Stripe/Razorpay)**
- **Real authentication + order history**
- **Admin dashboard for managing inventory**

##  Deployment

### Build Process
1. Run `npm run build`
2. Test with `npm run preview`
3. Deploy `dist/` folder to hosting service

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
##  License

This project is © 2025 Ishita Patel. All rights reserved.

## 🙏 Acknowledgments

- **Design Inspiration**: Myntra's modern e-commerce interface
- **Icons**: Lucide React icon library
- **Styling**: Tailwind CSS framework
- **Build Tool**: Vite for fast development

---

*This is a demonstration project showcasing modern React development practices and beautiful UI design.*
