import './NavLink.css'

function NavLink() {
  return (
    <nav className="nav_link">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavLink;