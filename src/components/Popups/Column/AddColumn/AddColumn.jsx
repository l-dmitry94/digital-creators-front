import CustomForm from '../../../CustomForm/CustomForm';
import CustomInput from '../../../CustomInput/CustomInput';
import Errors from '../../../Errors/Errors';
import * as yup from 'yup';
import scss from './add-column.module.scss';
import { addColumn } from '../../../../redux/tasks/tasks-operations/tasks-columns-operations';

const initialValues = {
    column_name: '',
};

const validationSchema = yup.object().shape({
    column_name: yup.string().required('Title required'),
});

const AddColumn = ({ id, onClose }) => {
    return (
        <CustomForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            buttonText={'Add'}
            operation={addColumn}
            id={id}
            onClose={onClose}
        >
            {formik => (
                <div className={scss.addColumn}>
                    <CustomInput
                        name={'column_name'}
                        placeholder={'Title'}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <Errors
                        error={formik.errors}
                        touched={formik.touched}
                        errorMessage={'column_name'}
                    />
                </div>
            )}
        </CustomForm>
    );
};

export default AddColumn;
