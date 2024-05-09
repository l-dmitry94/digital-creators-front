import SubmitButton from '../../SubmitButton';
import Cart from '../Cart/Cart';
import NameColumn from '../NameColumn/NameColumn';
import AddCard from '../../AddCard/AddCard';
import { useState } from 'react';
import CustomModal from '../../CustomModal/CustomModal';
import scss from './MainDashboard.module.scss';

import AddColumn from '../../Popups/Column/AddColumn/AddColumn';

const MainDashboard = () => {
    const column = [
        { name: 'To do' },
        { name: 'In progress' },
        { name: 'Done' },
    ];

    const [cardModalIsOpen, setCardModalIsOpen] = useState(false);

    const [columnModalIsOpen, setColumnModalIsOpen] = useState(false);

    const columnModalOpen = () => {
        setColumnModalIsOpen(true);
    };

    const columnModalClose = () => {
        setColumnModalIsOpen(false);
    };

    const cardOpenModal = () => {
        setCardModalIsOpen(true);
    };

    const cardCloseModal = () => {
        setCardModalIsOpen(false);
    };

    const columns = column.map(({ name }, index) => (
        <div key={index} className={scss.column}>
            <NameColumn nameColumn={name} />
            <Cart />

            <div className={scss.btn}>
                <SubmitButton
                    onClick={cardOpenModal}
                    buttonText={'Add another cart'}
                />
                <CustomModal
                    isOpen={cardModalIsOpen}
                    onClose={cardCloseModal}
                    title={'Add card'}
                >
                    <AddCard />
                </CustomModal>
            </div>
        </div>
    ));

    return (
        <>
            {column && (
                <div className={scss.head}>
                    {columns}
                    <SubmitButton
                        onClick={columnModalOpen}
                        buttonText={'Add another column'}
                    />
                    <CustomModal
                        isOpen={columnModalIsOpen}
                        onClose={columnModalClose}
                        title={'Add column'}
                    >
                        <AddColumn />
                    </CustomModal>
                </div>
            )}
        </>
    );
};

export default MainDashboard;
