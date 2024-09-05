/* import React from 'react';

const Select = ({ options = [], value, onChange, className = '', placeholder = 'Select an option' }) => {
    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`form-select ${className}`}
        >
            <option value="">{placeholder}</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export { Select }; */
import React, { useState } from 'react';

// Main Select Component
const Select = ({ children }) => {
    return <div className="relative inline-block w-full">{children}</div>;
};

// Select Trigger
const SelectTrigger = ({ onClick, value }) => {
    return (
        <button
            onClick={onClick}
            className="w-full p-2 border bg-white text-left flex justify-between items-center"
        >
            {value || 'Select...'}
            <span className="ml-2">▼</span>
        </button>
    );
};

// Select Content (Dropdown)
const SelectContent = ({ isOpen, children }) => {
    return isOpen ? (
        <div className="absolute z-10 w-full bg-white border mt-2">
            {children}
        </div>
    ) : null;
};

// Select Item
const SelectItem = ({ value, onClick, children }) => {
    return (
        <div
            onClick={() => onClick(value)}
            className="p-2 cursor-pointer hover:bg-gray-100"
        >
            {children}
        </div>
    );
};

// Select Value
const SelectValue = ({ value }) => {
    return <span>{value}</span>;
};

// Example usage for context
const ExampleSelect = ({ options, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);

    const handleSelect = (value) => {
        setSelectedValue(value);
        setIsOpen(false);
        onChange(value);
    };

    return (
        <Select>
            <SelectTrigger onClick={() => setIsOpen(!isOpen)} value={selectedValue} />
            <SelectContent isOpen={isOpen}>
                {options.map((option) => (
                    <SelectItem key={option.value} value={option.value} onClick={handleSelect}>
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export { Select, SelectTrigger, SelectContent, SelectItem, SelectValue };

