import CustomForm from '../../../CustomForm/CustomForm';
import CustomInput from '../../../CustomInput/CustomInput';
import scss from './edit-column.module.scss';
import * as yup from 'yup';

import { editColumn } from '../../../../redux/tasks/tasks-operations/tasks-columns-operations';
import { selectColumnItems } from '../../../../redux/tasks/tasks-selectors';
import { useSelector } from 'react-redux';

const EditColumn = ({ boardId, columnId, onClose }) => {
    const columns = useSelector(selectColumnItems);

    const column = columns.find(({ _id }) => columnId === _id);

    const initialValues = {
        column_name: column.column_name,
    };

    console.log(initialValues);

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
                        value={formik.values.column_name}
                    />
                </div>
            )}
        </CustomForm>
    );
};

export default EditColumn;
