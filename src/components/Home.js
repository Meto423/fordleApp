import React from 'react';
import './All.css';
import fordleIcon from './assets/Fordle amblem.png';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className='container'>
      <img src={fordleIcon} alt='Fordle Icon' />
      <div className='header'>
        <div className='text'>FORDLE</div>
        <div className='text'>5 Harfli Kelime, 6 Tahmin </div>
        <div className='submit-container'>
          <div className='submit'>
            <Link to='/howto'>
              <button>Nasıl Oynanır?</button>
            </Link>
          </div>
          <div className='submit'>
            <Link to='/login'>
              <button>Giriş Yap/Oyna</button>
            </Link>
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default Home;
