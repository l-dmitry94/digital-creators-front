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
    id,
    columnId,
    children,
    cardId,
}) => {
    const dispatch = useDispatch();

    const onSubmit = async values => {
        console.log(values);
        if (handleSubmit) {
            handleSubmit(values);
            return;
        }

        if (columnId && id && cardId) {
            const dispatchResult = dispatch(
                operation({ id, columnId, cardId, values })
            );
            if (dispatchResult) {
                onClose();
            }
            return;
        }

        if (columnId && id) {
            const dispatchResult = dispatch(
                operation({ id, columnId, values })
            );
            if (dispatchResult) {
                onClose();
            }
            return;
        }

        if (id) {
            const dispatchResult = dispatch(operation({ id, values }));
            if (dispatchResult) {
                onClose();
            }
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
