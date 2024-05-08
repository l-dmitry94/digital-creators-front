import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import SubmitButton from '../SubmitButton/SubmitButton';

const CustomForm = ({
    initialValues,
    validationSchema,
    operation,
    buttonText,
    handleSubmit,
    onClose,
    children,
}) => {
    const dispatch = useDispatch();

    const onSubmit = async values => {
        console.log(values);
        if (handleSubmit) {
            handleSubmit(values);
            return;
        }

        const dispatchResult = dispatch(operation(values));

        if (dispatchResult) {
            onClose();
        }
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
