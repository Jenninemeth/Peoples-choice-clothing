import React from 'react';

import Directory from '../../components/directory/directory.component';
import Hero from '../../components/hero-image/hero-image';

import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <Hero />
        <Directory />
    </div>
);

export default HomePage;