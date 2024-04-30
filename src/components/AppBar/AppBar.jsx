import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Header from '../Header';

const AppBar = () => {
    return (
        <div>
            <Sidebar />

            <div>
                <Header />

                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AppBar;
