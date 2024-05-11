import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AppBar from './AppBar';
import WelcomePage from '../pages/WelcomePage.jsx';
import AuthPage from '../pages/AuthPage';
// import HomePage from '../pages/HomePage';
import NotFound from '../components/NotFound/NotFound.jsx';
import { current } from '../redux/auth/auth-operations.js';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute.jsx';
import PrivateRoute from './PrivetRoute/PrivetRoute.jsx';
import { useAuth } from '../hooks/useAuth.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { fetchBoards } from '../redux/tasks/tasks-operations/tasks-boards-operations.js';

const App = () => {
    const { isRefreshing } = useAuth();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(current());
    }, [dispatch]);

    return (
        <>
            {!isRefreshing && (
                <Routes>
                    <Route
                        path="register"
                        element={
                            <RestrictedRoute
                                redirectTo="home"
                                Component={<AuthPage />}
                            />
                        }
                    />
                    <Route
                        path="login"
                        element={
                            <RestrictedRoute
                                redirectTo="home"
                                Component={<AuthPage />}
                            />
                        }
                    />
                    <Route
                        path="home/*"
                        element={
                            <PrivateRoute
                                redirectTo="/welcome"
                                component={
                                    <>
                                        <AppBar />
                                    </>
                                }
                            />
                        }
                    />

                    {/* <Route path="/home" element={<AppBar />}>
                        <Route index element={<HomePage />} />
                    </Route> */}
                    <Route path="/" element={<WelcomePage />}></Route>
                    <Route path="/welcome" element={<WelcomePage />} />

                    <Route path="/auth/:id" element={<AuthPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            )}
            <ToastContainer position="top-center" />
        </>
    );
};

export default App;
