import CustomForm from '../../../CustomForm/CustomForm';
import CustomInput from '../../../CustomInput/CustomInput';

import scss from './add-column.module.scss';

const initialValues = {
    title: '',
};

const AddColumn = () => {
    return (
        <CustomForm initialValues={initialValues} buttonText={'Add'}>
            {formik => (
                <div className={scss.addColumn}>
                    <CustomInput name={'title'} placeholder={'Title'} />
                </div>
            )}
        </CustomForm>
    );
};

export default AddColumn;
