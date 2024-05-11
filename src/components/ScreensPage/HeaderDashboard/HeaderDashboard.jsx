import scss from './HeaderDashboard.module.scss';
import icons from '../../../assets/icons/icons.svg';
import { useState } from 'react';
import FilterModal from '../FilterModal/FilterModal';
import Container from '../../Container';

const HeaderDashboard = ({ boardName }) => {
    const [filterModalIsOpen, setFilterModalIsOpen] = useState(false);

    const filterOpenModal = () => {
        setFilterModalIsOpen(true);
    };

    const filterCloseModal = () => {
        setFilterModalIsOpen(false);
    };

    return (
        <Container>
            <div className={scss.head}>
                <h4 className={scss.boardName}>{boardName}</h4>
                <button className={scss.btn} onClick={filterOpenModal}>
                    <svg className={scss.filterIcon}>
                        <use href={`${icons}#icon-filter`}></use>
                    </svg>
                    Filters
                </button>
                <FilterModal
                    isOpen={filterModalIsOpen}
                    onClose={filterCloseModal}
                ></FilterModal>
            </div>
        </Container>
    );
};

export default HeaderDashboard;
