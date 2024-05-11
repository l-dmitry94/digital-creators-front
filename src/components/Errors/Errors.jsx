import scss from '../Errors/Errors.module.scss';

import { AiOutlineInfoCircle } from 'react-icons/ai';

const Errors = ({ error, touched, errorMessage }) => {
    return (
        <>
            {error[errorMessage] && touched[errorMessage] && (
                <div className={scss.errorStyle}>
                    <AiOutlineInfoCircle style={{ height: '22px' }} />
                    {error[errorMessage]}
                </div>
            )}
        </>
    );
};

export default Errors;
