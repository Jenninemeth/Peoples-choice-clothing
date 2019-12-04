import React from 'react';

import './custom-button.styles.scss';

// custom classes passed through props to change apperance of button
const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in': '' } ${inverted ? 'inverted': '' } custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;