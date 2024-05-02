import axios from 'axios';

const baseURL = import.meta.env.VITE_BACKEND_URL;

const setToken = token => {
    if (token) {
        axios.defaults.headers.authorization = `Bearer ${token}`;
    }
    axios.defaults.headers.authorization = '';
};

export const signupRequest = async userData => {
    try {
        const response = await axios.post(`${baseURL}/auth/signup`, userData);
        setToken(response.data.token);
        return response.data;
    } catch (error) {
        console.error('error signup:', error.response.data);
        throw error;
    }
};

export const loginRequest = async credentials => {
    try {
        const response = await axios.post(
            `${baseURL}/auth/signin`,
            credentials
        );
        setToken(response.data.token);
        return response.data;
    } catch (error) {
        console.error('error login:', error.response.data);
        throw error;
    }
};

export const currentRequest = async token => {
    setToken(token);
    try {
        const response = await axios.get(`${baseURL}/auth/current`);
        return response.data;
    } catch (error) {
        console.error('error current:', error.response.data);
        throw error;
    }
};

export const logoutRequest = async () => {
    try {
        const response = await axios.post(`${baseURL}/auth/logout`);
        setToken();

        return response.data;
    } catch (error) {
        console.error('error logout:', error.response.data);
        throw error;
    }
};
