import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import Line from './Line';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Nav/>
        <Line/>
        <Main/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
