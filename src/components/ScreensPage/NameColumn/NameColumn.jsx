import scss from './NameColumn.module.scss';
import TodoBtn from '../TodoBtn/TodoBtn';
import EditColumn from '../../Popups/Column/EditColumn/EditColumn';
import CustomModal from '../../CustomModal/CustomModal';
import { useState } from 'react';

const NameColumn = ({ nameColumn }) => {
    const [columnModalIsOpen, setColumnModalIsOpen] = useState(false);

    const columnModalOpen = () => {
        setColumnModalIsOpen(true);
    };

    const columnModalClose = () => {
        setColumnModalIsOpen(false);
    };
    return (
        <div className={scss.nameColumn}>
            <p className={scss.name}>{nameColumn}</p>
            <div className={scss.nameColumnBtn}>
                <TodoBtn onClick={columnModalOpen} iconName={'icon-pencil'} />
                <TodoBtn iconName={'icon-trash'} />
                <CustomModal
                    isOpen={columnModalIsOpen}
                    onClose={columnModalClose}
                    title={'Edit column'}
                >
                    <EditColumn />
                </CustomModal>
            </div>
        </div>
    );
};

export default NameColumn;
