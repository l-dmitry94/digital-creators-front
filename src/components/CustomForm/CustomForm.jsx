import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import SubmitButton from '../SubmitButton/SubmitButton';
import ErrorsComponent from '../ErrorsCustomComponent/ErrorsCustomComponent';

const CustomForm = ({
    initialValues,
    validationSchema,
    operation,
    buttonText,
    children,
    errorName
}) => {
    const dispatch = useDispatch();

    const onSubmit = async values => {
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

            <ErrorsComponent errorName={errorName} /> 
            <SubmitButton buttonText={buttonText} />
        </form>
    );
};

export default CustomForm;
