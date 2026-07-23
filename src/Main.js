import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useReducer } from 'react';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';

/* global fetchAPI, submitAPI */

// PASTIKAN ADA KATA 'export' DI SINI:
export const initializeTimes = () => {
  const today = new Date();
  if (typeof fetchAPI !== 'undefined') {
    return fetchAPI(today);
  }
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

// PASTIKAN ADA KATA 'export' DI SINI JUGA:
export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES': {
      const [year, month, day] = action.payload.split('-');
      const selectedDate = new Date(year, month - 1, day);

      if (typeof fetchAPI !== 'undefined') {
        return fetchAPI(selectedDate);
      }
      return state;
    }
    default:
      return state;
  }
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (typeof submitAPI !== 'undefined') {
      const isSubmitted = submitAPI(formData);
      if (isSubmitted) {
        navigate('/booking-confirmed');
      }
    } else {
      navigate('/booking-confirmed');
    }
  };

  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/reservation"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
        <Route path="/about" element={<Homepage />} />
        <Route path="/menu" element={<Homepage />} />
        <Route path="/order-online" element={<Homepage />} />
        <Route path="/login" element={<Homepage />} />
      </Routes>
    </main>
  );
}

export default Main;