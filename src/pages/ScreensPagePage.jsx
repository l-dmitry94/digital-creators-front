import ScreensPage from '../components/ScreensPage';
import StartPage from '../components/ScreensPage/StartPage/StartPage';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import scss from '../components/AppBar/AppBar.module.scss';

const ScreensPagePage = () => {
    const [isActiveSidebar, setIsActiveSidebar] = useState(false);

    const appBarClassName = `${scss.appBar} ${isActiveSidebar ? scss.active : ''}`;
    const handleClick = prop => setIsActiveSidebar(prop);

    return (
        <div>
            {/* <Sidebar
                isActiveSidebar={isActiveSidebar}
                handleClick={handleClick}
            /> */}
            <div className={appBarClassName}>
                {/* <Header
                    handleClick={handleClick}
                    isOpenSidebar={isActiveSidebar}
                /> */}
                <ScreensPage />
            </div>
        </div>
    );
};

export default ScreensPagePage;
