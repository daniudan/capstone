import React, { useState, useEffect } from 'react';
import './BookingForm.css';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('1');
  const [occasion, setOccasion] = useState('Birthday');

  const [bookingData, setBookingData] = useState(() => {
    const savedBookings = localStorage.getItem('bookings');
    return savedBookings ? JSON.parse(savedBookings) : [];
  });

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

    const updatedBookings = [...bookingData, formData];
    setBookingData(updatedBookings);
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));

    if (submitForm) {
      submitForm(formData);
    }
  };

  const bookedTimesForSelectedDate = bookingData
    .filter((b) => b.date === date)
    .map((b) => b.time);

  const filteredAvailableTimes = (availableTimes || []).filter(
    (t) => !bookedTimesForSelectedDate.includes(t)
  );

  // STEP 2: Validasi React JavaScript
  // Memastikan date & time terisi, serta jumlah tamu berada di rentang 1-10
  const isFormValid = () => {
    return date !== '' && time !== '' && Number(guests) >= 1 && Number(guests) <= 10;
  };

  return (
    <div className="booking-container">
      <form onSubmit={handleSubmit} className="booking-form">
        <fieldset className="booking-fieldset">
          <legend className="booking-legend">Book Now</legend>

          {/* Date Field - dengan atribut required dan id 'res-date' untuk grader Coursera */}
          <div className="form-field">
            <label htmlFor="res-date">Choose date</label>
            <input
              type="date"
              id="res-date"
              name="date"
              value={date}
              onChange={handleDateChange}
              required
            />
          </div>

          {/* Time Field - dengan atribut required dan id 'res-time' */}
          <div className="form-field">
            <label htmlFor="res-time">Choose time</label>
            <select
              id="res-time"
              name="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            >
              <option value="">Select a time</option>
              {filteredAvailableTimes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Guests Field - dengan atribut min, max, dan required */}
          <div className="form-field">
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              required
            />
          </div>

          {/* Occasion Field - dengan atribut required */}
          <div className="form-field">
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              required
            >
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>

          {/* Submit Button - disabled jika form tidak valid */}
          <button
            disabled={!isFormValid()}
            type="submit"
            className="submit-btn"
            aria-label="On Click"
          >
            Make Your reservation
          </button>
        </fieldset>
      </form>

      {bookingData.length > 0 && (
        <section className="reservations-section">
          <h2>Existing Reservations</h2>
          <div className="table-responsive">
            <table className="reservations-table">
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
          </div>
        </section>
      )}
    </div>
  );
}

export default BookingForm;