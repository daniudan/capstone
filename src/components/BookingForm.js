import React, { useState, useEffect } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('1');
  const [occasion, setOccasion] = useState('Birthday');

  // 1. Initialize bookingData from localStorage (or empty array if none exists)
  const [bookingData, setBookingData] = useState(() => {
    const savedBookings = localStorage.getItem('bookings');
    return savedBookings ? JSON.parse(savedBookings) : [];
  });

  // 2. Sync bookingData to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('bookings', JSON.stringify(bookingData));
  }, [bookingData]);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    setTime('');
    if (dispatch) {
      dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };

    // 3. Append new booking to existing data in state & localStorage
    const updatedBookings = [...bookingData, formData];
    setBookingData(updatedBookings);
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));

    // 4. Submit to API / Trigger navigation
    if (submitForm) {
      submitForm(formData);
    }
  };

  // 5. Filter out already booked times for the currently selected date
  const bookedTimesForSelectedDate = bookingData
    .filter((b) => b.date === date)
    .map((b) => b.time);

  const filteredAvailableTimes = (availableTimes || []).filter(
    (t) => !bookedTimesForSelectedDate.includes(t)
  );

  const isFormInvalid = !date || !time;

  return (
    <div style={{ display: 'grid', gap: '30px' }}>
      <form onSubmit={handleSubmit}>
        <fieldset style={{ display: 'grid', maxWidth: '400px', gap: '20px' }}>
          <legend>Book Now</legend>

          <label htmlFor="date">Choose date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={handleDateChange}
          />

          <label htmlFor="time">Choose time</label>
          <select
            id="time"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            <option value="">Select a time</option>
            {filteredAvailableTimes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />

          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>

          <button disabled={isFormInvalid} type="submit">
            Make Your reservation
          </button>
        </fieldset>
      </form>

      {/* 6. Render existing bookings retrieved from localStorage */}
      {bookingData.length > 0 && (
        <section>
          <h2>Existing Reservations</h2>
          <table
            border="1"
            cellPadding="10"
            style={{ width: '100%', maxWidth: '500px', borderCollapse: 'collapse', textAlign: 'left' }}
          >
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Guests</th>
                <th>Occasion</th>
              </tr>
            </thead>
            <tbody>
              {bookingData.map((res, index) => (
                <tr key={index}>
                  <td>{res.date}</td>
                  <td>{res.time}</td>
                  <td>{res.guests}</td>
                  <td>{res.occasion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </div>
  );
}

export default BookingForm;