import { Route, Routes } from 'react-router-dom';
import AppBar from './AppBar';
// import WelcomePage from '../pages/WelcomePage.jsx';
import AuthPage from '../pages/AuthPage';
import HomePage from '../pages/HomePage';

const App = () => {
    return (
        //*path="/welcome"// для Welcome повернути
        <Routes>
            {/* <Route index element={<WelcomePage />} /> */}
            <Route path="/auth/:id" element={<AuthPage />} />

            <Route path="/" element={<AppBar />}>
                <Route path="home" element={<HomePage />} />
            </Route>
        </Routes>
    );
};

export default App;
