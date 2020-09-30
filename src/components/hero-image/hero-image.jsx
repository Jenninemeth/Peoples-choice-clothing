import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './hero-image.scss';

const Hero = () => (
  <div className='hero-menu'>
        <div className='main-image'>
            <div className='content'>
                <h1 className='title'>Hello Fall <span className='emojis'>🍂☕🍁</span></h1>
                <span className='subtitle'>Sweater Weather is here!</span>
                <CustomButton >shop sweaters</CustomButton>
            </div>
        </div>
  </div>
);

export default Hero; 