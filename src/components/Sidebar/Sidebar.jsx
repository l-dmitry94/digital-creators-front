import Logo from './Logo/Logo.jsx';
import BoardList from './BoardList/BoardList.jsx';
import NeedHelp from './NeedHelp/NeedHelp.jsx';
import Logout from './Logout/Logout.jsx';
import scss from './Sidebar.module.scss';
import { useRef, useState, useEffect } from 'react';

const Sidebar = ({ isActiveSidebar, handleClick }) => {
    const sidebarRef = useRef(null);
    const [active, setActive] = useState(isActiveSidebar);

    useEffect(() => {
        setActive(isActiveSidebar);
    }, [isActiveSidebar]);

    const handleClickOutside = event => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setActive(false);
            handleClick(active);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const sidebarClassName = `${scss.sidebar} ${active ? scss.active : ''}`;
    return (
        <div className={sidebarClassName} ref={sidebarRef} tabIndex={0}>
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
