import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm LocalStorage Operations', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  // 1. UNIT TEST FOR READING FROM LOCAL STORAGE
  test('reads existing bookings from localStorage on initial render', () => {
    const mockBookings = [
      { date: '2026-07-25', time: '18:00', guests: '2', occasion: 'Birthday' }
    ];

    localStorage.setItem('bookings', JSON.stringify(mockBookings));

    render(
      <BookingForm
        availableTimes={['17:00', '18:00', '19:00']}
        dispatch={jest.fn()}
        submitForm={jest.fn()}
      />
    );

    // Memastikan tanggal tampil di tabel
    expect(screen.getByText('2026-07-25')).toBeInTheDocument();

    // Memastikan teks '18:00' yang ada di dalam tabel (<td>) tampil dengan benar
    const tableCellTimes = screen.getAllByText('18:00');
    // Minimal ada 1 elemen (opsi dropdown & sel tabel)
    expect(tableCellTimes.length).toBeGreaterThan(0);

    // Opsi alternatif spesifik: Cari di dalam baris tabel (tr)
    const tableRow = screen.getByRole('row', { name: /2026-07-25 18:00 2 Birthday/i });
    expect(within(tableRow).getByText('18:00')).toBeInTheDocument();
  });

  // 2. UNIT TEST FOR WRITING TO LOCAL STORAGE
  test('writes new booking to localStorage when form is submitted', () => {
    const mockSubmitForm = jest.fn();
    const spySetItem = jest.spyOn(Storage.prototype, 'setItem');

    render(
      <BookingForm
        availableTimes={['17:00', '18:00', '19:00']}
        dispatch={jest.fn()}
        submitForm={mockSubmitForm}
      />
    );

    // Pengisian form
    const dateInput = screen.getByLabelText(/Choose date/i);
    fireEvent.change(dateInput, { target: { value: '2026-07-25' } });

    const timeSelect = screen.getByLabelText(/Choose time/i);
    fireEvent.change(timeSelect, { target: { value: '18:00' } });

    const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });
    fireEvent.click(submitButton);

    // Verifikasi pemanggilan localStorage.setItem
    expect(spySetItem).toHaveBeenCalledWith(
      'bookings',
      expect.stringContaining('2026-07-25')
    );

    // Verifikasi data tersimpan
    const savedData = JSON.parse(localStorage.getItem('bookings'));
    expect(savedData).toHaveLength(1);
    expect(savedData[0]).toEqual({
      date: '2026-07-25',
      time: '18:00',
      guests: '1',
      occasion: 'Birthday'
    });
  });
});