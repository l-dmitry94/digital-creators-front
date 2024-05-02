import Logo from './Logo/Logo.jsx';
import BoardList from './BoardList/BoardList.jsx';
import NeedHelp from './NeedHelp/NeedHelp.jsx';
import Logout from './Logout/Logout.jsx';
import scss from './Sidebar.module.scss';

const Sidebar = ({ isActiveSidebar }) => {
    const sidebarClassName = `${scss.sidebar} ${isActiveSidebar ? scss.active : ''}`;
    return (
        <div className={sidebarClassName}>
            <div className={scss.logoBordFlex}>
                <Logo />

                <BoardList />
            </div>
            <div className={scss.helpLogoutFlex}>
                <NeedHelp />
                <Logout />
            </div>
        </div>
    );
};

export default Sidebar;
