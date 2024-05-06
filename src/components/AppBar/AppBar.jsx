import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Header from '../Header';
import { useEffect, useState } from 'react';
import scss from './AppBar.module.scss';
import { useAuth } from '../../hooks/useAuth';
// import ScreensPage from '../ScreensPage';

const AppBar = () => {
    const [isActiveSidebar, setIsActiveSidebar] = useState(false);

    const appBarClassName = `${scss.appBar} ${isActiveSidebar ? scss.active : ''}`;
    const handleClick = prop => setIsActiveSidebar(prop);
    return (
        <div>
            <Sidebar
                isActiveSidebar={isActiveSidebar}
                handleClick={handleClick}
            />

            <div className={appBarClassName}>
                <Header
                    handleClick={handleClick}
                    isOpenSidebar={isActiveSidebar}
                />

                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AppBar;
