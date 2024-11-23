import React, { useState } from "react";
import HeaderSection from "./calendar_header/HeaderSection";
import CalendarGrid from "./calendar_grid/CalendarGrid";
import styles from "./Calendar.module.scss";

const Calendar: React.FC = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [direction, setDirection] = useState<"left" | "right" | "none">("none"); // 애니메이션 방향

    // 이전 달로 이동
    const handlePreviousMonth = () => {
        setDirection("left");
        setTimeout(() => {
            setCurrentMonth((prev) => {
                if (prev === 0) {
                    setCurrentYear((year) => year - 1);
                    return 11; // 12월로 이동
                }
                return prev - 1;
            });
            setDirection("none");
        }, 300); // 애니메이션 지속 시간과 일치
    };

    // 다음 달로 이동
    const handleNextMonth = () => {
        setDirection("right");
        setTimeout(() => {
            setCurrentMonth((prev) => {
                if (prev === 11) {
                    setCurrentYear((year) => year + 1);
                    return 0; // 1월로 이동
                }
                return prev + 1;
            });
            setDirection("none");
        }, 300); // 애니메이션 지속 시간과 일치
    };

    return (
        <div className={`${styles.calendarContainer}`}>
            <HeaderSection
                year={currentYear}
                month={currentMonth}
                onPreviousMonth={handlePreviousMonth}
                onNextMonth={handleNextMonth}
            />
            <div
                className={`${styles.calendarWrapper} ${
                    direction === "left"
                        ? styles.fadeOut
                        : direction === "right"
                            ? styles.fadeOut
                            : ""
                }`}
            >
                <CalendarGrid year={currentYear} month={currentMonth} />
            </div>
        </div>
    );
};

export default Calendar;
