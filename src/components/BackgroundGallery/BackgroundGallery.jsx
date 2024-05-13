/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useState } from 'react';
import scss from './BackgroundGallery.module.scss';
import blockImage from '../../assets/images/block.svg';
import axios from 'axios';

const BackgroundRadioGroup = ({ formik, editBoard }) => {
    const defaultImage = {
        public_id: 'default/default',
        secure_url: blockImage,
    };

    const [backgrounds, setBackgrounds] = useState([defaultImage]);
    const [selectedOption, setSelectedOption] = useState(
        editBoard
            ? formik.values.background
            : backgrounds[0].public_id.split('/')[1]
    );

    const baseURL = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        axios
            .get(`${baseURL}/user/folders/tablet_bg`)
            .then(response => {
                const data = response.data;
                const newBackgrounds = [defaultImage, ...data.resources];

                setBackgrounds(newBackgrounds);
            })
            .catch(error => {
                console.error(error);
            });
    }, [baseURL]);

    useEffect(() => {
        formik.values.background = selectedOption;
    }, [selectedOption, formik.values]);

    const handleRadioButtons = e => {
        setSelectedOption(e.target.value);
    };

    return (
        <div className={scss.radioGroup}>
            {backgrounds?.map(({ public_id, secure_url }) => (
                <Fragment key={public_id}>
                    <input
                        className={scss.input}
                        type="radio"
                        id={public_id.split('/')[1]}
                        name="background"
                        value={public_id.split('/')[1]}
                        onChange={e => handleRadioButtons(e)}
                        checked={selectedOption === public_id.split('/')[1]}
                    />
                    <label
                        htmlFor={public_id.split('/')[1]}
                        className={scss.label}
                    >
                        <img
                            className={scss.image}
                            src={secure_url}
                            alt={public_id.split('/')[1]}
                            loading="lazy"
                        />
                    </label>
                </Fragment>
            ))}
        </div>
    );
};

export default BackgroundRadioGroup;
