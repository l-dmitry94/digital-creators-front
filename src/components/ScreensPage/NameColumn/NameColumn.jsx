import scss from './NameColumn.module.scss';
import icons from '../../../assets/icons/icons.svg';

const NameColumn = () => {
    return (
        <div className={scss.nameColumn}>
            <p className={scss.name}>To do</p>
            <div className={scss.nameColumnBtn}>
                <button className={scss.btn}>
                    <svg className={scss.nameColumnIcon}>
                        <use href={`${icons}#icon-pencil`}></use>
                    </svg>
                </button>
                <button className={scss.btn}>
                    <svg className={scss.nameColumnIcon}>
                        <use href={`${icons}#icon-trash`}></use>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default NameColumn;
