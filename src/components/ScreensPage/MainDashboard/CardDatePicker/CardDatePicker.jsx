import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import scss from './card-date-picker.module.scss';

import { useState } from 'react';

export const MyDatePicker = () => {
    const [startDate, setStartDate] = useState(new Date());

    const today = new Date();

    return (
        <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            className={scss.date_picker_input}
            wrapperClassName={scss.date_picker}
            minDate={today}
        />
    );
};

export default MyDatePicker;
