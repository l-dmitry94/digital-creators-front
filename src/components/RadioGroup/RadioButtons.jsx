import { useState } from 'react';
import scss from './RadioButtons.module.scss';
import sprite from '../../assets/icons/icons.svg';

const CustomRadioGroup = () => {
    const [selectedOption, setSelectedOption] = useState(0);

    const handleOptionChange = index => {
        setSelectedOption(index);
        // Відправка даних на сервер (яку іконку вибрав користувач)
        sendSelectedOptionToServer(index);
    };

    const sendSelectedOptionToServer = index => {
        const selectedIcon = radioOptions[index];
        fetch('YOUR_SERVER_URL', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ icon: selectedIcon }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Server response:', data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    const radioOptions = [
        { id: 'icon-project', title: 'Project' },
        { id: 'icon-star', title: 'Star' },
        { id: 'icon-loading', title: 'Loading' },
        { id: 'icon-puzzle', title: 'Puzzle' },
        { id: 'icon-container', title: 'Container' },
        { id: 'icon-lightning', title: 'Lightning' },
        { id: 'icon-colors', title: 'Colors' },
        { id: 'icon-hexagon', title: 'Hexagon' },
    ];

    return (
        <div className={scss.customRadioGroup}>
            {radioOptions.map((option, index) => (
                <label key={index} className={scss.customRadioLabel}>
                    <input
                        type="radio"
                        name="customRadio"
                        value={index}
                        checked={selectedOption === index}
                        onChange={() => handleOptionChange(index)}
                        className={scss.customRadioInput}
                    />
                    <svg
                        className={`${scss.svgIcon} ${selectedOption === index ? scss.selectedIcon : ''}`}
                    >
                        <use xlinkHref={`${sprite}#${option.id}`} />
                    </svg>
                </label>
            ))}
        </div>
    );
};

export default CustomRadioGroup;
