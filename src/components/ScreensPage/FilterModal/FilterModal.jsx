import Modal from 'react-modal';
import icons from '../../../assets/icons/icons.svg';
import scss from './FilterModal.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeFitler } from '../../../redux/tasks/filter-slice';

const FilterModal = ({ isOpen, onClose }) => {
    const [selectedPriority, setSelectedPriority] = useState('');
    const dispatch = useDispatch();
    const handlePriorityChange = priority => {
        setSelectedPriority(priority);
    };
    const handleColorChange = event => {
        handlePriorityChange(event.target.value);
    };
    const handleReset = () => {
        setSelectedPriority('');
    };
    dispatch(changeFitler(selectedPriority));
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

            <h3 className={scss.title}>Filters</h3>
            <div className={scss.subtitle}>
                <h4 className={scss.label}>Label color</h4>
                <button onClick={handleReset} className={scss.show}>
                    Show all
                </button>
            </div>

            <div className={scss.buttonsContainer}>
                <label className={scss.radioText}>
                    <input
                        type="radio"
                        name="color"
                        value="Without"
                        onChange={handleColorChange}
                        checked={selectedPriority === 'Without'}
                    />
                    <span
                        className={scss.radioBtn}
                        style={{
                            backgroundColor: 'var( --theme-default-card-board)',
                        }}
                    ></span>
                    <span className={scss.radioLabel}> Without priority</span>
                </label>
                <label className={scss.radioText}>
                    <input
                        type="radio"
                        name="color"
                        value="Low"
                        onChange={handleColorChange}
                        checked={selectedPriority === 'Low'}
                    />
                    <span
                        className={scss.radioBtn}
                        style={{ backgroundColor: '#8FA1D0' }}
                    ></span>
                    <span className={scss.radioLabel}>Low</span>
                </label>
                <label className={scss.radioText}>
                    <input
                        type="radio"
                        name="color"
                        value="Medium"
                        onChange={handleColorChange}
                        checked={selectedPriority === 'Medium'}
                    />
                    <span
                        className={scss.radioBtn}
                        style={{ backgroundColor: '#E09CB5' }}
                    ></span>
                    <span className={scss.radioLabel}>Medium</span>
                </label>
                <label className={scss.radioText}>
                    <input
                        type="radio"
                        name="color"
                        value="High"
                        onChange={handleColorChange}
                        checked={selectedPriority === 'High'}
                    />
                    <span
                        className={scss.radioBtn}
                        style={{ backgroundColor: '#BEDBB0' }}
                    ></span>
                    <span className={scss.radioLabel}>High</span>
                </label>
            </div>
        </Modal>
    );
};

export default FilterModal;
