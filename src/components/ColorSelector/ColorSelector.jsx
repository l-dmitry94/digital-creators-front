import scss from './ColorSelector.module.scss';

const ColorSelector = ({ title, onChange }) => {
    const handleColorChange = event => {
        onChange(event.target.value || 'Without');
    };

    return (
        <div className={scss.colorSelector}>
            <div className={scss.title}>{title}</div>
            <div className={scss.buttonsContainer}>
                <label>
                    <input
                        type="radio"
                        name="priority"
                        value="Low"
                        onChange={handleColorChange}
                    />
                    <span
                        className={scss.radioBtn}
                        style={{ backgroundColor: '#8FA1D0' }}
                    ></span>
                </label>
                <label>
                    <input
                        type="radio"
                        name="priority"
                        value="Medium"
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
                        name="priority"
                        value="High"
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
                        name="priority"
                        value="Without"
                        onChange={handleColorChange}
                    />
                    <span
                        className={scss.radioBtn}
                        style={{
                            backgroundColor: 'var( --theme-default-card-board)',
                        }}
                    ></span>
                </label>
            </div>
        </div>
    );
};

export default ColorSelector;
