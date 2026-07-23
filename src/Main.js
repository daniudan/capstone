import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useReducer } from 'react';
import Homepage from './Homepage';
import BookingPage from './BookingPage';

/* global fetchAPI, submitAPI */

// 1. Inisialisasi jam menggunakan API untuk tanggal hari ini
export const initializeTimes = () => {
  const today = new Date();
  if (typeof fetchAPI !== 'undefined') {
    return fetchAPI(today);
  }
  // Fallback jika script API belum termuat
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

// 2. Reducer untuk memperbarui ketersediaan jam berdasarkan tanggal yang dipilih
export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES': {
      const selectedDate = new Date(action.payload);
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

  // 3. Fungsi submit form yang menggunakan submitAPI
  const submitForm = (formData) => {
    if (typeof submitAPI !== 'undefined') {
      const isSubmitted = submitAPI(formData);
      if (isSubmitted) {
        navigate('/booking-confirmed'); // atau arahkan sesuai kebutuhan
      }
    }
  };
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reservation"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/about" element={<Homepage />} />
        <Route path="/menu" element={<Homepage />} />
        <Route path="/order-online" element={<Homepage />} />
        <Route path="/login" element={<Homepage />} />
      </Routes>
    </main>
  );
}

export default Main;