import React, { useState } from 'react';
import CustomInput from '../../CustomInput/CustomInput';
import SubmitButton from '../../SubmitButton/SubmitButton';

const NeedHelpsPopup = ({ onSubmit }) => {
    const [email, setEmail] = useState('');
    // const [comment, setComment] = useState('');

    const handleEmailChange = event => {
        setEmail(event.target.value);
    };
    const handleSubmit = () => {
        onSubmit(email);
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
