import scss from './ColorSelector.module.scss';

const ColorSelector = ({ title, onChange }) => {
    const handleColorChange = event => {
        onChange(event.target.value);
    };

    return (
        <div className={scss.colorSelector}>
            <div className={scss.title}>{title}</div>
            <div className={scss.buttonsContainer}>
                <label>
                    <input
                        type="radio"
                        name="color"
                        value="#8FA1D0"
                        onChange={handleColorChange}
                        required
                    />
                    <span
                        className={scss.radioBtn}
                        style={{ backgroundColor: '#8FA1D0' }}
                    ></span>
                </label>
                <label>
                    <input
                        type="radio"
                        name="color"
                        value="#E09CB5"
                        onChange={handleColorChange}
                    />
                    <span
                        className={scss.radioBtn}
                        style={{ backgroundColor: '#E09CB5' }}
                    ></span>
                </label>
                <label>
                    <input
                        type="radio"
                        name="color"
                        value="#BEDBB0"
                        onChange={handleColorChange}
                    />
                    <span
                        className={scss.radioBtn}
                        style={{ backgroundColor: '#BEDBB0' }}
                    ></span>
                </label>
                <label>
                    <input
                        type="radio"
                        name="color"
                        value="rgba(255, 255, 255, 0.3)"
                        checked
                        onChange={handleColorChange}
                    />
                    <span
                        className={scss.radioBtn}
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                    ></span>
                </label>
            </div>
        </div>
    );
};

export default ColorSelector;
