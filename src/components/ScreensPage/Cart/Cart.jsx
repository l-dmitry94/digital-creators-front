import { useDispatch, useSelector } from 'react-redux';
import TodoCart from '../TodoCart/TodoCart';
import scss from './Cart.module.scss';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import {
    selectCardItems,
    selectColumnItems,
} from '../../../redux/tasks/tasks-selectors';
import { useEffect } from 'react';
import { fetchCards } from '../../../redux/tasks/tasks-operations/tasks-cards-operations';
import { fetchColumns } from '../../../redux/tasks/tasks-operations/tasks-columns-operations';

const Cart = ({ boardId, columnId }) => {
    const cards = useSelector(selectCardItems);
    const columns = useSelector(selectColumnItems);
    const filteredCards = cards.filter(
        ({ ref_column }) => ref_column === columnId
    );
    console.log(filteredCards);
    const dispatch = useDispatch();

    useEffect(() => {
        if (filteredCards.length) {
            if (cards.length) {
                dispatch(fetchCards({ boardId, columnId }));
            }
        }
    }, [columnId, dispatch]);

    const cartsList = filteredCards.map(
        ({ card_name, description, priority, date }, index) => (
            <TodoCart
                key={index}
                title={card_name}
                descr={description}
                priority={priority}
                deadline={date}
            />
        )
    );

    return (
        <SimpleBar style={{ maxHeight: 470 }}>
            <ul className={scss.cartList}>{cartsList}</ul>
        </SimpleBar>
    );
};

export default Cart;
