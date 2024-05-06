import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import SubmitButton from '../SubmitButton/SubmitButton';

const CustomForm = ({
    initialValues,
    validationSchema,
    operation,
    buttonText,
    handleSubmit,
    children,
}) => {
    const dispatch = useDispatch();

    const onSubmit = async values => {
        if (handleSubmit) {
            handleSubmit(values);
            return;
        }
        dispatch(operation(values));
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            {children(formik)}

            <SubmitButton buttonText={buttonText} />
        </form>
    );
};

export default CustomForm;
