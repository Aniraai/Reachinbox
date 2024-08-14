import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles

const CustomEditor = ({ onSend, threadId }) => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const handleSend = async () => {
        try {
            const response = await fetch(`/api/replies`, { // Updated endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    from,
                    to,
                    subject,
                    body
                }),
            });

            if (response.ok) {
                alert('Reply sent successfully!');
                onSend(); // Close the reply box on success
            } else {
                alert('Failed to send reply.');
            }
        } catch (error) {
            console.error('Error sending reply:', error);
            alert('Error sending reply.');
        }
    };

    const handleSave = () => {
        try {
            // Save draft to local storage or a backend endpoint
            const draft = { from, to, subject, body };
            localStorage.setItem('emailDraft', JSON.stringify(draft));
            alert('Draft saved successfully!');
        } catch (error) {
            console.error('Error saving draft:', error);
            alert('Error saving draft.');
        }
    };

    const handleVariables = () => {
        // For now, just log a message. Extend this as needed.
        console.log('Variables button clicked. Implement functionality as needed.');
        alert('Variables functionality is not yet implemented.');
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ marginBottom: '10px' }}>
                <input
                    type="text"
                    placeholder="From"
                    style={inputStyle}
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="To"
                    style={inputStyle}
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Subject"
                    style={inputStyle}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
            </div>
            <ReactQuill
                theme="snow"
                style={editorStyle}
                value={body}
                onChange={(content) => setBody(content)}
            />
            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end' }}>
                <button onClick={handleSave} style={buttonStyle}>SAVE</button>
                <button onClick={handleVariables} style={buttonStyle}>Variables</button>
                <button onClick={handleSend} style={sendButtonStyle}>Send</button>
            </div>
        </div>
    );
};

// Styles
const inputStyle = {
    width: '95%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #444',
    borderRadius: '4px',
    backgroundColor: '#333',
    color: '#e0e0e0',
};

const editorStyle = {
    flex: 1,
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#0000',
    color: '#e0e0e0',
    minHeight: '300px',
    marginBottom: '10px',
};

const buttonStyle = {
    background: 'linear-gradient(45deg, #4B63DD, #0524BF)',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    marginLeft: '10px',
    cursor: 'pointer'
};

const sendButtonStyle = {
    ...buttonStyle,
    marginLeft: '10px',
};

export default CustomEditor;
