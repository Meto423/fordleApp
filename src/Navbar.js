import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentPage }) => {
  return (
    <nav className='navbar'>
      <div className="links">
        {/* Contents from the first Navbar */}
      </div>
      <div className='submit-container'>
        {currentPage === 'home' && (
          <>
            <div className='submit'>
              <Link to='/howto'>Nasıl Oynanır?</Link>
            </div>
            <div className='submit'>
              <Link to='/login'>Giriş Yap/Oyna</Link>
            </div>
          </>
        )}

        {(currentPage === 'login' || currentPage === 'signup') && (
          <>
            <div className='submit'>
              <button onClick={() => console.log('Navigate to game')}>Giriş Yap/Oyna</button>
            </div>
            <div className='submit'>
              <Link to='/signup'>
                <button>Kaydol</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
