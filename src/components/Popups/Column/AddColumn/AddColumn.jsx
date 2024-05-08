import CustomForm from '../../../CustomForm/CustomForm';
import CustomInput from '../../../CustomInput/CustomInput';

const initialValues = {
    title: '',
};

const AddColumn = () => {
    return (
        <CustomForm initialValues={initialValues} buttonText={'Add'}>
            {formik => <CustomInput name={'title'} placeholder={'Title'} />}
        </CustomForm>
    );
};

export default AddColumn;
