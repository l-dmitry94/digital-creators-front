import { Fragment, useEffect, useState } from 'react';
import scss from './RadioButtons.module.scss';
import sprite from '../../assets/icons/icons.svg';

const CustomRadioGroup = ({ formik }) => {
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

    const [selectedOption, setSelectedOption] = useState(radioOptions[0].id);

    useEffect(() => {
        formik.values.icon = selectedOption;
    }, [selectedOption, formik.values]);

    const handleRadioButtons = e => {
        setSelectedOption(e.target.value);
    };

    return (
        <div className={scss.radioGroup}>
            {radioOptions.map(({ id }) => (
                <Fragment key={id}>
                    <input
                        className={scss.input}
                        type="radio"
                        id={id}
                        name="group"
                        value={id}
                        onChange={e => handleRadioButtons(e)}
                        checked={selectedOption === id}
                    />
                    <label htmlFor={id} className={scss.label}>
                        <svg className={scss.icon}>
                            <use href={`${sprite}#${id}`}></use>
                        </svg>
                    </label>
                </Fragment>
            ))}
        </div>
    );
};

export default CustomRadioGroup;
