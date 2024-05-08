import TodoCart from '../TodoCart/TodoCart';
import scss from './Cart.module.scss';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

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
        {
            title: 'The Watch Spot ',
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
        {
            title: 'The Watch Spot ',
            text: 'Create a visually stunning and eye-catching watch dial design that embodies our brands essence of sleek aesthetics and modern elegance.',
            prior: 'Low',
            date: '12/05/2023',
        },
    ];

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
