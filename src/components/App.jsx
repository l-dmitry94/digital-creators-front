import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AppBar from './AppBar';
import WelcomePage from '../pages/WelcomePage.jsx';
import AuthPage from '../pages/AuthPage';
import HomePage from '../pages/HomePage';
import { current } from '../redux/auth/auth-operations.js';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute.jsx';
import PrivateRoute from './PrivetRoute/PrivetRoute.jsx';

const App = () => {
    // const { isRefreshing } = useAuth();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(current());
    }, [dispatch]);

    return (
        <>
            {
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
                        path="home"
                        element={
                            <PrivateRoute
                                redirectTo="/welcome"
                                component={
                                    <>
                                        <AppBar />
                                        <HomePage />
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
                </Routes>
            }
        </>
    );
};

export default App;
