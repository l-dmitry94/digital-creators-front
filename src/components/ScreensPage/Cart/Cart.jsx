import { useSelector } from 'react-redux';
import TodoCart from '../TodoCart/TodoCart';
import scss from './Cart.module.scss';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import {
    // selectCardItems,
    selectFilteredCards,
} from '../../../redux/tasks/tasks-selectors';

const Cart = ({ columnId }) => {
    // const cards = useSelector(selectCardItems);
    const items = useSelector(selectFilteredCards);

    const filteredCards = items.filter(
        ({ ref_column }) => ref_column === columnId
    );

    // const dispatch = useDispatch();
    // useEffect(() => {
    //     if (columns) {
    //         dispatch(fetchCards({ boardId, columnId }));
    //     }
    // }, [boardId, columnId, columns, dispatch]);

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
    console.log();
    return (
        <SimpleBar style={{ maxHeight: 470 }}>
            <ul className={scss.cartList}>{cartsList}</ul>
        </SimpleBar>
    );
};

export default Cart;
