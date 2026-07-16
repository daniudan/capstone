import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Nav/>
        <Main/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
