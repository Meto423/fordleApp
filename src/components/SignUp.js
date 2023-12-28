import React from 'react';
import { Link } from 'react-router-dom';
import './All.css';
import fordleIcon from './assets/Fordle amblem.png';


function Signup() {
  const handleSignup = () => {
    // Implement your signup logic here

    // Redirect to the Game page upon successful signup
    // Redirect using JavaScript window location
    window.location.href = '/game';
  };
  return (
    <div>
      <div className='container'>
        <img src={fordleIcon} alt='Fordle Icon' />
        <div className='header'>
          <div className='text'>FORDLE</div>
          <div className='inputs'>
            <div className='inputs'>
              <div className='submit1'>İsim</div>
              <div className='input'>
                <input type='name' />
              </div>
              <div className='submit1'>Soyisim</div>
              <div className='input'>
                <input type='surname' />
              </div>
              <div className='submit1'>E-posta</div>
              <div className='input'>
                <input type='email' />
              </div>
              <div className='submit1'>Kullanıcı Adı</div>
              <div className='input'>
                <input type='nickname' />
              </div>
              <div className='submit1'>Parola</div>
              <div className='input'>
                <input type='password' />
              </div>
              <div className='submit1'>Parola Tekrar</div>
              <div className='input'>
                <input type='password' />
              </div>
            </div>
          </div>
          <div className='submit-container'>
            <div className='submit'>
              <button onClick={() => console.log('Signup logic here')}>Kaydol</button>
            </div>
            <div className='submit'>
              <Link to='/login'>
                <button>Giriş Yap/Oyna</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default Signup;
