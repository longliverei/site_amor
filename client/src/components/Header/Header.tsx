import './Header.css';
import cart from '../../assets/cart.svg';
import profile from '../../assets/profile.svg';
import logo from '../../assets/logo_resize.png';

function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <ul>
          <li><a href="/">SHOP</a></li>
          <li><a href="/about">ABOUT</a></li>
        </ul>
      </nav>
      <img className="header-logo" src={logo} alt="Logo"></img>
      <nav className="header-nav">
        <ul>
          <li><a href="/cart"><img src={cart} alt="Cart"></img></a></li>
          <li><a href="/profile"><img src={profile} alt="Profile"></img></a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;