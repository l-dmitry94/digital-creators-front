import SubmitButton from '../../SubmitButton';
import Cart from '../Cart/Cart';
import NameColumn from '../NameColumn/NameColumn';
import scss from './MainDashboard.module.scss';

const MainDashboard = () => {
    const column = [
        { name: 'To do' },
        // { name: 'In progress' }
    ];

    const columns = column.map(({ name }, index) => (
        <div key={index} className={scss.column}>
            <NameColumn nameColumn={name} />
            <Cart />
            <SubmitButton buttonText={'Add another cart'} />
        </div>
    ));

    return (
        <>
            {column && (
                <div className={scss.head}>
                    {columns}
                    <SubmitButton buttonText={'Add another column'} />
                </div>
            )}
        </>
    );
};

export default MainDashboard;
