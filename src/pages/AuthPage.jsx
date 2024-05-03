import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signup } from '../redux/auth/auth-operations';
import LoginForm from '../components/Auth/LoginForm';
import RegisterForm from '../components/Auth/RegisterForm';

const AuthPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const handleSignup = data => {
        dispatch(signup(data));
    };

    return (
        <div>
            {id === 'login' ? (
                <LoginForm />
            ) : (
                <RegisterForm onSubmit={handleSignup} />
            )}
        </div>
    );
};

export default AuthPage;
