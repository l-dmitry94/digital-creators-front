import icons from '../../../assets/icons/icons.svg';
import scss from './Logout.module.scss';

const Logout = () => {
    return (
        <div className={scss.logoutContainer}>
            <button className={scss.logoutButtonFlex}>
                <div>
                    <svg className={scss.logoutIcon}>
                        <use href={`${icons}#icon-logout`}></use>
                    </svg>
                </div>
                <p className={scss.textButtonLogout}>Logout</p>
            </button>
        </div>
    );
};

export default Logout;
