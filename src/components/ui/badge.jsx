import React from 'react';

const Badge = ({ children, variant = 'default', className = '' }) => {
    const variantStyles = {
        default: 'bg-gray-200 text-gray-800',
        success: 'bg-green-200 text-green-800',
        warning: 'bg-yellow-200 text-yellow-800',
        danger: 'bg-red-200 text-red-800',
        info: 'bg-blue-200 text-blue-800',
    };

    return (
        <span
            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${variantStyles[variant]} ${className}`}
        >
            {children}
        </span>
    );
};

export default Badge;
