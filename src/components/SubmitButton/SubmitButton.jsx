import icons from '../../assets/icons/icons.svg';
import scss from './SubmitButton.module.scss';

const SubmitButton = ({ buttonText }) => {
    switch (buttonText) {
        case 'Send':
            return (
                <button className={scss.button} type="submit">
                    {buttonText}
                </button>
            );
        case 'Register Now':
            return (
                <button className={scss.button} type="submit">
                    {buttonText}
                </button>
            );
        case 'Log In Now':
            return (
                <button className={scss.button} type="submit">
                    {buttonText}
                </button>
            );
        case 'Registration':
            return (
                <button className={scss.button} type="submit">
                    {buttonText}
                </button>
            );
        default:
            return (
                <button className={scss.buttonWrapper} type="submit">
                    <div className={scss.plus}>
                        <svg className={scss.plusIcon}>
                            <use href={`${icons}#icon-plus`}></use>
                        </svg>
                    </div>
                    {buttonText}
                </button>
            );
    }
};

export default SubmitButton;
