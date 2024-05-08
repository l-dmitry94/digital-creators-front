import { useEffect, useState } from 'react';
import scss from './BoardLink.module.scss';
import sprite from '../../../assets/icons/icons.svg';

const LinksListItem = ({ iconName, title, onSelect, isChecked }) => {
    return (
        <li
            className={`${scss.linkItem} ${isChecked ? scss.checked : ''}`}
            onClick={onSelect}
        >
            <div className={scss.iconTitleFlex}>
                <svg className={scss.svgIcon}>
                    <use xlinkHref={`${sprite}#${iconName}`} />
                </svg>
                <p className={scss.linkTitle}>{title}</p>
            </div>
            {isChecked && (
                <div className={scss.iconIndicatorFlex}>
                    <div className={scss.svgFlex}>
                        <svg className={scss.svgIconControl}>
                            <use xlinkHref={`${sprite}#icon-pencil`} />
                        </svg>
                        <svg className={scss.svgIconControl}>
                            <use xlinkHref={`${sprite}#icon-trash`} />
                        </svg>
                    </div>
                    {isChecked && <div className={scss.indicator}></div>}
                </div>
            )}
        </li>
    );
};

const BoardLink = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        const savedSelectedItem = localStorage.getItem('selectedItem');
        if (savedSelectedItem) {
            setSelectedItem(savedSelectedItem);
        } else {
            setSelectedItem('Project office');
        }
    }, []);

    const handleItemClick = item => {
        if (selectedItem === item) {
            setSelectedItem(null);
            localStorage.removeItem('selectedItem');
        } else {
            setSelectedItem(item);
            localStorage.setItem('selectedItem', item);
        }
    };

    return (
        <ul className={scss.linkFlex}>
            <LinksListItem
                iconName="icon-project"
                title="Project office"
                onSelect={() => handleItemClick('Project office')}
                isChecked={selectedItem === 'Project office'}
            />
            <LinksListItem
                iconName="icon-puzzle"
                title="Neon Light Project"
                onSelect={() => handleItemClick('Neon Light Project')}
                isChecked={selectedItem === 'Neon Light Project'}
            />
        </ul>
    );
};

export default BoardLink;
