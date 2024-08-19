import { Link } from 'react-router-dom';
import '../App.css';

function Header() {
  return (
    <article className='MainHeader'>
      <section className='Header'>
        <Link className='Tab' to={'/'}>Home</Link>
        <Link className='Tab' to={'/Shop'}>Shop</Link>
        <Link className='Tab' to={'/Contact'}>Contact</Link>
      </section>
    </article>
  );
}

export default Header;