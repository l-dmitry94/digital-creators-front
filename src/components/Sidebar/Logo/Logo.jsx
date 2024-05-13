import favicon from '/favicon.svg';
import scss from './Logo.module.scss';

const Logo = () => {
    return (
        <nav className={scss.logoContainer}>
            <img className={scss.logo} src={favicon} alt="Favicon" />
            <h1 className={scss.logoTitle}>Task Pro</h1>
        </nav>
    );
};

export default Logo;
