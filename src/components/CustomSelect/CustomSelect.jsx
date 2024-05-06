import Select from 'react-select';
import './CustomSelect.scss';

import { useTheme } from '../../hooks/useTheme.js';
import {
    THEME_LIGHT,
    THEME_VIOLET,
    THEME_DARK,
} from '../../constants/themeConstants.js';

const CustomSelect = () => {
    const isTheme = useTheme();
    const options = [
        { value: THEME_LIGHT, label: 'Light' },
        { value: THEME_DARK, label: 'Dark' },
        { value: THEME_VIOLET, label: 'Violet' },
    ];

    return (
        <Select
            onChange={selectedTheme => isTheme.change(selectedTheme.value)}
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
