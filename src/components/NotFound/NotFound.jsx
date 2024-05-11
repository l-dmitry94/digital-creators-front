import { Link } from 'react-router-dom';
import scss from '../NotFound/NotFound.module.scss';

import { BiSolidCircle } from 'react-icons/bi';

const NotFound = () => {
    return (
        <div className={scss.notFoundContainer}>
            <div>
                <h1 className={scss.notFoundTitle}>404 - Page Not Found</h1>
                <p>Sorry, the page you are looking for could not be found</p>
            </div>
            <div className={scss.iconsFlex}>
                <div className={scss.iconBlue}>
                    <BiSolidCircle />
                </div>
                <div className={scss.iconRose}>
                    <BiSolidCircle />
                </div>
                <div className={scss.iconGreen}>
                    <BiSolidCircle />
                </div>
                <div className={scss.iconGrey}>
                    <BiSolidCircle />
                </div>
            </div>
            <button className={scss.button}>
                <Link to="/">Go to Home Page</Link>
            </button>
        </div>
    );
};

export default NotFound;
