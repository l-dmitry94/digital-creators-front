import CustomInput from '../../CustomInput/CustomInput.jsx';
import CustomRadioGroup from '../../RadioGroup/RadioButtons.jsx';
import BackgroundGallery from '../../BackgroundGallery/BackgroundGallery.jsx';
import CustomForm from '../../CustomForm/CustomForm.jsx';
import * as yup from 'yup';
import scss from '../../Popups/CreateNewBoard/CreateNewBoard.module.scss';
import { addBoard } from '../../../redux/tasks/tasks-operations/tasks-boards-operations.js';
import Errors from '../../Errors/Errors.jsx';

const CreateNewBoard = ({ onClose }) => {
    const initialValues = {
        board_name: '',
        icon: 'icon-project',
        background: 'default',
    };

    const validationSchema = yup.object().shape({
        board_name: yup.string().required('Title is required'),
        icon: yup.string().required('Icon is required'),
        background: yup.string().required('Background is required'),
    });

    return (
        <CustomForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            buttonText={'Create'}
            operation={addBoard}
            onClose={onClose}
            operation={addBoard}
        >
            {formik => (
                <div>
                    <div className={scss.createBoardInput}>
                        <CustomInput
                            placeholder={'Title'}
                            name="board_name"
                            value={formik.values.title}
                            type={'text'}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        />
                        <Errors
                            error={formik.errors}
                            touched={formik.touched}
                            errorMessage="board_name"
                        />
                        {/* {formik.errors.board_name &&
                            formik.touched.board_name && (
                                <div>{formik.errors.board_name}</div>
                            )} */}
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
