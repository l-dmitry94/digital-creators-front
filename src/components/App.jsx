import { useEffect } from 'react';
import { Route, Routes, redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AppBar from './AppBar';
import WelcomePage from '../pages/WelcomePage.jsx';
import AuthPage from '../pages/AuthPage';
import HomePage from '../pages/HomePage';
import { useAuth } from '../hooks/useAuth.js';
import { current } from '../redux/auth/auth-operations.js';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute.jsx';
import PrivateRoute from './PrivetRoute/PrivetRoute.jsx';

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
                    <Route path="/" element={<AppBar />}>
                        <Route path="home" element={<HomePage />} />/
                    </Route>
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
                                redirectTo="home"
                                component={<HomePage />}
                            />
                        }
                    />
                    <Route path="/welcome" element={<WelcomePage />} />

                    <Route path="/auth/:id" element={<AuthPage />} />
                </Routes>
            )}
        </>
    );
};

export default App;
