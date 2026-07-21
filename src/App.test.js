import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';

// MOCK: Mencegah Jest memanggil modul internal react-router-dom yang bermasalah
jest.mock('react-router-dom', () => ({
  Routes: ({ children }) => <div>{children}</div>,
  Route: ({ element }) => element,
  useNavigate: () => jest.fn(),
  Link: ({ children, to }) => <a href={to}>{children}</a>,
}));

import { initializeTimes, updateTimes, getInitialSlots } from './Main';

// ==========================================
// STEP 1: Test Static Text pada BookingForm
// ==========================================
test('Renders static text in BookingForm', () => {
  const mockDispatch = jest.fn();

  render(
    <BookingForm 
      bookedState={{}} 
      dispatch={mockDispatch} 
    />
  );

  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});

// ==========================================
// STEP 2: Test initializeTimes & updateTimes
// ==========================================

test('initializeTimes returns the expected initial state object', () => {
  const initialState = initializeTimes();
  expect(initialState).toEqual({});
});

test('updateTimes adds default slots for a new selected date', () => {
  const initialState = {};
  const action = { type: 'UPDATE_TIMES', payload: '2026-07-21' };

  const newState = updateTimes(initialState, action);

  expect(newState).toEqual({
    '2026-07-21': getInitialSlots()
  });
});