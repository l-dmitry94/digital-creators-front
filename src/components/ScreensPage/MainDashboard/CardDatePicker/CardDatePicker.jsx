import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import scss from './card-date-picker.module.scss';
import './card-date.scss';
import { useState } from 'react';
//*, selected, onChange

const MyDatePicker = ({ title, formik }) => {
    const [startDate, setStartDate] = useState(new Date());
    const today = new Date();

    const getMonthName = date => {
        const monthNames = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];
        return monthNames[date.getMonth()];
    };

    const formatDate = date => {
        const monthName = getMonthName(date);
        const monthNumber = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const year = date.getFullYear();
        formik.values.deadline = `${day}/${monthNumber}/${year}`;
        return `${monthName} ${day}`;
    };
    const getDateText = date => {
        if (
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
        ) {
            return 'Today, ';
        } else {
            return '';
        }
    };
    const CustomDatePickerInput = ({ onClick }) => (
        <div
            className={`${scss.date_picker_input} ${scss.customInput}`}
            onClick={onClick}
        >
            <svg
                className={scss.arrowDown}
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M4.5 7.25L9 11.75L13.5 7.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <label className={scss.customLabel}>
                {getDateText(startDate)} {formatDate(startDate)}
            </label>
        </div>
    );

    return (
        <div className={scss.datePickerContainer}>
            <div className={scss.title}>
                <label>{title}</label>
            </div>

            <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                customInput={<CustomDatePickerInput />}
                className={scss.date_picker}
                minDate={today}
                dateFormat="MM/dd/yyyy"
                calendarClassName="react-calendar"
            />
        </div>
    );
};

export default MyDatePicker;
