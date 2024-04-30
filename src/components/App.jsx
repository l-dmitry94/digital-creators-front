import { Route, Routes } from 'react-router-dom';
import AppBar from './AppBar';
import WelcomePage from '../pages/WelcomePage';
import AuthPage from '../pages/AuthPage';
import HomePage from '../pages/HomePage';

const App = () => {
    return (
        <Routes>
            <Route path="/welcome" element={<WelcomePage />} />

            <Route path="/" element={<AppBar />}>
                <Route path="home" element={<HomePage />} />
                <Route path="auth/:id" element={<AuthPage />} />
            </Route>
        </Routes>
    );
};

export default App;
