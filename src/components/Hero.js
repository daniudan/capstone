import React from 'react';
import './Hero.css';
import restaurantFoodImg from './restauranfood.jpg';

function Hero() {
  return (
    <section className="hero">
        <div className="hero-description">
        <h1>Little Lemon</h1>
            <p className="hero-location">Chicago</p>
            <p className="hero-description-text">
              We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
            <button>Reserve a Table</button>
        </div>
        <div className="hero-image">
        <img src={restaurantFoodImg} alt="Hero" />
        </div>
    </section>
  );
}

export default Hero;