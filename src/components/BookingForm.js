import React, { useState } from 'react';

function BookingForm({ bookedState, dispatch }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('1');
  const [occasion, setOccasion] = useState('Birthday');


  const availableTimes = date && bookedState[date]
    ? bookedState[date]
    : ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    setTime(''); // Reset jam saat tanggal berganti
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
  };

  // 3. Fungsi penanganan saat form di-submit (opsional tapi sangat disarankan)
  const handleSubmit = (e) => {
    e.preventDefault();

    // 3. UBAH DI SINI: Kirim tanggal DAN jam sebagai payload
    dispatch({
      type: 'BOOK_TIME',
      payload: { date, time }
    });

    console.log("Data Reservasi Berhasil Dibuat:", { date, time, guests, occasion });
    alert(`Reservasi berhasil untuk tanggal ${date} jam ${time}!`);

    setTime(''); // Reset dropdown jam
  };

  const isFormInvalid = !date || !time;

  return (
    <form onSubmit={handleSubmit} >
      <fieldset style={{display: 'grid', maxWidth: '400px', gap: '20px'}}>
        <label htmlFor="date">Choose date</label>
        <input type="date" id="date" name="date" value={date} onChange={handleDateChange}/>
        <label htmlFor="time">Choose time</label>
        <select id="time" name="time" value={time} onChange={(e) => setTime(e.target.value)} >
            <option value="">Select a time</option>
            {availableTimes.map((t) => (
                <option key={t} value={t}>{t}</option>
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
        <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
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