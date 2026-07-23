import BookingForm from './components/BookingForm';

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </div>
  );
}

export default BookingPage;