import React, { useState } from "react";
import HeaderSection from "./calendar_header/HeaderSection";
import CalendarGrid from "./calendar_grid/CalendarGrid";
import styles from "./Calendar.module.scss";

const Calendar: React.FC = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

    // 이전 월로 이동
    const handlePreviousMonth = () => {
        setCurrentMonth((prev) => {
            if (prev === 0) {
                setCurrentYear((year) => year - 1);
                return 11; // 12월로 이동
            }
            return prev - 1;
        });
    };

    // 다음 월로 이동
    const handleNextMonth = () => {
        setCurrentMonth((prev) => {
            if (prev === 11) {
                setCurrentYear((year) => year + 1);
                return 0; // 1월로 이동
            }
            return prev + 1;
        });
    };

    return (
        <div className={styles.calendarContainer}>
            <HeaderSection
                year={currentYear}
                month={currentMonth}
                onPreviousMonth={handlePreviousMonth}
                onNextMonth={handleNextMonth}
            />
            <CalendarGrid year={currentYear} month={currentMonth} />
        </div>
    );
};

export default Calendar;
