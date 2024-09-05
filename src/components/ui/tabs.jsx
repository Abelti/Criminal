/* import React, { useState } from 'react';

const Tabs = ({ tabs = [], className = '' }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].label);

    return (
        <div className={`tabs ${className}`}>
            <ul className="flex border-b">
                {tabs.map((tab) => (
                    <li
                        key={tab.label}
                        className={`px-4 py-2 cursor-pointer ${activeTab === tab.label ? 'border-blue-500 border-b-2 text-blue-500' : 'text-gray-500'}`}
                        onClick={() => setActiveTab(tab.label)}
                    >
                        {tab.label}
                    </li>
                ))}
            </ul>
            <div className="tab-content mt-4">
                {tabs.find((tab) => tab.label === activeTab)?.content}
            </div>
        </div>
    );
};

export { Tabs }; */
/* import React, { useState } from 'react';

// Tabs Component
const Tabs = ({ defaultValue, children }) => {
    const [activeTab, setActiveTab] = useState(defaultValue);

    const changeTab = (value) => setActiveTab(value);

    // Passing activeTab and changeTab function to children
    return React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { activeTab, changeTab });
        }
        return child;
    });
};

// Tabs List
const TabsList = ({ children }) => {
    return <div className="flex space-x-2 border-b">{children}</div>;
};

// Tabs Trigger
const TabsTrigger = ({ value, activeTab, changeTab, children }) => {
    return (
        <button
            onClick={() => changeTab(value)}
            className={`p-2 text-sm font-medium ${activeTab === value ? 'border-b-2 border-blue-500' : 'border-transparent'} hover:text-blue-600`}
        >
            {children}
        </button>
    );
};

// Tabs Content
const TabsContent = ({ value, activeTab, children }) => {
    return activeTab === value ? <div className="mt-4">{children}</div> : null;
};

export { Tabs, TabsList, TabsTrigger, TabsContent }; */
import React, { useState } from 'react';

// Tabs Component
const Tabs = ({ defaultValue, children }) => {
    const [activeTab, setActiveTab] = useState(defaultValue);

    const changeTab = (value) => setActiveTab(value);

    // Passing activeTab and changeTab function to children
    return (
        <div>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { activeTab, changeTab });
                }
                return child;
            })}
        </div>
    );
};

// Tabs List
const TabsList = ({ children }) => {
    return <div className="flex space-x-2 border-b">{children}</div>;
};

// Tabs Trigger
const TabsTrigger = ({ value, activeTab, changeTab, children }) => {
    return (
        <button
            onClick={() => changeTab(value)}
            className={`p-2 text-sm font-medium ${activeTab === value ? 'border-b-2 border-blue-500' : 'border-transparent'} hover:text-blue-600`}
        >
            {children}
        </button>
    );
};

// Tabs Content
const TabsContent = ({ value, activeTab, children }) => {
    return activeTab === value ? <div className="mt-4">{children}</div> : null;
};

export { Tabs, TabsList, TabsTrigger, TabsContent };


