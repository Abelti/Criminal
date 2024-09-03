import React from 'react';

const Label = ({ htmlFor, children, className = '', ...props }) => {
    return (
        <label htmlFor={htmlFor} className={`block text-sm font-medium ${className}`} {...props}>
            {children}
        </label>
    );
};

export default Label;
