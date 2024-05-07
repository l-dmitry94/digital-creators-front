import { toast } from 'react-toastify';

export const pending = state => {
    // toast.loading('Promise in progress...');
    state.isLoading = true;
    state.error = null;
};

export const rejected = (state, { payload }) => {
    toast.error(`${payload}`);
    // toast.dismiss();
    state.error = payload;
    state.isLoading = false;
};
