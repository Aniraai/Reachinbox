import React from 'react';

const LeadDetails = ({ isDarkMode }) => {
    const leadDetailsStyle = {
        backgroundColor: isDarkMode ? '#1e1e1e' : '#fafafa',
        color: isDarkMode ? '#e0e0e0' : '#333',
        padding: '20px',
        borderRadius: '8px'
    };

    return (
        <div style={leadDetailsStyle}>
            <h2>Lead Details</h2>
            {/* Render lead details content here */}
        </div>
    );
};

export default LeadDetails;
