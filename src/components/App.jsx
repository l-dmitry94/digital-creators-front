import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AppBar from './AppBar';
import WelcomePage from '../pages/WelcomePage.jsx';
import AuthPage from '../pages/AuthPage';
import HomePage from '../pages/HomePage';
import { useAuth } from '../hooks/useAuth.js';
import { current } from '../redux/auth/auth-operations.js';

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
                    <Route path="/welcome" element={<WelcomePage />} />
                    <Route path="/auth/:id" element={<AuthPage />} />

                    <Route path="/" element={<AppBar />}>
                        <Route path="home" element={<HomePage />} />
                    </Route>
                </Routes>
            )}
        </>
    );
};

export default App;
