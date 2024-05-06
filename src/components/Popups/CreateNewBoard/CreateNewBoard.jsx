import CustomInput from '../../CustomInput/CustomInput.jsx';
import CustomRadioGroup from '../../RadioGroup/RadioButtons.jsx';
import BackgroundGallery from '../../BackgroundGallery/BackgroundGallery.jsx';
import CustomForm from '../../CustomForm/CustomForm.jsx';
import * as yup from 'yup';
import scss from '../../Popups/CreateNewBoard/CreateNewBoard.module.scss';

const CreateNewBoard = () => {
    const initialValues = {
        title: '',
        icon: '',
        background: '',
    };

    const validationSchema = yup.object().shape({
        title: yup.string().required('Title is required'),
        icon: yup.string().required('Icon is required'),
        background: yup.string().required('Background is required'),
    });
    return (
        <CustomForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            buttonText={'Create'}
        >
            {formik => (
                <div>
                    <div className={scss.createBoardInput}>
                        <CustomInput
                            placeholder={'Title'}
                            name="title"
                            value={formik.values.title}
                            type={'text'}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.title && formik.touched.title && (
                            <div>{formik.errors.title}</div>
                        )}
                    </div>
                    <p className={scss.iconsTitle}>Icons</p>
                    <div className={scss.createRadioGroup}>
                        <CustomRadioGroup formik={formik} />
                    </div>
                    <p className={scss.backgroundTitle}>Background</p>
                    <div className={scss.createGallery}>
                        <BackgroundGallery formik={formik} />
                    </div>
                </div>
            )}
        </CustomForm>
    );
};

export default CreateNewBoard;
