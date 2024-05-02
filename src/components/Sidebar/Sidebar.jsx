import Logo from './Logo/Logo.jsx';
import BoardList from './BoardList/BoardList.jsx';
import NeedHelp from './NeedHelp/NeedHelp.jsx';
import scss from './Sidebar.module.scss';

const Sidebar = () => {
    return (
        <div className={scss.sidebar}>
            <div className={scss.logoBordFlex}>
                <Logo />
                <BoardList />
            </div>
            <div>
                <NeedHelp />
                <button>Logout</button>
            </div>
        </div>
    );
};

export default Sidebar;
