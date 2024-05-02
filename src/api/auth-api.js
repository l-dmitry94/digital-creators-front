import axios from 'axios';

const baseURL = import.meta.env.VITE_BACKEND_URL;

const signupRequest = async userData => {
    try {
        const response = await axios.post(`${baseURL}/auth/signup`, userData);
        return response.data;
    } catch (error) {
        console.error('error signup:', error.response.data);
        throw error;
    }
};

const loginRequest = async credentials => {
    try {
        const response = await axios.post(
            `${baseURL}/auth/signin`,
            credentials
        );
        return response.data;
    } catch (error) {
        console.error('error login:', error.response.data);
        throw error;
    }
};

const currentRequest = async () => {
    try {
        const response = await axios.get(`${baseURL}/auth/current`);
        return response.data;
    } catch (error) {
        console.error('error current:', error.response.data);
        throw error;
    }
};

const logoutRequest = async () => {
    try {
        const response = await axios.post(`${baseURL}/auth/logout`);
        return response.data;
    } catch (error) {
        console.error('error logout:', error.response.data);
        throw error;
    }
};

export default {
    signupRequest,
    loginRequest,
    currentRequest,
    logoutRequest,
};
