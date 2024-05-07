import scss from './TodoCart.module.scss';
import TodoBtn from '../TodoBtn/TodoBtn';

const TodoCart = ({ title, descr, priority, deadline }) => {
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
                        <p className={scss.setSign}>{priority}</p>
                    </li>
                    <li>
                        <p className={scss.setName}>Deadline</p>
                        <p className={scss.setSign}>{deadline}</p>
                    </li>
                </ul>
                <div className={scss.btnSetting}>
                    <TodoBtn iconName={'icon-bell'} />
                    <TodoBtn iconName={'icon-arrow'} />
                    <TodoBtn iconName={'icon-pencil'} />
                    <TodoBtn iconName={'icon-trash'} />
                </div>
            </div>
        </div>
    );
};

export default TodoCart;
