import scss from './TodoBtn.module.scss';
import icons from '../../../assets/icons/icons.svg';

const TodoBtn = ({ iconName }) => {
    return (
        <button type="button">
            <svg
                className={
                    iconName === 'icon-bell' ? scss.bellIcon : scss.todoIcon
                }
            >
                <use href={`${icons}#${iconName}`}></use>
            </svg>
        </button>
    );
};

export default TodoBtn;
