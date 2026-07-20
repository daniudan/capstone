import React, { useState } from 'react';

function BookingForm() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('1');
  const [occasion, setOccasion] = useState('Birthday');
  const [availableTimes, setAvailableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ]);

  // 3. Fungsi penanganan saat form di-submit (opsional tapi sangat disarankan)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data Reservasi Berhasil Dibuat:", { date, time, guests, occasion });
    alert(`Reservasi berhasil untuk tanggal ${date} jam ${time}!`);
  };

  const isFormInvalid = !date || !time;

  return (
    <form onSubmit={handleSubmit} >
      <fieldset style={{display: 'grid', maxWidth: '400px', gap: '20px'}}>
        <label htmlFor="date">Choose date</label>
        <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)}/>
        <label htmlFor="time">Choose time</label>
        <select id="time" name="time" value={time} onChange={(e) => setTime(e.target.value)} >
            <option value="">Select a time</option>
            {availableTimes.map((t) => (
                <option key={t} value={t}>{t}</option>
    ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="guests"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" name="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <button disabled={isFormInvalid} type="submit">
          Make Your reservation
        </button>
      </fieldset>
    </form>
  );
}

export default BookingForm;