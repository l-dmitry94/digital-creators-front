import CustomForm from '../../../CustomForm/CustomForm';
import CustomInput from '../../../CustomInput/CustomInput';
import scss from './edit-column.module.scss';
import * as yup from 'yup';

import { editColumn } from '../../../../redux/tasks/tasks-operations/tasks-columns-operations';

const EditColumn = ({ boardId, columnId, onClose }) => {
    const initialValues = {
        column_name: '',
    };

    const validationSchema = yup.object().shape({
        column_name: yup.string().required('Title required'),
    });
    return (
        <CustomForm
            buttonText={'Edit'}
            initialValues={initialValues}
            operation={editColumn}
            id={boardId}
            onClose={onClose}
            columnId={columnId}
        >
            {formik => (
                <div className={scss.editColumn}>
                    <CustomInput
                        validationSchema={validationSchema}
                        type={'text'}
                        name={'column_name'}
                        placeholder={'Title'}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
            )}
        </CustomForm>
    );
};

export default EditColumn;
