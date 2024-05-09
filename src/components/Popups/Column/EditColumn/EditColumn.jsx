import CustomForm from '../../../CustomForm/CustomForm';
import CustomInput from '../../../CustomInput/CustomInput';

import scss from './edit-column.module.scss';

const initialValues = {
    title: '',
};

const EditColumn = () => {
    return (
        <CustomForm buttonText={'Edit'} initialValues={initialValues}>
            {formik => (
                <div className={scss.editColumn}>
                    <CustomInput
                        type={'text'}
                        name={'title'}
                        placeholder={'Title'}
                    />
                </div>
            )}
        </CustomForm>
    );
};

export default EditColumn;
