import { useState } from 'react';
import icons from '../../../assets/icons/icons.svg';
import scss from './NeedHelp.module.scss';
import CustomModal from '../../CustomModal/CustomModal.jsx';
import flowerpot from '../images/flowerpot.svg';
import NeedHelpsPopup from '../../Popups/NeedHelpsPopup/NeedHelpsPopup.jsx';

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
            <img className={scss.flowerpot} src={flowerpot} alt="Flowerpot" />
            <div>
                <p className={scss.helpText}>
                    If you need help with{' '}
                    <span className={scss.helpLogoText}>TaskPro</span>, check
                    out our support resources or reach out to our customer
                    support team.
                </p>
                <button className={scss.helpButton} onClick={openModal}>
                    <div className={scss.question}>
                        <svg className={scss.questionIcon}>
                            <use href={`${icons}#icon-question`}></use>
                        </svg>
                    </div>
                    <p className={scss.helpButtonText}>Need help?</p>
                </button>
                <CustomModal isOpen={modalIsOpen} onClose={closeModal}>
                    <NeedHelpsPopup />
                </CustomModal>
            </div>
        </div>
    );
};

export default NeedHelp;
