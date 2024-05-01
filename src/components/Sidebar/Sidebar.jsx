import { useState } from 'react';
import CustomModal from '../CustomModal';

const Sidebar = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <>
            <button onClick={openModal}>Click me</button>

            <CustomModal
                isOpen={modalIsOpen}
                onClose={closeModal}
                buttonText="Create"
                title="New board"
            ></CustomModal>
        </>
    );
};

export default Sidebar;
