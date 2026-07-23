import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm Validation & Submission Tests', () => {

  // ===================================================
  // 1. UNIT TESTS UNTUK FORM INPUT VALIDATION (HTML5)
  // ===================================================
  describe('HTML5 Attribute Validation', () => {
    test('Renders date input with correct HTML5 validation attributes', () => {
      render(<BookingForm availableTimes={[]} dispatch={() => {}} submitForm={() => {}} />);
      
      const dateInput = screen.getByLabelText(/choose date/i);
      expect(dateInput).toHaveAttribute('type', 'date');
      expect(dateInput).toHaveAttribute('required');
    });

    test('Renders time select with correct HTML5 validation attributes', () => {
      render(<BookingForm availableTimes={['17:00']} dispatch={() => {}} submitForm={() => {}} />);
      
      const timeSelect = screen.getByLabelText(/choose time/i);
      expect(timeSelect).toHaveAttribute('required');
    });

    test('Renders guests input with correct HTML5 validation attributes (min, max, required)', () => {
      render(<BookingForm availableTimes={[]} dispatch={() => {}} submitForm={() => {}} />);
      
      const guestsInput = screen.getByLabelText(/number of guests/i);
      expect(guestsInput).toHaveAttribute('type', 'number');
      expect(guestsInput).toHaveAttribute('min', '1');
      expect(guestsInput).toHaveAttribute('max', '10');
      expect(guestsInput).toHaveAttribute('required');
    });
  });

  // =======================================================
  // 2. UNIT TESTS UNTUK JAVASCRIPT STATE VALIDATION
  // =======================================================
  describe('JavaScript State Validation', () => {
    test('Submit button should be disabled when form is invalid (initial state)', () => {
      render(<BookingForm availableTimes={['17:00']} dispatch={() => {}} submitForm={() => {}} />);
      
      const submitButton = screen.getByRole('button', { name: /on click/i });
      expect(submitButton).toBeDisabled();
    });

    test('Submit button should be enabled when all required fields are valid', () => {
      render(<BookingForm availableTimes={['17:00']} dispatch={() => {}} submitForm={() => {}} />);
      
      const dateInput = screen.getByLabelText(/choose date/i);
      const timeSelect = screen.getByLabelText(/choose time/i);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      const submitButton = screen.getByRole('button', { name: /on click/i });

      // Isi input agar kondisi form valid
      fireEvent.change(dateInput, { target: { value: '2026-08-01' } });
      fireEvent.change(timeSelect, { target: { value: '17:00' } });
      fireEvent.change(guestsInput, { target: { value: '4' } });

      expect(submitButton).not.toBeDisabled();
    });

    test('Submit button should be disabled if guests input is invalid (< 1 or > 10)', () => {
      render(<BookingForm availableTimes={['17:00']} dispatch={() => {}} submitForm={() => {}} />);
      
      const dateInput = screen.getByLabelText(/choose date/i);
      const timeSelect = screen.getByLabelText(/choose time/i);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      const submitButton = screen.getByRole('button', { name: /on click/i });

      // Input tanggal & waktu valid, tapi guests diisi 0 (invalid)
      fireEvent.change(dateInput, { target: { value: '2026-08-01' } });
      fireEvent.change(timeSelect, { target: { value: '17:00' } });
      fireEvent.change(guestsInput, { target: { value: '0' } });

      expect(submitButton).toBeDisabled();
    });
  });

  // =======================================================
  // 3. UNIT TESTS UNTUK FORM SUBMISSION VALIDATION
  // =======================================================
  describe('Form Submission Validation', () => {
    test('Calls submitForm function with form data when submitted', () => {
      const mockSubmitForm = jest.fn();
      
      render(
        <BookingForm 
          availableTimes={['17:00']} 
          dispatch={() => {}} 
          submitForm={mockSubmitForm} 
        />
      );

      const dateInput = screen.getByLabelText(/choose date/i);
      const timeSelect = screen.getByLabelText(/choose time/i);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      const submitButton = screen.getByRole('button', { name: /on click/i });

      // Fill form with valid data
      fireEvent.change(dateInput, { target: { value: '2026-08-01' } });
      fireEvent.change(timeSelect, { target: { value: '17:00' } });
      fireEvent.change(guestsInput, { target: { value: '2' } });

      // Submit form
      fireEvent.click(submitButton);

      // Verify submitForm triggered with correct params
      expect(mockSubmitForm).toHaveBeenCalledTimes(1);
      expect(mockSubmitForm).toHaveBeenCalledWith({
        date: '2026-08-01',
        time: '17:00',
        guests: '2',
        occasion: 'Birthday'
      });
    });
  });

});