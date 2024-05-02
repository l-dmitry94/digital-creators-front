import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Header from '../Header';
import { useState } from 'react';

const AppBar = () => {
    const [isActiveSidebar, setIsActiveSidebar] = useState(false);
    console.log(isActiveSidebar);

    const handleClick = prop => setIsActiveSidebar(prop);
    return (
        <div>
            <Sidebar isActiveSidebar={isActiveSidebar} />

            <div>
                <Header handleClick={handleClick} />

                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AppBar;
