import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import EmailList from './EmailList';
import EmailDetail from './EmailDetail';
import LeadDetails from './LeadDetails';
import Activity from './Activity';
import AllInbox from './AllInbox';
import Upper from './Upper';
import CustomEditor from './CustomEditor';

import './Onebox.css'; // Optional for additional styling

const Onebox = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [showReplyBox, setShowReplyBox] = useState(false);
    const [currentEmailId] = useState(null); // Kept currentEmailId if needed in future

    const handleThemeToggle = () => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode;
            document.body.style.backgroundColor = newMode ? '#121212' : '#fff';
            document.body.style.color = newMode ? '#e0e0e0' : '#333';
            return newMode;
        });
    };

    const handleKeyDown = (event) => {
        if (event.key === 'd') {
            console.log("Delete action triggered");
        } else if (event.key === 'r') {
            setShowReplyBox(true);
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(() => {
        fetchEmails();
    }, []);

    const fetchEmails = async () => {
        try {
            const response = await fetch('https://d76c-14-139-108-227.ngrok-free.app/api/replies'); // Correct URL
            if (response.ok) {
                const data = await response.json();
                console.log('Fetched replies:', data);
            } else {
                console.error('Failed to fetch replies.');
            }
        } catch (error) {
            console.error('Error fetching replies:', error);
        }
    };
    

    const handleSendReply = async (replyData) => {
        if (!currentEmailId) {
            console.error('No email selected.');
            return;
        }

        try {
            const response = await fetch(`/api/replies`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(replyData),
            });

            if (response.ok) {
                alert('Reply sent successfully!');
                setShowReplyBox(false);
            } else {
                alert('Failed to send reply.');
            }
        } catch (error) {
            console.error('Error sending reply:', error);
            alert('Error sending reply.');
        }
    };

    const oneboxStyle = {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: isDarkMode ? '#121212' : '#fff',
        color: isDarkMode ? '#e0e0e0' : '#333',
        overflow: 'hidden',
    };

    const mainContentStyle = {
        display: 'flex',
        flex: 1,
        overflow: 'hidden',
    };

    const sidebarStyle = {
        width: '50px',
        padding: '20px',
        borderRight: '1px solid #ddd',
    };

    const inboxAreaStyle = {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        padding: '20px',
        borderRight: '1px solid #ddd',
    };

    const allInboxStyle = {
        width: '17vw',
        padding: '20px',
        borderRight: '1px solid #ddd',
    };

    const rightSideStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        padding: '20px',
        borderLeft: '1px solid #ddd',
        height: '100%',
    };

    const leadDetailsStyle = {
        flex: 1,
        marginBottom: '20px',
    };

    const activityStyle = {
        flex: 1,
        marginTop: '20px',
    };

    const replyButtonStyle = {
        background: 'linear-gradient(45deg, #4B63DD, #0524BF)',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'pointer',
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
    };

    const arrowStyle = {
        marginLeft: '10px',
        fontSize: '16px',
    };

    const replyBoxStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: isDarkMode ? '#1e1e1e' : '#fff',
        color: isDarkMode ? '#e0e0e0' : '#333',
        padding: '20px',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
        width: '90vw',
        maxWidth: '600px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1000,
    };

    return (
        <div style={oneboxStyle}>
            <Upper isDarkMode={isDarkMode} handleThemeToggle={handleThemeToggle} />
            <div style={mainContentStyle}>
                <div style={sidebarStyle}>
                    <Sidebar isDarkMode={isDarkMode} />
                </div>
                <div style={inboxAreaStyle}>
                    <div style={allInboxStyle}>
                        <AllInbox isDarkMode={isDarkMode} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <EmailList isDarkMode={isDarkMode} />
                        <EmailDetail isDarkMode={isDarkMode} />
                    </div>
                </div>
                <div style={rightSideStyle}>
                    <div style={leadDetailsStyle}>
                        <LeadDetails isDarkMode={isDarkMode} />
                    </div>
                    <div style={activityStyle}>
                        <Activity isDarkMode={isDarkMode} />
                    </div>
                </div>
            </div>
            {showReplyBox && (
                <div style={replyBoxStyle}>
                    <CustomEditor onSend={(replyData) => handleSendReply(replyData)} threadId={currentEmailId} />
                </div>
            )}
            <button style={replyButtonStyle} onClick={() => setShowReplyBox(true)}>
                Reply
                <span style={arrowStyle}>➔</span>
            </button>
        </div>
    );
};

export default Onebox;
