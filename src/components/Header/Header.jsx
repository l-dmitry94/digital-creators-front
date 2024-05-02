import Container from '../Container/Container.jsx';
import { useState } from 'react';
//import { useSelector } from 'react-redux';
import Select from 'react-select';
import styles from './Header.module.scss';
import icons from '../../assets/icons/icons.svg';
//import { selectUser } from '../../redux/auth/auth-selectors.js';

const Header = ({ handleClick }) => {
    const [, setSelectedOption] = useState('Theme');
    const [isOpenSidebar] = useState(false);
    // const userInfo = useSelector(selectUser);

    // handleClick(isOpenSidebar);

    // const customStyles = {
    //     control: provided => ({
    //         ...provided,
    //         backgroundColor: 'inherit',
    //         border: 'none',
    //         color: 'white',
    //         '&:hover': {
    //             borderColor: 'var(--dark-bg)',
    //             boxShadow: 'var(--dark-bg)',
    //         },
    //     }),
    //     valueContainer: provided => ({
    //         ...provided,
    //         display: 'flex',
    //         padding: '0px',
    //     }),
    //     // indicatorContainer: (provided) => ({
    //     //       ...provided,
    //     //       padding: '0px',
    //     // }),
    //     indicatorContainer: styles => ({ padding: '0px' }),
    //     placeholder: styles => ({ color: 'var(--white)' }),
    //     singleValue: styles => ({ color: 'var(--white)' }),
    //     indicatorSeparator: styles => ({ display: 'none' }),
    //     menuList: base => ({
    //         ...base,
    //         backgroundColor: 'var(--dark-bg)',
    //     }),

    //     option: (provided, state) => ({
    //         ...provided,
    //         color: state.isSelected ? 'var(--light-green)' : 'var(--white)',
    //         backgroundColor: 'var(--dark-bg)',
    //     }),
    // };
    const options = [
        { value: 'light', label: 'Light' },
        { value: 'dark', label: 'Dark' },
        { value: 'violet', label: 'Violet' },
    ];

    return (
        <Container>
            <header>
                <button
                    className={styles.btnBurger}
                    type="button"
                    onClick={() => handleClick(!isOpenSidebar)}
                >
                    <svg>
                        <use href={`${icons}#icon-burger`}></use>
                    </svg>
                </button>
                <div className={styles.rightSide}>
                    <Select
                        onChange={setSelectedOption}
                        options={options}
                        unstyled
                        placeholder="Theme"
                        className="react-select-container"
                        classNamePrefix="react-select"
                    />
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
            </header>
        </Container>
    );
};

export default Header;
