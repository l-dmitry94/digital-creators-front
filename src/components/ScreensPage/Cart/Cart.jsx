import { useSelector } from 'react-redux';
import TodoCart from '../TodoCart/TodoCart';
import scss from './Cart.module.scss';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { selectFilteredCards } from '../../../redux/tasks/tasks-selectors';

const Cart = ({ columnId }) => {
    const items = useSelector(selectFilteredCards);

    const filteredCards = items?.filter(
        ({ ref_column }) => ref_column === columnId
    );

    const cartsList = filteredCards.map(
        (
            {
                card_name,
                description,
                priority,
                deadline,
                ref_board,
                ref_column,
                _id,
            },
            index
        ) => (
            <TodoCart
                key={index}
                title={card_name}
                descr={description}
                priority={priority}
                deadline={deadline}
                boardId={ref_board}
                columnId={ref_column}
                cardId={_id}
            />
        )
    );
    return (
        <SimpleBar className={scss.cartScroll}>
            <ul className={scss.cartList}>{cartsList}</ul>
        </SimpleBar>
    );
};

export default Cart;
