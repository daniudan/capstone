import React from 'react';
import './Highlight.css';
import greekSaladPic from './greek salad.jpg';
import bruchettaPic from './bruchetta.svg';
import lemonDessertPic from './lemon dessert.jpg';
import DeliveryIcon from './delivery.svg';

function Highlight() {
  return (
    <div className="highlight">
      <div className="highlight-announcement">
        <h2>This weeks special!</h2>
        <button className="menu-button">Online Menu</button>
      </div>
      <div className="highlight-card">
        <div className="highlight-card-box">
          <div className="card-image">
            <img src={greekSaladPic} alt="Greek Salad" />
          </div>
          <div className="card-description">
            <div className="card-title">
              <h3>Greek Salad</h3>
              <p className="card-price">$12.99</p>
            </div>
            <p className="card-description-text">
              The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
            </p>
            <div className="card-order-container">
              <p className="card-order">Order a delivery</p>
              <img src={DeliveryIcon} alt="Delivery Icon" className="delivery-icon" />
            </div>
          </div>
        </div>
        <div className="highlight-card-box">
          <div className="card-image">
            <img src={bruchettaPic} alt="Bruschetta" />
          </div>
          <div className="card-description">
            <div className="card-title">
              <h3>Bruschetta</h3>
              <p className="card-price">$5.99</p>
            </div>
            <p className="card-description-text">
              Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
            </p>
            <div className="card-order-container">
              <p className="card-order">Order a delivery</p>
              <img src={DeliveryIcon} alt="Delivery Icon" className="delivery-icon" />
            </div>
          </div>
        </div>
        <div className="highlight-card-box">
          <div className="card-image">
            <img src={lemonDessertPic} alt="Lemon Dessert" />
          </div>
          <div className="card-description">
            <div className="card-title">
              <h3>Lemon Dessert</h3>
              <p className="card-price">$5.00</p>
            </div>
            <p className="card-description-text">
              This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
            </p>
            <div className="card-order-container">
              <p className="card-order">Order a delivery</p>
              <img src={DeliveryIcon} alt="Delivery Icon" className="delivery-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Highlight;