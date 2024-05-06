import scss from './CustomTextarea.module.scss';

const CustomTextarea = ({
    type,
    placeholder,
    name,
    onChange,
    onBlur,
    value,
}) => {
    switch (placeholder) {
        case 'Comment':
            return (
                <textarea
                    type={type}
                    name={name}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder={placeholder}
                    className={scss.textarea}
                />
            );
        case 'Description':
            return (
                <textarea
                    type={type}
                    name={name}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder={placeholder}
                    className={scss.description}
                />
            );
        default:
            return (
                <textarea
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    className={scss.textarea}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                />
            );
    }
};

export default CustomTextarea;
