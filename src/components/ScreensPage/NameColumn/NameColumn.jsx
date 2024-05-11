import scss from './NameColumn.module.scss';
import TodoBtn from '../TodoBtn/TodoBtn';
import EditColumn from '../../Popups/Column/EditColumn/EditColumn';
import CustomModal from '../../CustomModal/CustomModal';
import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
    fetchColumns,
    removeColumn,
} from '../../../redux/tasks/tasks-operations/tasks-columns-operations';
import { selectColumnItems } from '../../../redux/tasks/tasks-selectors';
const NameColumn = ({ nameColumn, boardId, columnId }) => {
    const [columnModalIsOpen, setColumnModalIsOpen] = useState(false);
    const columns = useSelector(selectColumnItems);
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(removeColumn({ boardId, columnId }));
    };
    const columnModalOpen = () => {
        setColumnModalIsOpen(true);
    };

    const columnModalClose = () => {
        setColumnModalIsOpen(false);
    };

    useEffect(() => {
        dispatch(fetchColumns(boardId));
    }, [columns, boardId, dispatch]);

    return (
        <div className={scss.nameColumn}>
            <p className={scss.name}>{nameColumn}</p>
            <div className={scss.nameColumnBtn}>
                <TodoBtn onClick={columnModalOpen} iconName={'icon-pencil'} />
                <TodoBtn onClick={handleDelete} iconName={'icon-trash'} />
                <CustomModal
                    isOpen={columnModalIsOpen}
                    onClose={columnModalClose}
                    title={'Edit column'}
                >
                    <EditColumn
                        boardId={boardId}
                        columnId={columnId}
                        onClose={columnModalClose}
                    />
                </CustomModal>
            </div>
        </div>
    );
};

export default NameColumn;
