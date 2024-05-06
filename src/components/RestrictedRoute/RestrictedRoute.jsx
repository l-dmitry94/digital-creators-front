import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const RestrictedRoute = ({ component: Component, redirectTo = `/` }) => {
    const { isLogin } = useAuth();

    return isLogin ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
