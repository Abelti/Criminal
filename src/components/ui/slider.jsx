import React, { useState } from 'react';

const Slider = ({ min = 0, max = 100, step = 1, defaultValue = 50, onChange, className = '' }) => {
    const [value, setValue] = useState(defaultValue);

    const handleChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        onChange && onChange(newValue);
    };

    return (
        <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={handleChange}
            className={`slider ${className}`}
        />
    );
};

export default Slider;
