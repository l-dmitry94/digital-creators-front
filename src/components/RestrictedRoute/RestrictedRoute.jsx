import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const RestrictedRoute = ({ component: Component, redirectTo = `/` }) => {
    const { isLogged } = useAuth();

    return isLogged ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
