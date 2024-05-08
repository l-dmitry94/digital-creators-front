import { Formik } from 'formik';
import { Fragment, useEffect, useState } from 'react';
import scss from './BackgroundGallery.module.scss';
import blockImage from '../../assets/images/block.svg';
import axios from 'axios';

const BackgroundRadioGroup = () => {
    const [backgrounds, setBackgrounds] = useState([]);
    const [selectedOption, setSelectedOption] = useState(0);

    const baseURL = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        axios
            .get(`${baseURL}/user/folders/tablet_bg`)
            .then(response => {
                const data = response.data;
                const newBackgrounds = [blockImage, ...data.resources];
                setBackgrounds(newBackgrounds);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, [baseURL]);

    const handleOptionChange = (index, setFieldValue) => {
        setSelectedOption(index);
        setFieldValue('background', index);
        sendSelectedOptionToServer(index);
    };

    const sendSelectedOptionToServer = index => {
        const selectedBackground = backgrounds[index];
        console.log(selectedBackground);
    };

    return (
        <Formik
            initialValues={{ background: selectedOption }}
            onSubmit={(values, actions) => {
                // Код обробки подання форми, якщо потрібно
            }}
        >
            {({ values, setFieldValue }) => (
                <div className={scss.backgroundsContainer}>
                    {backgrounds.map((background, id) => (
                        <Fragment key={id}>
                            <label
                                className={scss.radioLabel}
                                onClick={() =>
                                    handleOptionChange(id, setFieldValue)
                                }
                            >
                                <input
                                    type="radio"
                                    name="background"
                                    value={id}
                                    checked={values.background === id}
                                    onChange={() =>
                                        handleOptionChange(id, setFieldValue)
                                    }
                                    className={scss.backgroundsRadioInput}
                                />
                                <img
                                    src={
                                        typeof background === 'string'
                                            ? background
                                            : background.url
                                    }
                                    className={scss.radioImage}
                                    loading="lazy"
                                />
                            </label>
                        </Fragment>
                    ))}
                </div>
            )}
        </Formik>
    );
};

export default BackgroundRadioGroup;
