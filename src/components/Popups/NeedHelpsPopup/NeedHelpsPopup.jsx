import CustomInput from '../../CustomInput/CustomInput';
import CustomForm from '../../CustomForm/CustomForm';
import * as yup from 'yup';

import scss from './NeedHelpsPopup.module.scss';
import CustomTextarea from '../../CustomTextarea/CustomTextarea';
import { useEffect, useState } from 'react';
import axios from 'axios';

const NeedHelpsPopup = () => {
    const [data, setData] = useState({});

    const initialValues = {
        email: '',
        comment: '',
    };

    const validationSchema = yup.object().shape({
        email: yup
            .string()
            .email('Invalid email')
            .required('Email is required'),
        comment: yup.string().required('Comment is required'),
    });

    const handleSubmit = data => {
        setData(data);
    };
    useEffect(() => {
        const fetchSendMail = async () => {
            try {
                await axios.post(
                    'https://digital-creators-back.onrender.com/api/support/sendmail',
                    {
                        email: data.email,
                        value: data.comment,
                    }
                );
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchSendMail();
    }, [data.email, data.comment]);

    return (
        <CustomForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            buttonText={'Send'}
            handleSubmit={handleSubmit}
        >
            {formik => (
                <div>
                    <div
                        className={`${scss.inputContainer} ${scss.emailInput}`}
                    >
                        <CustomInput
                            type="email"
                            name="email"
                            placeholder="Email address"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={scss.emailInput}
                        />
                        {formik.errors.email && formik.touched.email && (
                            <div>{formik.errors.email}</div>
                        )}
                    </div>
                    <div className={scss.textareaBlock}>
                        <CustomTextarea
                            name="comment"
                            placeholder={'Comment'}
                            value={formik.values.comment}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.comment && formik.touched.comment && (
                            <div>{formik.errors.comment}</div>
                        )}
                    </div>
                </div>
            )}
        </CustomForm>
    );
};

export default NeedHelpsPopup;
