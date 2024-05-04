import SubmitButton from '../../SubmitButton';
import NameColumn from '../NameColumn/NameColumn';
import TodoCarts from '../TodoCarts';
import scss from './MainDashboard.module.scss';

const MainDashboard = () => {
    return (
        <div className={scss.head}>
            {/* <SubmitButton buttonText={'Add another column'} /> */}
            <NameColumn />
            <TodoCarts />
        </div>
    );
};

export default MainDashboard;
