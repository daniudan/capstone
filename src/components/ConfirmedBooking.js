import React from 'react';
import './ConfirmedBooking.css';

function ConfirmedBooking() {
  return (
    <div className="confirmed-booking-container">
      <h1>Booking Confirmed!</h1>
      <p>Thank you for your reservation at Little Lemon.</p>
      <p>A confirmation email has been sent to you.</p>
    </div>
  );
}

export default ConfirmedBooking;