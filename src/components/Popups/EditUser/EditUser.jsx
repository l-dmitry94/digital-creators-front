import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import SubmitButton from '../../SubmitButton/SubmitButton';
import scss from './EditUser.module.scss';
import icon from '../../../assets/icons/icons.svg';

import defaultImage from '../../../assets/images/user@1x-min.png';

import { selectUser } from '../../../redux/auth/auth-selectors';
import { updateUser } from '../../../redux/auth/auth-operations';

const validationSchema = Yup.object().shape({
    username: Yup.string(),
    email: Yup.string().email('Invalid email address'),
    password: Yup.string().min(8, 'Password must be at least 8 characters'),
});

const EditUser = ({ closeModal }) => {
    const userInfo = useSelector(selectUser);
    const [imagePreview, setImagePreview] = useState(defaultImage);
    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch();

    const passwordVisibility = () => {
        setShowPassword(!showPassword);
    };

    useEffect(() => {
        if (imagePreview !== defaultImage) {
            setImagePreview(imagePreview);
        } else {
            setImagePreview(userInfo.avatarURL);
        }
    }, [imagePreview, userInfo.avatarURL]);

    return (
        <Formik
            initialValues={{
                username: '',
                email: '',
                password: '',
                avatarURL: userInfo.avatarURL,
                avatar: null,
            }}
            validationSchema={validationSchema}
            async
            onSubmit={async values => {
                const formatData = new FormData();
                // Перевірка чи змінювались поля
                if (values.username !== userInfo.username) {
                    formatData.append('username', values.username);
                }
                if (values.email !== userInfo.email) {
                    formatData.append('email', values.email);
                }
                if (values.password) {
                    formatData.append('password', values.password);
                }
                if (values.avatar) {
                    formatData.append('avatar', values.avatar);
                }

                // Перевірка чи є зміни у введених даних
                if (
                    !values.username &&
                    !values.email &&
                    !values.password &&
                    !values.avatar
                ) {
                    console.log('Data empty');
                    return;
                }

                // Перевірка чи є зміни в імені або електронній пошті
                if (
                    values.username === userInfo.username ||
                    values.email === userInfo.email
                ) {
                    console.log('Value name or email is the same');
                    return;
                }

                try {
                    await dispatch(updateUser(formatData));
                    closeModal(false);
                } catch (error) {
                    console.log(error);
                }
            }}
        >
            {({ handleSubmit, errors, touched, setFieldValue }) => (
                <Form onSubmit={handleSubmit} className={scss.form}>
                    <div className={scss.boxUpload}>
                        <img
                            src={imagePreview}
                            alt="User"
                            style={{
                                width: '68px',
                                height: '68px',
                                objectFit: 'cover',
                                borderRadius: '8px',
                            }}
                        />
                        <label className="file-input-label">
                            <input
                                type="file"
                                className={scss.input}
                                accept="image/*, .png, .jpg, .jpeg"
                                onChange={event => {
                                    const file = event.currentTarget.files[0];
                                    setFieldValue('avatar', file);

                                    const reader = new FileReader();
                                    reader.onload = () => {
                                        setImagePreview(reader.result);
                                    };
                                    if (file) {
                                        reader.readAsDataURL(file);
                                    } else {
                                        setImagePreview(defaultImage);
                                    }
                                }}
                            />
                            <svg className={scss.iconPlus}>
                                <use href={`${icon}#icon-plus`}></use>
                            </svg>
                        </label>
                    </div>
                    {touched.avatar && errors.avatar && (
                        <div>{errors.avatar}</div>
                    )}
                    <div className={scss.fields}>
                        <Field
                            type="text"
                            name="username"
                            placeholder={userInfo.username}
                        />
                        {touched.username && errors.username && (
                            <div>{errors.username}</div>
                        )}
                        <Field
                            type="email"
                            name="email"
                            placeholder={userInfo.email}
                        />
                        {touched.email && errors.email && (
                            <div>{errors.email}</div>
                        )}
                        <div className={scss.passwordField}>
                            <Field
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Password"
                            />
                            <button
                                type="button"
                                className={scss.eye}
                                onClick={passwordVisibility}
                            >
                                <svg className={scss.eyeIcon}>
                                    <use href={`${icon}#icon-eye`}></use>
                                </svg>
                            </button>
                            {touched.password && errors.password && (
                                <div>{errors.password}</div>
                            )}
                        </div>
                    </div>
                    <SubmitButton buttonText={'Send'} />
                </Form>
            )}
        </Formik>
    );
};

export default EditUser;
