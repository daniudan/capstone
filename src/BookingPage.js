import BookingForm from './components/BookingForm'

function BookingPage({ bookedState, dispatch }) {
  return (
    <>
    {/* 2. Oper kembali props tersebut ke BookingForm */}
      <BookingForm
        bookedState={bookedState}
        dispatch={dispatch}
      />
    </>
  );
}

export default BookingPage;