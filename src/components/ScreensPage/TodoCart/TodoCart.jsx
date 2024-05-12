import scss from './TodoCart.module.scss';
import TodoBtn from '../TodoBtn/TodoBtn';
//*, priorityColor
const TodoCart = ({ title, descr, priority, deadline }) => {
    let priorityText;

    switch (priority) {
        case '#8FA1D0':
            priorityText = 'Low';
            break;
        case '#E09CB5':
            priorityText = 'Medium';
            break;
        case '#BEDBB0':
            priorityText = 'High';
            break;
        case 'rgba(255, 255, 255, 0.3)':
            priorityText = 'Without priority';
            break;
        default:
            priority = 'rgba(255, 255, 255, 0.3)';
            priorityText = 'Without priority';
            break;
    }

    return (
        <div
            className={scss.todoCart}
            style={{ borderLeft: `4px solid ${priority}` }}
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
                                style={{ backgroundColor: priority }}
                            ></span>
                            {priorityText}
                        </p>
                    </li>
                    <li>
                        <p className={scss.setName}>Deadline</p>
                        <p className={scss.setSign}>{deadline}</p>
                    </li>
                </ul>
                <div className={scss.btnBell}>
                    <TodoBtn iconName={'icon-bell'} />
                    <div className={scss.btnSetting}>
                        <TodoBtn iconName={'icon-arrow'} />
                        <TodoBtn iconName={'icon-pencil'} />
                        <TodoBtn iconName={'icon-trash'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoCart;
