import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cardcomp from './Card/Cardcomp'
import axios from 'axios'

function App() {
  let products = []
  async function fetchProducts() {
    try {
      let req = await axios.get('https://dummyjson.com/products')
      console.log(req);
      
    } catch (error) {
      
    }
    
  }
  




  return (
    < >
      <nav className="navbar">
        <div className="nav-logo">
          <h2>Ghafoor Sports</h2>
        </div>

        <ul className="nav-links">
          <li>Home</li>
          <li>Products</li>
          <li>Categories</li>
          <li>About</li>
        </ul>

        <div className="nav-actions">
          <button className="login-btn">Login</button>
          <button className="cart-btn">🛒 Cart</button>
        </div>
      </nav>

      <div className="product" style={{ padding: "10px", display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
        {
          products.map((x) => {
            let { id, title, price, description, category, image, rating } = x
            return (
              <Cardcomp title={title} img={image} desc={description} cate={category} price={price} rate={rating.rate}/>
            )

          })
        }

      </div>
    </ >


  )
}

export default App
