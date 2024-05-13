import { toast } from 'react-toastify';

export const pending = state => {
    state.isLoading = true;
    state.error = null;
    toast.loading('Loading');
};

export const rejected = (state, { payload }) => {
    toast.error(`${payload}`);
    state.error = payload;
    state.isLoading = false;
};
