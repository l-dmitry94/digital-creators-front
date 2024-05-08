import { useEffect, useState } from 'react';
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
                // console.log('Received data from server:', data.resources);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, [baseURL]);

    const handleOptionChange = index => {
        setSelectedOption(index);
        sendSelectedOptionToServer(index);
    };

    const sendSelectedOptionToServer = index => {
        const selectedBackground = backgrounds[index];
        console.log(selectedBackground);
    };

    return (
        <div className={scss.backgroundsContainer}>
            {backgrounds.map((background, index) => (
                <div key={index}>
                    <label
                        className={scss.radioLabel}
                        onClick={() => handleOptionChange(index)}
                    >
                        <input
                            type="radio"
                            name="background"
                            value={index}
                            checked={selectedOption === index}
                            onChange={() => handleOptionChange(index)}
                            className={scss.backgroundsRadioInput}
                        />
                        <img
                            src={
                                typeof background === 'string'
                                    ? background
                                    : background.url
                            }
                            alt={
                                typeof background === 'string'
                                    ? 'Block'
                                    : background.title
                            }
                            className={scss.radioImage}
                            loading="lazy"
                        />
                    </label>
                </div>
            ))}
        </div>
    );
};

export default BackgroundRadioGroup;
