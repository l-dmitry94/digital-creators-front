import scss from './TodoCart.module.scss';
import TodoBtn from '../TodoBtn/TodoBtn';
import { useDispatch } from 'react-redux';
import CustomModal from '../../CustomModal/CustomModal';
import EditCard from '../../EditCard/EditCard';
import {
    fetchCards,
    removeCard,
} from '../../../redux/tasks/tasks-operations/tasks-cards-operations';
import { useState } from 'react';
//*, priorityColor
const TodoCart = ({
    title,
    descr,
    priority,
    deadline,
    columnId,
    boardId,
    cardId,
}) => {
    const [cardModalIsOpen, setCardModalIsOpen] = useState(false);

    const cardOpenModal = () => {
        setCardModalIsOpen(true);
    };

    const cardCloseModal = () => {
        setCardModalIsOpen(false);
    };

    const dispatch = useDispatch();
    const handleDelete = async () => {
        await dispatch(removeCard({ boardId, columnId, cardId }));
        dispatch(fetchCards({ boardId, columnId }));
    };
    console.log(
        `BoardID: ${boardId} , ColumnID: ${columnId}, CardID: ${cardId} `
    );
    return (
        <div className={scss.todoCart}>
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
                                style={{ backgroundColor: priority }}
                            ></span>
                            {priority}
                        </p>
                    </li>
                    <li>
                        <p className={scss.setName}>Deadline</p>
                        <p className={scss.setSign}>{deadline}</p>
                        {/* <div className={scss.setSign}>
                            <MyDatePicker />
                        </div> */}
                    </li>
                </ul>
                <div className={scss.btnBell}>
                    <TodoBtn iconName={'icon-bell'} />
                    <div className={scss.btnSetting}>
                        <TodoBtn iconName={'icon-arrow'} />
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoCart;
