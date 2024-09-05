import React, { useState } from 'react';

const Switch = ({ checked = false, onChange, className = '' }) => {
    const [isOn, setIsOn] = useState(checked);

    const handleToggle = () => {
        setIsOn(!isOn);
        onChange && onChange(!isOn);
    };

    return (
        <button
            onClick={handleToggle}
            className={`relative inline-flex items-center h-6 w-11 rounded-full focus:outline-none focus:ring ${isOn ? 'bg-blue-600' : 'bg-gray-300'} ${className}`}
        >
            <span
                className={`transform transition ease-in-out duration-200 ${isOn ? 'translate-x-5' : 'translate-x-1'} inline-block w-4 h-4 bg-white rounded-full`}
            />
        </button>
    );
};

export default Switch;
