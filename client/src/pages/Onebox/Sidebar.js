import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/icons/logo.png';
import InboxIcon from '../../assets/icons/inbox.png';
import SettingsIcon from '../../assets/icons/settings.png';
import EmailIcon from '../../assets/icons/email.png';
import CalendarIcon from '../../assets/icons/calendar.png';
import ContactsIcon from '../../assets/icons/contacts.png';
import TasksIcon from '../../assets/icons/tasks.png';
import NotificationsIcon from '../../assets/icons/notifications.png';

const Sidebar = ({ isDarkMode }) => {
    const navigate = useNavigate();

    const sidebarStyle = {
        width: '50px',
        backgroundColor: isDarkMode ? '#333' : '#f5f5f5',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        color: isDarkMode ? '#f5f5f5' : '#333'
    };

    const logoStyle = {
        marginBottom: '20px'
    };

    const iconListStyle = {
        listStyle: 'none',
        padding: '0',
        width: '100%'
    };

    const iconItemStyle = {
        margin: '15px 0',
        display: 'flex',
        justifyContent: 'center'
    };

    const iconStyle = {
        width: '20px',
        height: '20px',
        cursor: 'pointer'
    };

    const handleInboxClick = () => {
        navigate('/onebox');
    };

    return (
        <div style={sidebarStyle}>
            <div style={logoStyle}>
                <img src={Logo} alt="Logo" style={{ width: '80%', maxWidth: '150px' }} />
            </div>
            <ul style={iconListStyle}>
                <li style={iconItemStyle} onClick={handleInboxClick}>
                    <img src={InboxIcon} alt="Inbox" style={iconStyle} />
                </li>
                <li style={iconItemStyle}>
                    <img src={SettingsIcon} alt="Settings" style={iconStyle} />
                </li>
                <li style={iconItemStyle}>
                    <img src={EmailIcon} alt="Email" style={iconStyle} />
                </li>
                <li style={iconItemStyle}>
                    <img src={CalendarIcon} alt="Calendar" style={iconStyle} />
                </li>
                <li style={iconItemStyle}>
                    <img src={ContactsIcon} alt="Contacts" style={iconStyle} />
                </li>
                <li style={iconItemStyle}>
                    <img src={TasksIcon} alt="Tasks" style={iconStyle} />
                </li>
                <li style={iconItemStyle}>
                    <img src={NotificationsIcon} alt="Notifications" style={iconStyle} />
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
