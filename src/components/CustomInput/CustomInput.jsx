import icons from '../../assets/icons/icons.svg';
import scss from './CustomInput.module.scss';

const CustomInput = ({ type, placeholder, name }) => {
    return (
        <>
            {type === 'password' ? (
                <div className={scss.inputWrapper}>
                    <input
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        className={scss.input}
                    />
                    <button className={scss.eye}>
                        <svg className={scss.eyeIcon}>
                            <use href={`${icons}#icon-eye`}></use>
                        </svg>
                    </button>
                </div>
            ) : (
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    className={scss.input}
                />
            )}
        </>
    );
};

export default CustomInput;
