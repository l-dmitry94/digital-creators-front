import Modal from 'react-modal';
import icons from '../../assets/icons/icons.svg';
import './CustomModal.scss';
import SubmitButton from '../SubmitButton/SubmitButton';

const CustomModal = ({ isOpen, onClose, buttonText, title, children }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            shouldCloseOnEsc={true}
            overlayClassName={'modal__overlay'}
            className={'modal__content'}
            closeTimeoutMS={300}
            ariaHideApp={false}
        >
            <button className="close" onClick={onClose}>
                <svg className="close__icon">
                    <use href={`${icons}#icon-close`}></use>
                </svg>
            </button>

            <h3 className="title">{title}</h3>

            {children}

            {buttonText && <SubmitButton buttonText={buttonText} />}
        </Modal>
    );
};

export default CustomModal;
