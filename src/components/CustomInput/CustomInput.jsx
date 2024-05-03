import icons from '../../assets/icons/icons.svg';
import scss from './CustomInput.module.scss';

const CustomInput = ({ type, placeholder, name, onChange, onBlur, value }) => {
    return (
        <>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className={scss.input}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
            />
        </>
    );
};

export default CustomInput;
