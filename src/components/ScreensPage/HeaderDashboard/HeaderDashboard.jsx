import scss from './HeaderDashboard.module.scss';
import icons from '../../../assets/icons/icons.svg';

const HeaderDashboard = () => {
    return (
        <div className={scss.head}>
            <p>Text</p>
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
