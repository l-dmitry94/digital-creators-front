import scss from './HeaderDashboard.module.scss';
import icons from '../../../assets/icons/icons.svg';

const HeaderDashboard = ({ boardName }) => {
    return (
        <div className={scss.head}>
            <h4 className={scss.boardName}>{boardName}</h4>
            <button className={scss.btn}>
                <svg className={scss.filterIcon}>
                    <use href={`${icons}#icon-filter`}></use>
                </svg>
                Filters
            </button>
        </div>
    );
};

export default HeaderDashboard;
