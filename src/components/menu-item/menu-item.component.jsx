import React from 'react';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match,  span }) => (
    <div 
        className={`${size} menu-item`} 
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div 
            className='background-image'
            style={{ 
                backgroundImage: `url(${imageUrl})` }} 
        />
       
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
        <div className='alt-content'>
            <h1 className='message'>{title}</h1>
            <span className='subtitle'>{span}</span>
            <CustomButton>Signing Up</CustomButton>
        </div>
    </div>
);

export default withRouter(MenuItem);