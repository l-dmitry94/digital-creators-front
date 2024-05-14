import { useState } from 'react';
import Container from '../../Container';
import scss from './StartPage.module.scss';
import CustomModal from '../../CustomModal/CustomModal';
import CreateNewBoard from '../../Popups/CreateNewBoard/CreateNewBoard';

const StartPage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <Container>
            <div className={scss.startPage}>
                <p className={scss.text}>
                    Before starting your project, it is essential{' '}
                    <span className={scss.span} onClick={openModal}>
                        to create a board
                    </span>{' '}
                    to visualize and track all the necessary tasks and
                    milestones. This board serves as a powerful tool to organize
                    the workflow and ensure effective collaboration among team
                    members.
                </p>
            </div>
            <CustomModal
                title={'New board'}
                isOpen={modalIsOpen}
                onClose={closeModal}
            >
                <CreateNewBoard onClose={closeModal} />
            </CustomModal>
        </Container>
    );
};

export default StartPage;
