import { Routes, Route } from 'react-router-dom';
import React, { useReducer } from 'react';
import Homepage from './Homepage';
import BookingPage from './BookingPage';

// 1. Fungsi helper untuk menyediakan slot jam default
export const getInitialSlots = () => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
// 2. Buat fungsi initializeTimes untuk nilai awal state
export const initializeTimes = () => ({});

// 3. Reducer untuk mengelola ketersediaan jam per tanggal
export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES': {
      const selectedDate = action.payload;
      if (!state[selectedDate]) {
        return {
          ...state,
          [selectedDate]: getInitialSlots(),
        };
      }
      return state;
    }

    case 'BOOK_TIME': {
      const { date, time } = action.payload;
      const currentSlots = state[date] || getInitialSlots();

      return {
        ...state,
        // Hapus jam yang dipesan khusus untuk tanggal tersebut
        [date]: currentSlots.filter((t) => t !== time),
      };
    }

    default:
      return state;
  }
};

function Main() {
  const [bookedState, dispatch] = useReducer(updateTimes, null, initializeTimes);

  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reservation"
          element={
            <BookingPage
              bookedState={bookedState} // FIX: Mengirim bookedState, bukan availableTimes
              dispatch={dispatch}
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