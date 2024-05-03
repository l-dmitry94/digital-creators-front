import Select from 'react-select';
import { useState } from 'react';
import './CustomSelect.scss';

const CustomSelect = () => {
    const [theme, setSelectedOption] = useState('Theme');
    console.log(theme);
    const options = [
        { value: 'light', label: 'Light' },
        { value: 'dark', label: 'Dark' },
        { value: 'violet', label: 'Violet' },
    ];
    return (
        <Select
            onChange={setSelectedOption}
            isSearchable={false}
            options={options}
            unstyled
            placeholder="Theme"
            className="react-select-container"
            classNamePrefix="react-select"
        />
    );
};

export default CustomSelect;
