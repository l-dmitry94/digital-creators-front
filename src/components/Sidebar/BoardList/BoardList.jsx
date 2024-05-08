import { useState } from 'react';
import icons from '../../../assets/icons/icons.svg';
import scss from './BoardList.module.scss';
import CustomModal from '../../CustomModal/CustomModal.jsx';
import CreateNewBoard from '../../Popups/CreateNewBoard/CreateNewBoard.jsx';

const BoardList = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className={scss.boardsFlex}>
            <h2 className={scss.boardsTitle}>My boards</h2>
            <div className={scss.boardsContainer}>
                <p className={scss.createText}>Create New Board</p>
                <button className={scss.buttonWrapper} onClick={openModal}>
                    <div className={scss.plus}>
                        <svg className={scss.plusIcon}>
                            <use href={`${icons}#icon-plus`}></use>
                        </svg>
                    </div>
                </button>
                <CustomModal
                    title={'New board'}
                    isOpen={modalIsOpen}
                    onClose={closeModal}
                >
                    <CreateNewBoard onClose={closeModal} />
                </CustomModal>
            </div>
        </div>
    );
};

export default BoardList;
