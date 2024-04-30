import { Route, Routes } from 'react-router-dom';
import AppBar from './AppBar';
import HomePage from '../pages/HomePage';
import ContactsPage from '../pages/ContactsPage';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<AppBar />}>
                <Route index element={<HomePage />} />
                <Route path="contacts" element={<ContactsPage />} />
            </Route>
        </Routes>
    );
};

export default App;
