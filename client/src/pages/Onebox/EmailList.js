import React from 'react';

const EmailList = ({ isDarkMode }) => {
    const emailListStyle = {
        backgroundColor: isDarkMode ? '#1e1e1e' : '#fafafa',
        color: isDarkMode ? '#e0e0e0' : '#333',
        padding: '20px',
        borderRadius: '8px'
    };

    return (
        <div style={emailListStyle}>
            <h2>Email List</h2>
            {/* Render email list items here */}
        </div>
    );
};

export default EmailList;
