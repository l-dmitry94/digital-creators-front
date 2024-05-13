import Container from '../Container/Container.jsx';
import { useState } from 'react';

import CustomSelect from '../CustomSelect/CustomSelect.jsx';
import EditUser from '../Popups/EditUser/EditUser.jsx';
import CustomModal from '../CustomModal/CustomModal.jsx';
import styles from './Header.module.scss';
import icons from '../../assets/icons/icons.svg';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/auth-selectors.js';

const Header = ({ handleClick, isOpenSidebar }) => {
    const [isShowSidebar] = useState(false);
    const user = useSelector(selectUser);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

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
                        <button
                            type="button"
                            className={styles.userInfo}
                            onClick={openModal}
                        >
                            {user && <p>{user.username}</p>}
                            <img
                                src={
                                    user.avatarURL
                                        ? user.avatarURL
                                        : 'https://wallpapercave.com/wp/wp4100932.jpg'
                                }
                            />
                        </button>
                    </div>
                    <CustomModal
                        title="Edit profile"
                        isOpen={modalIsOpen}
                        onClose={closeModal}
                    >
                        <EditUser closeModal={closeModal} />
                    </CustomModal>
                </div>
            </Container>
        </header>
    );
};

export default Header;
