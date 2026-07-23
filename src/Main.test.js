import React from 'react';

// Mock total react-router-dom tanpa memanggil jest.requireActual
jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
  Routes: ({ children }) => <div>{children}</div>,
  Route: ({ element }) => <div>{element}</div>,
  Link: ({ children }) => <a>{children}</a>,
}));

import { initializeTimes, updateTimes } from './Main';

describe('Main component helper functions', () => {
  beforeEach(() => {
    global.fetchAPI = jest.fn((date) => [
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
    ]);
  });

  afterEach(() => {
    delete global.fetchAPI;
  });

  test('initializeTimes returns a non-empty array of available booking times', () => {
    const initialTimes = initializeTimes();

    expect(global.fetchAPI).toHaveBeenCalled();
    expect(Array.isArray(initialTimes)).toBe(true);
    expect(initialTimes.length).toBeGreaterThan(0);
  });

  test('updateTimes returns updated times based on the selected date payload', () => {
    const initialState = ['17:00', '18:00'];
    const action = {
      type: 'UPDATE_TIMES',
      payload: '2026-07-25',
    };

    const updatedState = updateTimes(initialState, action);

    expect(global.fetchAPI).toHaveBeenCalled();
    expect(updatedState).toEqual([
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
    ]);
  });
});