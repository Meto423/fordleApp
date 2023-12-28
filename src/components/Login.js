import React from 'react';
import { Link } from 'react-router-dom';
import './All.css';
import fordleIcon from './assets/Fordle amblem.png';


function Login() {
  const handleLogin = () => {
    // Implement your login logic here

    // Redirect to the Game page upon successful login
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
              <div className='submit1'>Kullanıcı Adı</div>
              <div className='input'>
                <input type='nickname' />
              </div>
              <div className='submit1'>Parola</div>
              <div className='input'>
                <input type='password' />
              </div>
            </div>
            <div className='submit-container'>
              <div className='submit'>
                <button onClick={handleLogin}>Giriş Yap/Oyna</button>
              </div>
              <div className='submit'>
                <Link to='/signup'>
                  <button>Kaydol</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Login;
