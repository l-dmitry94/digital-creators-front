import { useState } from 'react';
import line from '../images/line.svg';
import plus from '../images/plus.svg';
import styles from './BoardList.module.scss';
import CustomModal from '../../CustomModal/CustomModal.jsx';

const BoardList = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <h2 className={styles.boardsTitle}>My boards</h2>
            <img src={line} alt="line" />
            <div className={styles.boardsContainer}>
                <p className={styles.createText}>Create New Board</p>
                <button onClick={openModal}>
                    <img src={plus} alt="plus" />
                </button>
                <CustomModal isOpen={modalIsOpen} onClose={closeModal} />
            </div>
            <img src={line} alt="line" />
        </div>
    );
};

export default BoardList;
