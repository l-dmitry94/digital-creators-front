import favicon from '/favicon.svg';
import styles from './Logo.module.scss';

const Logo = () => {
    return (
        <nav className={styles.logoContainer}>
            <img src={favicon} alt="Favicon" />
            <h1 className={styles.logoTitle}>Task Pro</h1>
        </nav>
    );
};

export default Logo;
