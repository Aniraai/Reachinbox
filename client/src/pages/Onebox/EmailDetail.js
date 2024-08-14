import React from 'react';

const EmailDetail = ({ isDarkMode }) => {
    const emailDetailStyle = {
        backgroundColor: isDarkMode ? '#1e1e1e' : '#fafafa',
        color: isDarkMode ? '#e0e0e0' : '#333',
        padding: '20px',
        borderRadius: '8px'
    };

    return (
        <div style={emailDetailStyle}>
            <h2>Email Detail</h2>
            {/* Render email detail content here */}
        </div>
    );
};

export default EmailDetail;
