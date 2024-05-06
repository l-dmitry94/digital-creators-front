import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { login } from '../../../redux/auth/auth-operations';
import { selectToken } from '../../../redux/auth/auth-selectors';
import Container from '../../Container';
import css from '../RegisterForm/RegisterForm.module.scss';
import icons from '../../../assets/icons/icons.svg';
import CustomForm from '../../CustomForm/CustomForm';
import CustomInput from '../../CustomInput/CustomInput';

import * as yup from 'yup';

export const LoginForm = () => {
    const initialValues = {
        email: '',
        password: '',
    };

    const [showPassword, setShowPassword] = useState(false);
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

    useEffect(() => {
        if (token) {
            navigate('/home');
        }
    }, [token, navigate]);

    const passwordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <section className={css.register_page}>
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
                    <CustomForm
                        initialValues={initialValues}
                        validationSchema={LogInschema}
                        operation={login}
                        buttonText="Log In Now"
                    >
                        {formik => (
                            <div className={css.auth_form}>
                                <div>
                                    <CustomInput
                                        name="email"
                                        type="text"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                        placeholder="Enter your email"
                                    />
                                    {formik.errors.email &&
                                        formik.touched.email && (
                                            <div>{formik.errors.email}</div>
                                        )}
                                </div>

                                <div>
                                    <div className={css.inputWrapper}>
                                        <CustomInput
                                            name="password"
                                            type={
                                                showPassword
                                                    ? 'text'
                                                    : 'password'
                                            }
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.password}
                                            placeholder="Enter your password"
                                        />
                                        <button
                                            type="button"
                                            className={css.eye}
                                            onClick={passwordVisibility}
                                        >
                                            <svg className={css.eyeIcon}>
                                                <use
                                                    href={`${icons}#icon-eye`}
                                                ></use>
                                            </svg>
                                        </button>
                                    </div>

                                    {formik.errors.password &&
                                        formik.touched.password && (
                                            <div>{formik.errors.password}</div>
                                        )}
                                </div>
                            </div>
                        )}
                    </CustomForm>
                </div>
            </Container>
        </section>
    );
};

export default LoginForm;
