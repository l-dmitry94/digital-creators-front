import CustomInput from '../CustomInput/CustomInput';
import CustomForm from '../CustomForm/CustomForm';
import CustomTextarea from '../CustomTextarea/CustomTextarea';
import ColorSelector from '../ColorSelector/ColorSelector';
import MyDatePicker from '../ScreensPage/MainDashboard/CardDatePicker/CardDatePicker'; // Шлях до вашого компонента MyDatePicker
import * as yup from 'yup';

import scss from '../Popups/NeedHelpsPopup/NeedHelpsPopup.module.scss';
import { editCard } from '../../redux/tasks/tasks-operations/tasks-cards-operations';
import { useSelector } from 'react-redux';
import { selectCardItems } from '../../redux/tasks/tasks-selectors';

const EditCard = ({ boardId: id, columnId, cardId, onClose }) => {
    const cards = useSelector(selectCardItems);
    const card = cards.find(({ _id }) => _id === cardId);

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
        startDate: yup.date(),
        priority: yup.string(),
        deadline: yup.string().required('Deadline is required'),
    });

    return (
        <CustomForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            buttonText={'Edit'}
            operation={editCard}
            id={id}
            columnId={columnId}
            cardId={cardId}
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
                        {formik.errors.title && formik.touched.card_name && (
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
                        <MyDatePicker title={'Deadline'} formik={formik} />
                    </div>
                </div>
            )}
        </CustomForm>
    );
};

export default EditCard;
