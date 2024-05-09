import { useEffect, useState } from 'react';
import scss from './BoardLink.module.scss';
import sprite from '../../../assets/icons/icons.svg';
import { useSelector } from 'react-redux';
import { selectBoards } from '../../../redux/tasks/tasks-selectors';
import { NavLink } from 'react-router-dom';

const LinksListItem = ({ iconName, title, id }) => {
    return (
        <NavLink to={id} className={scss.linkItem}>
            <div className={scss.linkWrapper}>
                <svg className={scss.svgIcon}>
                    <use href={`${sprite}#${iconName}`}></use>
                </svg>

                <p className={scss.linkTitle}>{title}</p>
            </div>
        </NavLink>
        // <li
        //     className={`${scss.linkItem} ${isChecked ? scss.checked : ''}`}
        //     onClick={onSelect}
        // >
        //     <div className={scss.iconTitleFlex}>
        //         <svg className={scss.svgIcon}>
        //             <use xlinkHref={`${sprite}#${iconName}`} />
        //         </svg>
        //         <p className={scss.linkTitle}>{title}</p>
        //     </div>
        //     {isChecked && (
        //         <div className={scss.iconIndicatorFlex}>
        //             <div className={scss.svgFlex}>
        //                 <svg className={scss.svgIconControl}>
        //                     <use xlinkHref={`${sprite}#icon-pencil`} />
        //                 </svg>
        //                 <svg className={scss.svgIconControl}>
        //                     <use xlinkHref={`${sprite}#icon-trash`} />
        //                 </svg>
        //             </div>
        //             {isChecked && <div className={scss.indicator}></div>}
        //         </div>
        //     )}
        // </li>
    );
};

const BoardLink = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const boards = useSelector(selectBoards);
    console.log(boards);

    // useEffect(() => {
    //     const savedSelectedItem = localStorage.getItem('selectedItem');
    //     if (savedSelectedItem) {
    //         setSelectedItem(savedSelectedItem);
    //     } else {
    //         setSelectedItem('Project office');
    //     }
    // }, []);

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
            {boards.map(({ _id, board_name, icon }) => (
                <LinksListItem
                    key={icon}
                    iconName={icon}
                    title={board_name}
                    id={_id}
                />
            ))}
        </ul>
    );
};

export default BoardLink;
