import Container from '../Container/Container.jsx';
import { useState } from 'react';
//import { useSelector } from 'react-redux';
import CustomSelect from '../CustomSelect/CustomSelect.jsx';
import styles from './Header.module.scss';
import icons from '../../assets/icons/icons.svg';
//import { selectUser } from '../../redux/auth/auth-selectors.js';

const Header = ({ handleClick, isOpenSidebar }) => {
    const [isShowSidebar] = useState(false);
    // const userInfo = useSelector(selectUser);

    return (
        <header>
            <Container>
                <div className={styles.box}>
                    {!isOpenSidebar && (
                        <button
                            className={styles.btnBurger}
                            type="button"
                            onClick={() => handleClick(!isShowSidebar)}
                        >
                            <svg>
                                <use href={`${icons}#icon-burger`}></use>
                            </svg>
                        </button>
                    )}
                    <div className={styles.rightSide}>
                        <CustomSelect />
                        <div className={styles.userInfo}>
                            <p>Name</p>
                            <img
                                src="https://wallpapercave.com/wp/wp4100932.jpg"
                                width={32}
                                height={32}
                                alt="photo"
                            ></img>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
