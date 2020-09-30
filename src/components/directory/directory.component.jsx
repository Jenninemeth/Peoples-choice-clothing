import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'; 

import { selectDirectorySections } from '../../redux/directory/directory.selector';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = ({ sections }) => (
  <div className='directory-title'>
    <div className='directory-content'>
      <h1 className='head-title'>Endless styles for your best fit</h1>
      <span className='subheader'>With clothing hand selected by popluar demand, you’ll always look and feel your best. Quality clothes, delivered right to your door.</span>
    </div>
    <div className='directory-menu'>
      {sections.map(({id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  </div>
);
 
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
 });

export default connect (mapStateToProps)(Directory);