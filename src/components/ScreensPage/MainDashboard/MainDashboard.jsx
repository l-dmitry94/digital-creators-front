import SubmitButton from '../../SubmitButton';
import NameColumn from '../NameColumn/NameColumn';
import TodoCart from '../TodoCart/TodoCart';
import scss from './MainDashboard.module.scss';

const MainDashboard = () => {
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

    const column = [{ name: 'To do' }, { name: 'In progress' }];

    console.log(carts.length);
    console.log(TodoCart.length);

    column.map(col => {
        console.log(col.name);
    });

    return (
        <div>
            {carts ? (
                <div className={scss.right}>
                    {column ? (
                        <div className={scss.head}>
                            {column.map(({ name }, index) => (
                                <div key={index} className={scss.column}>
                                    <NameColumn nameColumn={name} />
                                    <ul className={scss.cartList}>
                                        {carts.map(
                                            (
                                                { title, text, prior, date },
                                                index
                                            ) => (
                                                <TodoCart
                                                    key={index}
                                                    title={title}
                                                    descr={text}
                                                    priority={prior}
                                                    deadline={date}
                                                />
                                            )
                                        )}
                                    </ul>
                                    <SubmitButton
                                        buttonText={'Add another cart'}
                                    />
                                </div>
                            ))}
                            <SubmitButton buttonText={'Add another column'} />
                        </div>
                    ) : (
                        <SubmitButton buttonText={'Add another column'} />
                    )}
                </div>
            ) : (
                <SubmitButton buttonText={'Add another column'} />
            )}
        </div>
    );
};

export default MainDashboard;
