// src/App.js
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">Little Lemon</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#reservations">Reservations</a>
          <a href="#order-online">Order Online</a>
          <a href="#login">Login</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button className="reserve-btn">Reserve a Table</button>
          </div>
          <div className="hero-image">
            <img src="path-to-hero-image.jpg" alt="Delicious dishes" />
          </div>
        </section>

        <section className="specials">
          <h2>This week's specials!</h2>
          <button className="menu-btn">Online Menu</button>
          <div className="specials-grid">
            <div className="special-item">
              <img src="path-to-image1.jpg" alt="Greek Salad" />
              <h3>Greek Salad</h3>
              <p className="price">$12.99</p>
              <p className="description">The famous Greek salad of crispy lettuce, peppers, olives, and Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
              <button className="order-btn">Order a delivery</button>
            </div>

            <div className="special-item">
              <img src="path-to-image2.jpg" alt="Bruschetta" />
              <h3>Bruschetta</h3>
              <p className="price">$5.99</p>
              <p className="description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
              <button className="order-btn">Order a delivery</button>
            </div>

            <div className="special-item">
              <img src="path-to-image3.jpg" alt="Lemon Dessert" />
              <h3>Lemon Dessert</h3>
              <p className="price">$5.00</p>
              <p className="description">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
              <button className="order-btn">Order a delivery</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
