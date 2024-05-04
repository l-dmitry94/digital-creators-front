import { useDispatch, useSelector } from 'react-redux';
import {
    useEffect,
    // useState
} from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { login } from '../../../redux/auth/auth-operations';
import { selectToken } from '../../../redux/auth/auth-selectors';
import Container from '../../Container';
import css from '../RegisterForm/RegisterForm.module.scss';

import { useFormik } from 'formik';
import * as yup from 'yup';

export const LoginForm = () => {
    const initialValues = {
        email: '',
        password: '',
    };

    // const [showPassword, setShowPassword] = useState(false);
    // const [state, setState] = useState({ ...initialValues });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector(selectToken);

    const LogInschema = yup.object().shape({
        email: yup
            .string()
            .email('Invalid email address')
            .required('Email is required'),
        password: yup
            .string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
    });

    const onSubmit = async values => {
        dispatch(login(values));
    };

    useEffect(() => {
        if (token) {
            navigate('/home');
        }
    }, [token, navigate]);

    const formik = useFormik({
        initialValues,
        onSubmit,
        LogInschema,
    });

    // const passwordVisibility = () => {
    //     setShowPassword(!showPassword);
    // };

    return (
        <section>
            <Container>
                <div className={css.form}>
                    <div>
                        <ul className={css.auth_nav}>
                            <li>
                                <NavLink
                                    className={css.classNavLink}
                                    to="/auth/register"
                                >
                                    Registration
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={css.classNavLink}
                                    to="/auth/login"
                                >
                                    Log In
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <form onSubmit={formik.handleSubmit}></form>
                </div>
            </Container>
        </section>
    );
};

// const  = () => {
//     return <div>Login Form</div>;
// };

export default LoginForm;
