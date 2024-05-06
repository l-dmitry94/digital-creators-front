import scss from '../BoardLink/BoardLink.module.scss';
import icons from '../../../assets/icons/';

const BoardLink = ({ boardTitle }) => {
    return (
        <div className={scss.linkFlex}>
            <div>
                <svg className={scss.icon}>
                    <use href={`${icons}#`} />
                </svg>
            </div>
            <p>{boardTitle}</p>
            <div className={scss.icons}>
                <svg className={scss.icon}>
                    <use href={`${icons}#icon-edit`} />
                </svg>
                <svg className={scss.icon}>
                    <use href={`${icons}#icon-delete`} />
                </svg>
            </div>
        </div>
    );
};

export default BoardLink;
