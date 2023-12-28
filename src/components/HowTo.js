import React from 'react'
import './All.css';
import w1 from './assets/w1.png';
import w2 from './assets/w2.png';
import w3 from './assets/w3.png';

function HowTo() {
  return (
    <div>
      
      <div className = 'container'>
      <div className = 'header'>
      <div className = 'text'>NASIL OYNANIR</div>
      <div className = 'header2'>
      Fordle'i 6 denemede bulun.
      </div>
      <div className = 'header2'>
      Her tahmin 5 harfli doğru bir kelime olmalıdır. 
      </div>
      <div className = 'header2'>
      Göndermek için enter'a basın.
      </div>
      <div className = 'header2'>
      Her tahminden sonra kutucukların renkleri tahmininizin yakınlığına göre değişecektir.
      </div>
      </div>
      <div className = 'header2'></div>
      <div className = 'header2'></div>
      <div className = 'header2'></div>
      <div className = 'header2'>
      <div className = 'text'></div>Örnekler
      </div>
      <div className = 'header2'></div>
      <div className = 'header2'></div>
      <div className = 'header2'></div>
      <img src={w1} alt='w1' />
      <div className = 'header2'>
      L harfi kelimede var ve doğru yerde
      </div>
      <img src={w2} alt='w2' />
      <div className = 'header2'>
      A ve L harfleri kelimede var ve doğru yerde, I harfi kelimede var fakat yanlış yerde
      </div>
      <img src={w3} alt='w3' /> 
      <div className = 'header2'>
      Hiçbir harf kelimede yok
      </div>

    </div>
    </div>
  )
}

export default HowTo;