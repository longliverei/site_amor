import Logo from './Logo';
import NavLink from './NavLink';

function Header() {
  return (
    <header className='main_header'>
        <Logo></Logo>
        <NavLink></NavLink> 
    </header>
  );
}

export default Header;