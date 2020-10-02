import React from 'react';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';

import './hero-image.scss';

const Hero = ({ history, linkUrl, match }) => (
  <div 
    className='hero-menu'
    onClick={() => history.push(`${match.url}shop/sweaters`)}
  >

        <div className='main-image'>
            <div className='content'>
                <h1 className='title'>Hello Fall <span className='emojis'>🍂☕🍁</span></h1>
                <span className='subtitle'>Sweater Weather is here!</span>
                <CustomButton >shop sweaters</CustomButton>
            </div>
        </div>
  </div>
);

export default withRouter(Hero); 