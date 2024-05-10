import scss from './BoardLink.module.scss';
import sprite from '../../../assets/icons/icons.svg';
import { useSelector } from 'react-redux';
import { selectBoards } from '../../../redux/tasks/tasks-selectors';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import CustomModal from '../../CustomModal/CustomModal';
import CreateNewBoard from '../../Popups/CreateNewBoard/CreateNewBoard';
import { editBoard } from '../../../redux/tasks/tasks-operations/tasks-boards-operations';

const BoardLink = () => {
    const boards = useSelector(selectBoards);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <>
            <ul className={scss.linkFlex}>
                {boards.map(({ _id, board_name, icon }) => (
                    <NavLink key={icon} to={_id} className={scss.linkItem}>
                        <div className={scss.linkWrapper}>
                            <svg className={scss.svgIcon}>
                                <use href={`${sprite}#${icon}`}></use>
                            </svg>

                            <p className={scss.linkTitle}>{board_name}</p>
                        </div>

                        <div className={scss.control}>
                            <button
                                className={scss.controlButton}
                                onClick={openModal}
                            >
                                <svg className={scss.controlIcon}>
                                    <use href={`${sprite}#icon-pencil`}></use>
                                </svg>
                            </button>
                            <button className={scss.controlButton}>
                                <svg className={scss.controlIcon}>
                                    <use href={`${sprite}#icon-trash`}></use>
                                </svg>
                            </button>
                        </div>
                    </NavLink>
                ))}
            </ul>

            <CustomModal
                isOpen={modalIsOpen}
                onClose={closeModal}
                title="Edit Board"
            >
                <CreateNewBoard editBoard={editBoard} onClose={closeModal} />
            </CustomModal>
        </>
    );
};

export default BoardLink;
