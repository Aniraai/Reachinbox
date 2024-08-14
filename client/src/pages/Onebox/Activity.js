// src/pages/Onebox/Activity.js
import React from 'react';

const Activity = ({ isDarkMode }) => {
    const activityStyle = {
        backgroundColor: isDarkMode ? '#1e1e1e' : '#f5f5f5',
        color: isDarkMode ? '#e0e0e0' : '#333',
        borderRadius: '5px',
        padding: '20px',
        height: '70%',
        overflowY: 'auto'
    };

    return (
        <div style={activityStyle}>
            <h2>Activity</h2>
            <ul>
                <li>Activity 1: User logged in</li>
                <li>Activity 2: User sent an email</li>
                <li>Activity 3: User updated profile</li>
                <li>Activity 4: User received a message</li>
                {/* Add more activity items as needed */}
            </ul>
        </div>
    );
};

export default Activity;
