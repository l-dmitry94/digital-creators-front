import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import SubmitButton from '../../SubmitButton/SubmitButton';
import scss from './EditUser.module.scss';
import icon from '../../../assets/icons/icons.svg';

import defaultImage from '../../../assets/images/user@1x-min.png';

const validationSchema = Yup.object().shape({
    username: Yup.string(),
    email: Yup.string().email('Invalid email address'),
    password: Yup.string().min(8, 'Password must be at least 8 characters'),
});

const EditUser = () => {
    const [imagePreview, setImagePreview] = useState(defaultImage);

    return (
        <Formik
            initialValues={{
                username: '',
                email: '',
                password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={values => {
                // Обробка даних форми
                console.log(values);
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
                            }}
                        />
                        <label className="file-input-label">
                            <input
                                type="file"
                                className={scss.input}
                                accept="images/*, .png, .jpg, .web"
                                onChange={event => {
                                    const file = event.currentTarget.files[0];
                                    setFieldValue('image', file);

                                    // Перегляд зображення для попереднього перегляду
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
                            <svg>
                                <use href={`${icon}#icon-plus`}></use>
                            </svg>
                        </label>
                    </div>
                    {touched.image && errors.image && <div>{errors.image}</div>}
                    <Field type="text" name="username" placeholder="Name" />
                    {touched.username && errors.username && (
                        <div>{errors.username}</div>
                    )}
                    <Field type="email" name="email" placeholder="Email" />
                    {touched.email && errors.email && <div>{errors.email}</div>}
                    <Field
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                    {touched.password && errors.password && (
                        <div>{errors.password}</div>
                    )}
                    <SubmitButton buttonText={'Send'} />
                </Form>
            )}
        </Formik>
    );
};

export default EditUser;
