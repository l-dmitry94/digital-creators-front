/* eslint-disable react-hooks/exhaustive-deps */
import scss from './BoardLink.module.scss';
import sprite from '../../../assets/icons/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoardItems } from '../../../redux/tasks/tasks-selectors';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CustomModal from '../../CustomModal/CustomModal';
import CreateNewBoard from '../../Popups/CreateNewBoard/CreateNewBoard';
import {
    editBoard,
    fetchBoards,
    removeBoard,
} from '../../../redux/tasks/tasks-operations/tasks-boards-operations';
import { useAuth } from '../../../hooks/useAuth';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const BoardLink = () => {
    const boards = useSelector(selectBoardItems);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [id, setId] = useState(null);
    const dispatch = useDispatch();
    const { isLogin } = useAuth();
    const navigate = useNavigate();

    const openModal = id => {
        setModalIsOpen(true);
        setId(id);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const deleteBoard = id => {
        dispatch(removeBoard(id)).then(() => {
            dispatch(fetchBoards());
        });
    };

    useEffect(() => {
        if (isLogin) {
            dispatch(fetchBoards());
        }
    }, [isLogin, dispatch]);

    useEffect(() => {
        if (isLogin) {
            if (boards.length) {
                navigate(`/home/${boards[0]?.board_name.toLowerCase()}`);
            }
            if (!boards.length) {
                navigate('/home');
            }
        }
    }, [boards]);

    const list = boards.map(({ _id, board_name, icon }) => (
        <NavLink
            key={_id}
            to={board_name.toLowerCase()}
            className={scss.linkItem}
        >
            <div className={scss.linkWrapper}>
                <svg className={scss.svgIcon}>
                    <use href={`${sprite}#${icon}`}></use>
                </svg>

                <p className={scss.linkTitle}>{board_name}</p>
            </div>

            <div className={scss.control}>
                <button
                    className={scss.controlButton}
                    onClick={() => openModal(_id)}
                >
                    <svg className={scss.controlIcon}>
                        <use href={`${sprite}#icon-pencil`}></use>
                    </svg>
                </button>
                <button
                    className={scss.controlButton}
                    onClick={() => deleteBoard(_id)}
                >
                    <svg className={scss.controlIcon}>
                        <use href={`${sprite}#icon-trash`}></use>
                    </svg>
                </button>
            </div>
        </NavLink>
    ));

    return (
        <div>
            <ul className={scss.linkFlex}>{list}</ul>
            <CustomModal
                isOpen={modalIsOpen}
                onClose={closeModal}
                title="Edit Board"
            >
                <CreateNewBoard
                    editBoard={editBoard}
                    onClose={closeModal}
                    id={id}
                />
            </CustomModal>
        </div>
    );
};

export default BoardLink;
