import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';

function Main() {
  return (
    <main className="main-content">
      {/* 4. TAMBAHKAN KONTROL RUTING DI SINI */}
      <Routes>
        {/* Jalur utama ("/") akan menampilkan semua komponen beranda */}
        <Route path="/" element={<Homepage />} />
        <Route path="/reservation" element={<BookingPage />} />
        <Route path="/about" element={<Homepage />} />
        <Route path="/menu" element={<Homepage />} />
        <Route path="/order-online" element={<Homepage />} />
        <Route path="/login" element={<Homepage />} />
      </Routes>
    </main>
  );
}

export default Main;