import CustomInput from '../CustomInput/CustomInput';
import CustomForm from '../CustomForm/CustomForm';
import CustomTextarea from '../CustomTextarea/CustomTextarea';
import ColorSelector from '../ColorSelector/ColorSelector';
// import MyDatePicker from '../ScreensPage/MainDashboard/CardDatePicker/CardDatePicker'; // Шлях до вашого компонента MyDatePicker
import * as yup from 'yup';

import scss from '../Popups/NeedHelpsPopup/NeedHelpsPopup.module.scss';
import { addCard } from '../../redux/tasks/tasks-operations/tasks-cards-operations';

const AddCard = ({ boardId: id, columnId, onClose }) => {
    const initialValues = {
        card_name: '',
        description: '',
        priority: '',
        deadline: '12/05/2023',
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
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.title && formik.touched.title && (
                            <div>{formik.errors.title}</div>
                        )}
                    </div>
                    <div className={scss.textareaBlock}>
                        <CustomTextarea
                            name="description"
                            placeholder={'Description'}
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.description &&
                            formik.touched.description && (
                                <div>{formik.errors.description}</div>
                            )}
                    </div>
                    <ColorSelector
                        title={'Label Color'}
                        onChange={color =>
                            formik.setFieldValue('priority', color)
                        }
                    />
                    <div className={scss.datePickerBlock}>
                        {/* <MyDatePicker
                            title={'Deadline'}
                            selected={formik.values.startDate}
                            onChange={date =>
                                formik.setFieldValue('deadline', date)
                            }
                        /> */}
                    </div>
                </div>
            )}
        </CustomForm>
    );
};

export default AddCard;
