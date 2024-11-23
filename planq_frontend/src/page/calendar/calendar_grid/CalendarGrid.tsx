import React from "react";
import "./CalendarGrid.scss";

// Props 타입 정의
interface CalendarGridProps {
    year: number;
    month: number;
}

const events = [
    { date: "2024-10-01", title: "교양 과제1", color: "#ff9f89" },
    { date: "2024-10-01", title: "수학 챕터1-2강", color: "#91c5ff" },
    { date: "2024-10-01", title: "수학문제 2개풀기", color: "#ffd28d" },
];

const getDaysInMonth = (year: number, month: number): Array<number | null> => {
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const previousMonthDays: Array<number | null> = Array.from({ length: firstDayOfMonth }, () => null);
    const currentMonthDays: Array<number | null> = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const nextMonthDays: Array<number | null> = Array.from(
        { length: 42 - (firstDayOfMonth + daysInMonth) },
        () => null
    );

    return previousMonthDays.concat(currentMonthDays).concat(nextMonthDays);
};

const CalendarGrid: React.FC<CalendarGridProps> = ({ year, month }) => {
    const days = getDaysInMonth(year, month);

    return (
        <div className="calendar-grid">
            {days.map((day, index) => {
                const dateString = day
                    ? `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
                    : null;

                const dayEvents = events.filter((event) => event.date === dateString);

                return (
                    <div
                        key={index}
                        className={`calendar-grid-calendar-cell ${day === null ? "calendar-grid-calendar-cell-not-current-month" : "current-month"}`}
                    >
                        <span className="calendar-grid-calendar-cell-day-number">{day}</span>
                        <div className="calendar-grid-calendar-cell-event-container">
                            {dayEvents.map((event, idx) => (
                                <div
                                    key={idx}
                                    className="calendar-grid-calendar-cell-event-container-event"
                                    style={{ backgroundColor: event.color }}
                                >
                                    {event.title}
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CalendarGrid;
