import React from 'react';

const Upper = ({ isDarkMode, handleThemeToggle }) => {
    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: isDarkMode ? '#333' : '#f5f5f5',
        color: isDarkMode ? '#f5f5f5' : '#333',
        borderBottom: '1px solid #ddd'
    };

    const userProfileStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    };

    const userProfileTextStyle = {
        margin: '0',
        fontSize: '14px'
    };

    const iconStyle = {
        fontSize: '16px',
        cursor: 'pointer'
    };

    return (
        <div style={headerStyle}>
            <h1>Onebox</h1>
            <div style={userProfileStyle}>
                <i
                    style={iconStyle}
                    onClick={handleThemeToggle}
                >
                    {isDarkMode ? '🌙' : '☀️'}
                </i>
                <p style={userProfileTextStyle}>Tim’s Workspace</p>
            </div>
        </div>
    );
};

export default Upper;
