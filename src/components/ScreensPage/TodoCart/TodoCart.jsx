import scss from './TodoCart.module.scss';
import TodoBtn from '../TodoBtn/TodoBtn';
import { useDispatch, useSelector } from 'react-redux';
import CustomModal from '../../CustomModal/CustomModal';
import EditCard from '../../EditCard/EditCard';
import {
    fetchCards,
    removeCard,
} from '../../../redux/tasks/tasks-operations/tasks-cards-operations';
import { useEffect, useState } from 'react';
import ChangeCardColumn from '../../Popups/ChangeCardColumn/ChangeCardColumn';
import { selectColumnItems } from '../../../redux/tasks/tasks-selectors';

const TodoCart = ({
    title,
    descr,
    priority,
    deadline,
    columnId,
    boardId,
    cardId,
}) => {
    let priorityColor;

    switch (priority) {
        case 'Low':
            priorityColor = '#8FA1D0';
            break;
        case 'Medium':
            priorityColor = '#E09CB5';
            break;
        case 'High':
            priorityColor = '#BEDBB0';
            break;
        case 'Without':
            priorityColor = 'var(--theme-default-card-board)';
            break;
        default:
            priority = 'Without';
            priorityColor = 'rgba(255, 255, 255, 0.3)';
            break;
    }

    const [cardModalIsOpen, setCardModalIsOpen] = useState(false);
    const [changeCardModalIsOpen, setChangeCardModalIsOpen] = useState(false);
    const [isDeadlineToday, setIsDeadlineToday] = useState(false);
    const columns = useSelector(selectColumnItems);

    useEffect(() => {
        const today = new Date();
        const monthNumber = (today.getMonth() + 1).toString().padStart(2, '0');
        const day = today.getDate().toString().padStart(2, '0');
        const year = today.getFullYear();
        const formattedToday = `${day}/${monthNumber}/${year}`;
        setIsDeadlineToday(deadline === formattedToday);
    }, [deadline]);

    const cardOpenModal = () => {
        setCardModalIsOpen(true);
    };

    const cardCloseModal = () => {
        setCardModalIsOpen(false);
    };

    const changeCardOpenModal = () => {
        setChangeCardModalIsOpen(true);
    };

    const changeCardCloseModal = () => {
        setChangeCardModalIsOpen(false);
    };

    const dispatch = useDispatch();
    const handleDelete = async () => {
        await dispatch(removeCard({ boardId, columnId, cardId }));
        dispatch(fetchCards({ boardId, columnId }));
    };

    return (
        <div
            className={scss.todoCart}
            style={{ borderLeft: `4px solid ${priorityColor}` }}
        >
            <div className={scss.cartTask}>
                <h4 className={scss.title}>{title}</h4>
                <p className={scss.text}>{descr} </p>
            </div>
            <div className={scss.cartSetting}>
                <ul className={scss.listSetting}>
                    <li>
                        <p className={scss.setName}>Priority</p>
                        <p className={scss.priorityContainer}>
                            <span
                                className={scss.priorityDot}
                                style={{ backgroundColor: priorityColor }}
                            ></span>
                            {priority}
                        </p>
                    </li>
                    <li>
                        <p className={scss.setName}>Deadline</p>
                        <p className={scss.setSign}>{deadline}</p>
                    </li>
                </ul>
                <div className={scss.btnBell}>
                    {isDeadlineToday && (
                        <div className={scss.btnBell}>
                            <TodoBtn iconName={'icon-bell'} />
                        </div>
                    )}
                    <div className={scss.btnSetting}>
                        {columns.length > 1 && (
                            <TodoBtn
                                iconName={'icon-arrow'}
                                onClick={changeCardOpenModal}
                            />
                        )}

                        <TodoBtn
                            onClick={cardOpenModal}
                            iconName={'icon-pencil'}
                        />
                        <TodoBtn
                            onClick={handleDelete}
                            iconName={'icon-trash'}
                        />
                        <CustomModal
                            isOpen={cardModalIsOpen}
                            onClose={cardCloseModal}
                            title={'Edit card'}
                        >
                            <EditCard
                                boardId={boardId}
                                columnId={columnId}
                                cardId={cardId}
                                onClose={cardCloseModal}
                            />
                        </CustomModal>
                        <CustomModal
                            isOpen={changeCardModalIsOpen}
                            onClose={changeCardCloseModal}
                        >
                            <ChangeCardColumn
                                boardId={boardId}
                                columnId={columnId}
                                cardId={cardId}
                                onClose={changeCardCloseModal}
                            />
                        </CustomModal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoCart;
