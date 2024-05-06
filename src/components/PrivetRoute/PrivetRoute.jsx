import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const { isLogin, isToken } = useAuth();
    const shouldRedirect = !isLogin && !isToken;

    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
