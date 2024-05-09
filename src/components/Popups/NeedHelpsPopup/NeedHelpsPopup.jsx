import CustomInput from '../../CustomInput/CustomInput';
import CustomForm from '../../CustomForm/CustomForm';
import * as yup from 'yup';

import scss from './NeedHelpsPopup.module.scss';
import CustomTextarea from '../../CustomTextarea/CustomTextarea';
import axios from 'axios';
import Errors from '../../Errors/Errors';

const NeedHelpsPopup = () => {
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

    const handleSubmit = async data => {
        await axios.post(
            'https://digital-creators-back.onrender.com/api/support/sendmail',
            {
                email: data.email,
                value: data.comment,
            }
        );
    };

    return (
        <CustomForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            buttonText={'Send'}
            handleSubmit={handleSubmit}
        >
            {formik => (
                <div className={scss.inputContainer}>
                    <div>
                        <CustomInput
                            type="email"
                            name="email"
                            placeholder="Email address"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={scss.emailInput}
                        />
                        <Errors
                            error={formik.errors}
                            touched={formik.touched}
                            errorMessage="email"
                        />
                        {/* {formik.errors.email && formik.touched.email && (
                            <div>{formik.errors.email}</div>
                        )} */}
                    </div>
                    <div className={scss.textareaBlock}>
                        <CustomTextarea
                            name="comment"
                            placeholder={'Comment'}
                            value={formik.values.comment}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <Errors
                            error={formik.errors}
                            touched={formik.touched}
                            errorMessage="comment"
                        />
                    </div>
                </div>
            )}
        </CustomForm>
    );
};

export default NeedHelpsPopup;
