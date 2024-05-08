import SubmitButton from '../../SubmitButton';
import Cart from '../Cart/Cart';
import NameColumn from '../NameColumn/NameColumn';
import scss from './MainDashboard.module.scss';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const MainDashboard = () => {
    const column = [
        { name: 'To do' },
        { name: 'In progress' },
        { name: 'Done' },
    ];

    const columns = column.map(({ name }, index) => (
        <div key={index} className={scss.column}>
            <NameColumn nameColumn={name} />
            {/* <SimpleBar style={{ maxHeight: 640 }}> */}
            <Cart />
            {/* </SimpleBar> */}
            <div className={scss.btn}>
                <SubmitButton buttonText={'Add another cart'} />{' '}
            </div>
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
