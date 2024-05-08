import Logo from './Logo/Logo.jsx';
import BoardList from './BoardList/BoardList.jsx';
import NeedHelp from './NeedHelp/NeedHelp.jsx';
import Logout from './Logout/Logout.jsx';
import BoardLink from './BoardLink/BoardLink.jsx';
import scss from './Sidebar.module.scss';
import { useRef, useState, useEffect } from 'react';

const Sidebar = ({ isActiveSidebar, handleClick }) => {
    const sidebarRef = useRef(null);
    const [active, setActive] = useState(isActiveSidebar);
    console.log('first');

    useEffect(() => {
        setActive(isActiveSidebar);
    }, [isActiveSidebar]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
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

    const sidebarActive = `${scss.sidebar} ${active ? scss.active : ''}`;
    return (
        <div className={sidebarActive} ref={sidebarRef} tabIndex={0}>
            <div className={scss.logoBordFlex}>
                <Logo />
                <BoardList />
            </div>
            <div>
                <BoardLink />
            </div>
            <div className={scss.helpLogoutFlex}>
                <NeedHelp />
                <Logout />
            </div>
        </div>
    );
};

export default Sidebar;
