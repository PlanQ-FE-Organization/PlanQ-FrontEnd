import React, { Component } from 'react';
import HeaderSection from "./calendar_header/HeaderSection";
import styles from './Calendar.module.scss';

class Calendar extends Component {
    render() {
        return (
            <div className={styles.calendarContainer}>
                <HeaderSection />
            </div>
        );
    }
}

export default Calendar;
