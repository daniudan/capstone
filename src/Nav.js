import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
        <img src="./logollrectangle.svg" alt="logo" className="nav logo" />
        <ul className="nav menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/reservation">Reservation</Link></li>
          <li><Link to="/order-online">Order Online</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
    </nav>
  );
}

export default Nav;