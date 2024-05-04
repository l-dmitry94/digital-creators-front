import React, { useState } from 'react';
import CustomInput from '../../CustomInput/CustomInput';
import axios from 'axios';

const NeedHelpsPopup = ({ onClose }) => {
    const [email, setEmail] = useState('');

    const handleEmailChange = event => {
        setEmail(event.target.value);
    };

    const handleSubmit = async () => {
        try {
            await axios.post('/api/send-email', { email });
            alert('Email sent successfully!');
            onClose();
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Error sending email. Please try again later.');
        }
    };

    return (
        <div>
            <CustomInput
                type="email"
                name="email"
                placeholder="Email address"
                value={email}
                onChange={handleEmailChange}
            />
            <button onClick={handleSubmit}>Send</button>
        </div>
    );
};

export default NeedHelpsPopup;

