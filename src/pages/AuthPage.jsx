import { useParams } from 'react-router-dom';
import LoginForm from '../components/Auth/LoginForm';
import RegisterForm from '../components/Auth/RegisterForm';

const AuthPage = () => {
    const { id } = useParams();

    return <div>{id === 'login' ? <LoginForm /> : <RegisterForm />}</div>;
};

export default AuthPage;
