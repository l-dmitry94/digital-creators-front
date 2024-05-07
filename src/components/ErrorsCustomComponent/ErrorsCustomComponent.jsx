import { toast } from 'react-toastify';

const ErrorsComponent = ({ errorName }) => {
    switch (errorName) {
        case 'Email Register':
             toast.error('Email is already in use!');
            break;
    }
}

export default ErrorsComponent