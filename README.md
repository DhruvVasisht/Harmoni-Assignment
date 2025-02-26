# E-Commerce Store with React & TypeScript

A modern, responsive e-commerce application built with React, TypeScript, and Redux. This project demonstrates a clean, production-ready implementation of an online store using the FakeStore API.

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

## 🎯 Features

- **Responsive Design**: Fully responsive layout that works seamlessly across mobile, tablet, and desktop devices
- **Product Search**: Category-based search functionality using the FakeStore API
- **Interactive Product Cards**: Clean and informative product displays with ratings and prices
- **Detailed Product Modal**: Responsive modal with complete product information and quantity selection
- **Shopping Cart**: Simple cart functionality with Redux state management
- **Real-time Category Filtering**: Instant product filtering based on selected categories

## 🎨 Design Decisions

1. **State Management**
   - Used Redux Toolkit for global state management
   - Implemented a clean separation of concerns with dedicated slices for cart functionality
   - Maintained type safety throughout with TypeScript

2. **UI/UX Considerations**
   - Implemented a fixed header for easy navigation
   - Used Tailwind CSS for consistent styling and rapid development
   - Added loading states and error handling for better user experience
   - Included responsive breakpoints for optimal viewing across all devices

3. **Performance Optimizations**
   - Implemented efficient data fetching with axios
   - Used proper React hooks for lifecycle management
   - Maintained clean component structure for better maintainability

4. **Code Organization**
   - Separated components into logical units
   - Used TypeScript interfaces for better type safety
   - Maintained consistent file structure and naming conventions

## 🛠️ Technical Stack

- React 18
- TypeScript
- Redux Toolkit
- Tailwind CSS
- Axios
- Lucide React (for icons)
- Vite (for build tooling)

## 🔄 API Integration

The application integrates with the FakeStore API for:
- Fetching all products
- Category-based filtering
- Individual product details

## 🎯 Areas for Improvement

Given more time, these areas could be enhanced:

1. **Testing**
   - Add unit tests for components
   - Implement integration tests for API calls
   - Add end-to-end testing with Cypress

2. **Features**
   - Implement a full shopping cart page
   - Add user authentication
   - Include a checkout process
   - Add product sorting and filtering options
   - Implement a wishlist feature

3. **Performance**
   - Add image lazy loading
   - Implement infinite scrolling for products
   - Add service worker for offline functionality
   - Implement proper error boundaries

4. **UX Enhancements**
   - Add more animated transitions
   - Implement skeleton loading states
   - Add better form validation
   - Enhance accessibility features
