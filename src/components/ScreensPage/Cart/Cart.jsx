import TodoCart from '../TodoCart/TodoCart';
import scss from './Cart.module.scss';

const Cart = () => {
    const carts = [
        {
            title: 'The Watch Spot Design',
            text: 'Create a visually stunning and eye-catching watch dial design that embodies our brands essence of sleek aesthetics and modern elegance.',
            prior: 'Low',
            date: '12/05/2023',
        },
        {
            title: 'The Watch Spot ',
            text: 'Create a visually stunning and eye-catching watch dial design that embodies our brands essence of sleek aesthetics and modern elegance.',
            prior: 'Low',
            date: '12/05/2023',
        },
    ];

    return (
        <ul className={scss.cartList}>
            {carts.map(({ title, text, prior, date }, index) => (
                <TodoCart
                    key={index}
                    title={title}
                    descr={text}
                    priority={prior}
                    deadline={date}
                />
            ))}
        </ul>
    );
};

export default Cart;
