import { useDispatch, useSelector } from 'react-redux';
import TodoCart from '../TodoCart/TodoCart';
import scss from './Cart.module.scss';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { selectCardItems } from '../../../redux/tasks/tasks-selectors';
import { useEffect } from 'react';
import { fetchCards } from '../../../redux/tasks/tasks-operations/tasks-cards-operations';

const Cart = ({ boardId, columnId }) => {
    const carts = useSelector(selectCardItems);
    const dispatch = useDispatch();

    useEffect(() => {
        if (boardId && columnId) {
            dispatch(fetchCards({ boardId, columnId }));
        }
    }, [boardId, columnId, dispatch]);

    const cartsList = carts.map(({ title, text, prior, date }, index) => (
        <TodoCart
            key={index}
            title={title}
            descr={text}
            priority={prior}
            deadline={date}
        />
    ));

    return (
        <SimpleBar style={{ maxHeight: 640 }}>
            <ul className={scss.cartList}>{cartsList}</ul>
        </SimpleBar>
    );
};

export default Cart;
