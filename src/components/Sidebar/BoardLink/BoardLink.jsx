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
    );
};

const BoardLink = () => {
    const boards = useSelector(selectBoards);

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
