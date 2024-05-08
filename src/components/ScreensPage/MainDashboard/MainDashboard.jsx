import SubmitButton from '../../SubmitButton';
import Cart from '../Cart/Cart';
import NameColumn from '../NameColumn/NameColumn';
import TodoCart from '../TodoCart/TodoCart';
import AddCard from '../../AddCard/AddCard';
import { useState } from 'react';
import CustomModal from '../../CustomModal/CustomModal';
import scss from './MainDashboard.module.scss';

const MainDashboard = () => {
    const column = [
        { name: 'To do' },
        { name: 'In progress' },
        { name: 'Done' },
    ];

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const columns = column.map(({ name }, index) => (
        <div key={index} className={scss.column}>
            <NameColumn nameColumn={name} />
            <Cart />
            <div className={scss.btn}>
                <SubmitButton
                    onClick={openModal}
                    buttonText={'Add another cart'}
                />{' '}
                <CustomModal
                    isOpen={modalIsOpen}
                    onClose={closeModal}
                    buttonText={'Add'}
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
                    <SubmitButton onClick={openModal} buttonText={'Add another column'} />
                    <CustomModal
                    isOpen={modalIsOpen}
                    onClose={closeModal}
                    buttonText={'Add'}
                    title={'Add card'}
                >
                    <AddCard />
                </CustomModal>
                </div>
            )}
        </>
    );
};

export default MainDashboard;
