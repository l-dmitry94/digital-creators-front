import NameColumn from '../NameColumn/NameColumn';
import scss from './TodoCarts.module.scss';
import icons from '../../../assets/icons/icons.svg';

const TodoCarts = () => {
    return (
        <div className={scss.todoCart}>
            <div className={scss.cartTask}>
                <h3 className={scss.title}>The Watch Spot Design</h3>
                <p className={scss.text}>
                    Create a visually stunning and eye-catching watch dial
                    design that embodies our brands essence of sleek aesthetics
                    and modern elegance. Your design should be unique,
                    innovative, and reflective of the latest trends in watch
                    design.
                </p>
            </div>
            <div className={scss.cartSetting}>
                <ul className={scss.listSetting}>
                    <li>
                        <p className={scss.setName}>Priority</p>
                        <p className={scss.setSign}>Low</p>
                    </li>
                    <li>
                        <p className={scss.setName}>Deadline</p>
                        <p className={scss.setSign}>12/05/2023</p>
                    </li>
                </ul>
                <div className={scss.btnSetting}>
                    <button className={scss.btn}>
                        <svg className={scss.settingIcon}>
                            <use href={`${icons}#icon-arrow`}></use>
                        </svg>
                    </button>
                    <button className={scss.btn}>
                        <svg className={scss.settingIcon}>
                            <use href={`${icons}#icon-pencil`}></use>
                        </svg>
                    </button>
                    <button className={scss.btn}>
                        <svg className={scss.settingIcon}>
                            <use href={`${icons}#icon-trash`}></use>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TodoCarts;
