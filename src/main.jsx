import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import { store } from './redux/store.js';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter basename="/digital-creators-front">
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
