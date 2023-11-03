import React, { useState } from 'react';
import moment from 'moment';
import chevronLeft from "../assets/chevron_left_FILL0_wght400_GRAD0_opsz24.png";
import chevronRight from "../assets/chevron_right_FILL0_wght400_GRAD0_opsz24.png";
import "./CalendarAp.css";

const timeAvailable = ["11:00 am", "11:30 am", "12:00 pm", "12:30 pm", "01:00 pm", "01:30 pm", "02:00 pm", "02:30 pm", "03:00 pm", "03:30 pm", "04:00 pm", "04:30 pm", "05:00 pm", "05:30 pm", "06:00 pm", "06:30 pm"];

const renderCalendar = (currentDate, selectedDate, handleDateClick) => {
    const daysInMonth = moment(currentDate).daysInMonth();
    const firstDayOfMonth = moment(currentDate).date(1);
    const startDayOfWeek = firstDayOfMonth.day();
    const keyDMY = [];
    const calendar = [];
    for (let i = 0; i < startDayOfWeek; i++) {
        calendar.push(
            <div key={`empty-${i}`} className="empty-day">
            </div>
        );
    }
    for (let i = 1; i <= daysInMonth; i++) {
        const dayKey = `${i} ${currentDate.format('MMMM YYYY')}`;
        calendar.push(
            <div
                key={dayKey}
                className={`calendar-day ${selectedDate === dayKey ? 'selected' : ''}`}
                onClick={() => handleDateClick(dayKey)}
            >
                {i}
            </div>
        );
        keyDMY.push(dayKey);
    }
    console.log(keyDMY);
    return calendar;
};

function Calendar() {
    const [currentDate, setCurrentDate] = useState(moment());
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const handleDateClick = (day) => {
        setSelectedDate(day);
        console.log(day);
    };
    const handleTimeClick = (time) => {
        setSelectedTime(time);
        console.log(time);
    };
    const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return (
        <div>
            <div className="headCalen">
                <h5>{currentDate.format('MMMM YYYY')}</h5>
                <div className="inGrid">
                    <button onClick={() => setCurrentDate(moment(currentDate).subtract(1, 'month'))} type="button">
                        <img src={chevronLeft} alt="Left Arrow" />
                    </button>
                    <button onClick={() => setCurrentDate(moment(currentDate).add(1, 'month'))} type="button">
                        <img src={chevronRight} alt="Right Arrow" />
                    </button>
                </div>
            </div>
            <div className="CT-inGrid">
                <div className="calendar-days">
                    {dayNames.map(day => (
                        <div key={day} className="calendar-day-name">
                            {day}
                        </div>
                    ))}
                    {renderCalendar(currentDate, selectedDate, handleDateClick)}
                    
                </div>
                <div className="timeGrid">
                    {timeAvailable.map(time => (
                        <div
                        key={time}
                        className={`time-AL ${selectedTime === time ? 'selected' : ''}`}
                        onClick={() => handleTimeClick(time)}>
                        {time}
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Calendar;
