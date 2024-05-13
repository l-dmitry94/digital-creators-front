import { useDispatch, useSelector } from 'react-redux';
import { selectColumnItems } from '../../../redux/tasks/tasks-selectors';
import scss from './ChangeCardColumn.module.scss';
import icons from '../../../assets/icons/icons.svg';
import {
    changeCardColumnById,
    fetchCards,
} from '../../../redux/tasks/tasks-operations/tasks-cards-operations';
import { useEffect } from 'react';

const ChangeCardColumn = ({ boardId, cardId, columnId, onClose }) => {
    const columns = useSelector(selectColumnItems);
    const dispatch = useDispatch();

    const filteredColumns = columns.filter(({ _id }) => columnId !== _id);

    useEffect(() => {}, [boardId, columnId, dispatch]);

    const dispatchChangedColumnCard = (id, cardId, boardId, columnId) => {
        const dispatchResult = dispatch(
            changeCardColumnById({
                newColumn: id,
                card_id: cardId,
                boardId,
                columnId,
            })
        ).then(() => dispatch(fetchCards({ boardId, columnId })));

        if (dispatchResult) {
            onClose();
        }
    };

    const columnsList = filteredColumns.map(({ column_name, _id }) => (
        <li
            key={_id}
            className={scss.list}
            onClick={() =>
                dispatchChangedColumnCard(_id, cardId, boardId, columnId)
            }
        >
            <button className={scss.button}>
                <p className={scss.text}>{column_name}</p>
                <svg className={scss.icon}>
                    <use href={`${icons}#icon-arrow`}></use>
                </svg>
            </button>
        </li>
    ));

    return <ul className={scss.list}>{columnsList}</ul>;
};

export default ChangeCardColumn;
