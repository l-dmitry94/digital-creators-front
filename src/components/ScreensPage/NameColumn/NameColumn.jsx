import scss from './NameColumn.module.scss';
import TodoBtn from '../TodoBtn/TodoBtn';

const NameColumn = ({ nameColumn }) => {
    return (
        <div className={scss.nameColumn}>
            <p className={scss.name}>{nameColumn}</p>
            <div className={scss.nameColumnBtn}>
                <TodoBtn iconName={'icon-pencil'} />
                <TodoBtn iconName={'icon-trash'} />
            </div>
        </div>
    );
};

export default NameColumn;
