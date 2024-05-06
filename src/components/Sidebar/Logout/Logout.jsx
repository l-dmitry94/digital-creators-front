import icons from '../../../assets/icons/icons.svg';
import scss from './Logout.module.scss';

import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../../../redux/auth/auth-operations.js';

const Logout = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    };
    return (
        <div className={scss.logoutContainer}>
            <button onClick={handleLogout} className={scss.logoutButtonFlex}>
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
