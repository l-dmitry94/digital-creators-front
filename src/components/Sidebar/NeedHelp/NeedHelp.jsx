import { useState } from 'react';
import icons from '../../../assets/icons/icons.svg';
import scss from './NeedHelp.module.scss';
import CustomModal from '../../CustomModal/CustomModal.jsx';
import CustomInput from '../../CustomInput/CustomInput.jsx';

const NeedHelp = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className={scss.helpContainer}>
            <p className={scss.helpText}>
                If you need help with TaskPro, check out our support resources
                or reach out to our customer support team.
            </p>
            <div>
                <button onClick={openModal}>
                    {' '}
                    Need help?
                    <div className={scss.plus}>
                        <svg className={scss.plusIcon}>
                            <use href={`${icons}#icon-plus`}></use>
                        </svg>
                    </div>
                </button>
                <CustomModal isOpen={modalIsOpen} onClose={closeModal}>
                    <CustomInput />
                </CustomModal>
            </div>
        </div>
    );
};

export default NeedHelp;
