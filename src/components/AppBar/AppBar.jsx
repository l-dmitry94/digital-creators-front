import { NavLink, Outlet } from 'react-router-dom';

const AppBar = () => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacts">Contacts</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </>
    );
};

export default AppBar;
