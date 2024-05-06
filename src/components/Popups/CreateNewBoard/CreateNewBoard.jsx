import CustomInput from '../../CustomInput/CustomInput.jsx';
import CustomRadioGroup from '../../RadioGroup/RadioButtons.jsx';
import BackgroundGallery from '../../BackgroundGallery/BackgroundGallery.jsx';
import scss from '../../Popups/CreateNewBoard/CreateNewBoard.module.scss';

const CreateNewBoard = () => {
    return (
        <div>
            <div className={scss.createBoardInput}>
                <CustomInput placeholder={'Title'} />
            </div>
            <p className={scss.iconsTitle}>Icons</p>
            <div className={scss.createRadioGroup}>
                <CustomRadioGroup />
            </div>
            <p className={scss.backgroundTitle}>Background</p>
            <div className={scss.createGallery}>
                <BackgroundGallery />
            </div>
        </div>
    );
};

export default CreateNewBoard;
