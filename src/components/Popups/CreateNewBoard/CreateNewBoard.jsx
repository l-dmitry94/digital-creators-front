import CustomInput from '../../CustomInput/CustomInput.jsx';
import CustomRadioGroup from '../../RadioGroup/RadioButtons.jsx';

const CreateNewBoard = () => {
    return (
        <div>
            <CustomInput placeholder={'Title'} />
            <p>Icons</p>
            <CustomRadioGroup />
            <p>Background</p>
        </div>
    );
};

export default CreateNewBoard;
