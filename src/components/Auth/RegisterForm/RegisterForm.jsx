import { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { yupResolver } from '@hookform/resolvers/yup';
import { signup } from '../../../redux/auth/auth-operations';
// import Container from '../../Container';
import CustomInput from '../../CustomInput/CustomInput';
import css from './RegisterForm.module.scss';
import icons from '../../../assets/icons/icons.svg';
import SubmitButton from '../../SubmitButton/SubmitButton';
import { NavLink } from 'react-router-dom';

import { useFormik } from 'formik';
import { selectToken } from '../../../redux/auth/auth-selectors';

const RegistrationForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const token = useSelector(selectToken);
    const navigate = useNavigate();

    const initialValues = {
        username: '',
        email: '',
        password: '',
    };

    const validationSchema = yup.object().shape({
        username: yup.string().required('Name is required'),
        email: yup
            .string()
            .email('Invalid email')
            .required('Email is required'),

        password: yup
            .string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
    });

    const onSubmit = async values => {
        dispatch(signup(values));
    };

    useEffect(() => {
        if (token) {
            navigate('/home');
        }
    }, [token, navigate]);

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    });

    const passwordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <section>
            <div>
                <ul className={css.auth_nav}>
                    <li>
                        <NavLink to="/auth/register">Registration</NavLink>
                    </li>
                    <li>
                        <NavLink to="/auth/login">Log In</NavLink>
                    </li>
                </ul>

                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <div>
                            <CustomInput
                                name="username"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.username}
                                placeholder="Enter your name"
                            />
                            {formik.errors.username &&
                                formik.touched.username && (
                                    <div>{formik.errors.username}</div>
                                )}
                        </div>

                        <div>
                            <CustomInput
                                name="email"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                placeholder="Enter your email"
                            />
                            {formik.errors.email && formik.touched.email && (
                                <div>{formik.errors.email}</div>
                            )}
                        </div>

                        <div>
                            <div className={css.inputWrapper}>
                                <CustomInput
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                    placeholder="Create a password"
                                    isShowPassword={passwordVisibility}
                                />
                                <button
                                    type="button"
                                    className={css.eye}
                                    onClick={passwordVisibility}
                                >
                                    <svg className={css.eyeIcon}>
                                        <use href={`${icons}#icon-eye`}></use>
                                    </svg>
                                </button>
                            </div>

                            {formik.errors.password &&
                                formik.touched.password && (
                                    <div>{formik.errors.password}</div>
                                )}
                        </div>
                    </div>

                    <SubmitButton buttonText="Register Now" />
                </form>
            </div>
        </section>
    );

    // const dispatch = useDispatch();
    // const [showPassword, SetShowPassword] = useState(false);

    // const passwordVisibility = () => {
    //     SetShowPassword(!showPassword);
    // };

    // const schema = yup.object().shape({
    //     name: yup.string(),
    //     email: yup.string().email('Invalid email'),
    //     // .required('Email is required'),
    //     password: yup.string().min(8, 'Password must be at least 8 characters'),
    //     // .required('Password is required'),
    // });

    // const {
    //     register,
    //     handleSubmit,
    //     // formState: { errors },
    // } = useForm({
    //     resolver: yupResolver(schema),
    // });

    // const onSubmit = async data => {
    //     try {
    //         await dispatch(signup(data));
    //         navigate('/home');
    //     } catch (error) {
    //         console.error(error);
    //     }
    //     console.log(data);
    // };

    // return (
    //     <div className={css.register_page}>
    //         <Container>
    //             <div className={css.container}>
    //                 <div>
    //                     <ul className={css.auth_nav}>
    //                         <li>
    //                             <NavLink to="/auth/register">
    //                                 Registration
    //                             </NavLink>
    //                         </li>
    //                         <li>
    //                             <NavLink to="/auth/login">Log In</NavLink>
    //                         </li>
    //                     </ul>
    //                 </div>
    //                 <form
    //                     onSubmit={handleSubmit(onSubmit)}
    //                     className={css.auth_form}
    //                 >
    //                     <div className={css.auth_div}>
    //                         <CustomInput
    //                             placeholder="Enter your name"
    //                             register={register('name')}
    //                             className={css.input}
    //                         />
    //                         {/* {errors.name && (
    //                             <span className="error-message">
    //                                 {errors.name.message}
    //                             </span>
    //                         )} */}
    //                         {/* <CustomInput
    //                             placeholder="Enter your email"
    //                             {...register('email')}
    //                         />
    //                         {errors.email && (
    //                             <span className="error-message">
    //                                 {errors.email.message}
    //                             </span>
    //                         )}

    //                         <CustomInput
    //                             placeholder="Enter your password"
    //                             {...register('password')}
    //                             type="password"
    //                             onClick={passwordVisibility}
    //                             showPassword={showPassword}
    //                         />
    //                         {errors.password && (
    //                             <span className="error-message">
    //                                 {errors.password.message}
    //                             </span>
    //                         )} */}
    //                         {/* <button type="submit"> submit</button> */}
    //                         <SubmitButton
    //                             buttonText="Register Now"
    //                             onSubmit={handleSubmit}
    //                         />
    //                     </div>
    //                 </form>
    //             </div>
    //         </Container>
    //     </div>
    // );
};

export default RegistrationForm;
