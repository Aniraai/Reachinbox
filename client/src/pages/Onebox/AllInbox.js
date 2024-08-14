// AllInbox.js
import React from 'react';

const AllInbox = ({ isDarkMode }) => {
    const allInboxStyle = {
        flex: 2, // Adjust width as needed
        backgroundColor: isDarkMode ? '#1e1e1e' : '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        overflowY: 'auto',
        padding: '10px',
        marginRight: '20px'
    };

    const emailItemStyle = {
        padding: '10px',
        borderBottom: '1px solid #ddd',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    };

    const emailItemHoverStyle = {
        ...emailItemStyle,
        backgroundColor: isDarkMode ? '#333' : '#eee'
    };

    const emailItemList = [
        { id: 1, subject: 'Meeting Reminder', from: 'John Doe' },
        { id: 2, subject: 'Project Update', from: 'Jane Smith' },
        // Add more email items here
    ];

    return (
        <div style={allInboxStyle}>
            <h2>All Inbox</h2>
            {emailItemList.map(email => (
                <div
                    key={email.id}
                    style={emailItemStyle}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = emailItemHoverStyle.backgroundColor}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
                >
                    <p><strong>From:</strong> {email.from}</p>
                    <p><strong>Subject:</strong> {email.subject}</p>
                </div>
            ))}
        </div>
    );
};

export default AllInbox;
