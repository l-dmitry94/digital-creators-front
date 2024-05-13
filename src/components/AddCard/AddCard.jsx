import CustomInput from '../CustomInput/CustomInput';
import CustomForm from '../CustomForm/CustomForm';
import CustomTextarea from '../CustomTextarea/CustomTextarea';
import ColorSelector from '../ColorSelector/ColorSelector';
import Errors from '../Errors/Errors.jsx';
import * as yup from 'yup';
import MyDatePicker from '../ScreensPage/MainDashboard/CardDatePicker/CardDatePicker.jsx';
import scss from '../Popups/NeedHelpsPopup/NeedHelpsPopup.module.scss';
import { addCard } from '../../redux/tasks/tasks-operations/tasks-cards-operations';

const AddCard = ({ boardId: id, columnId, onClose }) => {
    const initialValues = {
        card_name: '',
        description: '',
        priority: 'rgba(255, 255, 255, 0.3)',
        deadline: '',
    };

    const validationSchema = yup.object().shape({
        card_name: yup
            .string()
            .label('Invalid title')
            .required('Title is required'),
        description: yup.string().required('Description is required'),
        // startDate: yup.date(),
        priority: yup.string(),
        deadline: yup.string().required('Deadline is required'),
    });

    return (
        <CustomForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            buttonText={'Add'}
            operation={addCard}
            id={id}
            columnId={columnId}
            onClose={onClose}
        >
            {formik => (
                <div className={scss.inputContainer}>
                    <div>
                        <CustomInput
                            type="text"
                            name="card_name"
                            placeholder="Title"
                            value={formik.values.card_name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <Errors
                            error={formik.errors}
                            touched={formik.touched}
                            errorMessage="card_name"
                        />
                    </div>
                    <div className={scss.textareaBlock}>
                        <CustomTextarea
                            name="description"
                            placeholder={'Description'}
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <Errors
                            error={formik.errors}
                            touched={formik.touched}
                            errorMessage="description"
                        />
                    </div>
                    <ColorSelector
                        title={'Label Color'}
                        onChange={color =>
                            formik.setFieldValue('priority', color)
                        }
                        defaultValue={'rgba(255, 255, 255, 0.3)'}
                    />
                    <div className={scss.datePickerBlock}>
                        <MyDatePicker title={'Deadline'} formik={formik} />
                    </div>
                </div>
            )}
        </CustomForm>
    );
};

export default AddCard;
