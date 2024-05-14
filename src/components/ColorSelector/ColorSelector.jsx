import scss from './ColorSelector.module.scss';

const ColorSelector = ({ title, onChange, defaultValue }) => {
    const handleColorChange = event => {
        onChange(event.target.value || 'Without');
    };

    return (
        <div className={scss.colorSelector}>
            <div className={scss.title}>{title}</div>
            <div className={scss.buttonsContainer}>
                <label>
                    <input
                        className={scss.input}
                        type="radio"
                        name="priority"
                        value="Low"
                        onChange={handleColorChange}
                        checked={defaultValue === 'Low'}
                    />
                    <span
                        className={scss.radioBtn}
                        style={{ backgroundColor: '#8FA1D0' }}
                    ></span>
                </label>
                <label>
                    <input
                        className={scss.input}
                        type="radio"
                        name="priority"
                        value="Medium"
                        onChange={handleColorChange}
                        checked={defaultValue === 'Medium'}
                    />
                    <span
                        className={scss.radioBtn}
                        style={{ backgroundColor: '#E09CB5' }}
                    ></span>
                </label>
                <label>
                    <input
                        className={scss.input}
                        type="radio"
                        name="priority"
                        value="High"
                        onChange={handleColorChange}
                        checked={defaultValue === 'High'}
                    />
                    <span
                        className={scss.radioBtn}
                        style={{ backgroundColor: '#BEDBB0' }}
                    ></span>
                </label>
                <label>
                    <input
                        className={scss.input}
                        type="radio"
                        name="priority"
                        value="Without"
                        onChange={handleColorChange}
                        checked={defaultValue === 'Without'}
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
