import Sidebar from '../Sidebar';
import Header from '../Header';
import { useState } from 'react';
import scss from './AppBar.module.scss';
import ScreensPage from '../ScreensPage/ScreensPage';
import Container from '../Container';

const AppBar = () => {
    const [isActiveSidebar, setIsActiveSidebar] = useState(false);

    const appBarClassName = `${scss.appBar} ${isActiveSidebar ? scss.active : ''}`;
    const handleClick = prop => setIsActiveSidebar(prop);
    return (
        <div className={scss.wrapper}>
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
                    <Container>
                        <ScreensPage />
                    </Container>
                </main>
            </div>
        </div>
    );
};

export default AppBar;
