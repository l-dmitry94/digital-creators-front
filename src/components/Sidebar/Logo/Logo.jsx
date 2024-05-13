import icons from '../../../assets/icons/icons.svg';
import scss from './Logo.module.scss';

const Logo = () => {
    return (
        <nav className={scss.logoContainer}>
            <div className={scss.logo}>
                <svg className={scss.logoIcon}>
                    <use href={`${icons}#icon-logo`} />
                </svg>
            </div>
            <h1 className={scss.logoTitle}>Task Pro</h1>
        </nav>
    );
};

export default Logo;
