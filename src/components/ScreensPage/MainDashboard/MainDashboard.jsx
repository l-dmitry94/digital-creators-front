import SubmitButton from '../../SubmitButton';
import Cart from '../Cart/Cart';
import NameColumn from '../NameColumn/NameColumn';
import AddCard from '../../AddCard/AddCard';
import { useEffect, useState } from 'react';
import CustomModal from '../../CustomModal/CustomModal';
import scss from './MainDashboard.module.scss';
import AddColumn from '../../Popups/Column/AddColumn/AddColumn';
import { useDispatch, useSelector } from 'react-redux';
import { selectColumnItems } from '../../../redux/tasks/tasks-selectors';
import { fetchColumns } from '../../../redux/tasks/tasks-operations/tasks-columns-operations';
import { fetchCards } from '../../../redux/tasks/tasks-operations/tasks-cards-operations';

const MainDashboard = ({ board }) => {
    const columns = useSelector(selectColumnItems);
    const [columnById, setColumnById] = useState('');
    const dispatch = useDispatch();
    const [cardModalIsOpen, setCardModalIsOpen] = useState(false);

    const [columnModalIsOpen, setColumnModalIsOpen] = useState(false);
    useEffect(() => {
        if (board) {
            dispatch(fetchColumns(board._id));
        }
    }, [board, dispatch]);

    useEffect(() => {
        if (columns) {
            columns.forEach(column => {
                dispatch(
                    fetchCards({ boardId: board?._id, columnId: column?._id })
                );
            });
        }
    }, [columns, board?._id, dispatch]);

    const columnModalOpen = () => {
        setColumnModalIsOpen(true);
    };

    const columnModalClose = () => {
        setColumnModalIsOpen(false);
    };

    const cardOpenModal = id => {
        setCardModalIsOpen(true);
        setColumnById(id);
    };

    const cardCloseModal = () => {
        setCardModalIsOpen(false);
    };

    const column = columns?.map(({ column_name, _id, ref_board }) => (
        <div key={_id} className={scss.column}>
            <NameColumn
                nameColumn={column_name}
                columnId={_id}
                boardId={ref_board}
            />
            <Cart boardId={board._id} columnId={_id} />

            <div className={scss.btn}>
                <SubmitButton
                    onClick={() => cardOpenModal(_id)}
                    buttonText={'Add another cart'}
                />
            </div>
        </div>
    ));

    return (
        <>
            {columns && (
                <div className={scss.head}>
                    {column}
                    <div className={scss.subbtn}>
                        <SubmitButton
                            onClick={columnModalOpen}
                            buttonText={'Add another column'}
                        />
                    </div>
                    <CustomModal
                        isOpen={columnModalIsOpen}
                        onClose={columnModalClose}
                        title={'Add column'}
                    >
                        <AddColumn id={board?._id} onClose={columnModalClose} />
                    </CustomModal>
                </div>
            )}

            <CustomModal
                isOpen={cardModalIsOpen}
                onClose={cardCloseModal}
                title={'Add card'}
            >
                <AddCard
                    boardId={board?._id}
                    columnId={columnById}
                    onClose={cardCloseModal}
                />
            </CustomModal>
        </>
    );
};

export default MainDashboard;
