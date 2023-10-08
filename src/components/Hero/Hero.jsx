import React from 'react';
import heroImg from './hero.png';
import '../Header/Header.css';

export default function Hero() {
  return (
    <div className='hero-container'>
      <div className='hero-slogan header-container'>
        <span>Bu sezonda en iyisini bul</span>
        <h2>Herkese özel koleksiyon</h2>
        <a href="/">Şimdi Keşfet</a>
      </div>

        <img className='hero-img' src={heroImg} alt="" />
      
    </div>
  )
}
