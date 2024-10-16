import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BookDetail from './pages/BookDetail.jsx'
import Cart from './pages/Cart.jsx'
import { BookProvider } from './BooksCart.jsx'
import { SearchProvider } from './SearchContext';

const routers = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/cart',
    element: <Cart/>
  },
  {
    path: "/book/:id",
    element: <BookDetail />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchProvider>
    <BookProvider>
      <RouterProvider router={routers} />
    </BookProvider>
    </SearchProvider>
  </React.StrictMode>,
)
