import CustomInput from '../../CustomInput/CustomInput';
import CustomForm from '../../CustomForm/CustomForm';
import * as yup from 'yup';

import scss from './NeedHelpsPopup.module.scss';
import CustomTextarea from '../../CustomTextarea/CustomTextarea';

const NeedHelpsPopup = () => {
    const initialValues = {
        email: '',
    };

    const validationSchema = yup.object().shape({
        email: yup
            .string()
            .email('Invalid email')
            .required('Email is required'),
    });
    return (
        <CustomForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            buttonText={'Send'}
        >
            {formik => (
                <div>
                    <div className={`${scss.inputContainer} ${scss.emailInput}`}>
                        <CustomInput
                            type="email"
                            name="email"
                            placeholder="Email address"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={scss.emailInput}
                        />
                        {formik.errors.email && formik.touched.email && <div>{formik.errors.email}</div>}
                    </div>
                    <CustomTextarea
                    placeholder={'Comment'}
                    />
                </div>
            )}
        </CustomForm>
    );
};

export default NeedHelpsPopup;
