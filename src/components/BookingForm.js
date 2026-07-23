import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('1');
  const [occasion, setOccasion] = useState('Birthday');

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    setTime(''); // Reset jam saat tanggal berganti
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };

    if (submitForm) {
      submitForm(formData);
    } else {
      console.log('Data Reservasi:', formData);
      alert(`Reservasi berhasil untuk tanggal ${date} jam ${time}!`);
    }
  };

  const isFormInvalid = !date || !time;

  return (
    <form onSubmit={handleSubmit}>
      <fieldset style={{ display: 'grid', maxWidth: '400px', gap: '20px' }}>
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
          {availableTimes &&
            availableTimes.map((t) => (
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
  );
}

export default BookingForm;