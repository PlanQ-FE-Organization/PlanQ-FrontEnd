import React from 'react';
import './HeaderSection.scss';
import CalendarBackward from "../../../assetss/calendar/CalendarBackward.svg"
import CalendarFrontward from "../../../assetss/calendar/CalendarFrontward.svg"

const HeaderSection: React.FC = () => {
    return (
      <div className="header-section">
        <div className="header-section-month-navigation">
          <div className="header-section-month-navigation-month-year">
            October, 2024
            <div className="header-section-month-navigation-nav-buttons">
              <div className="header-section-month-navigation-nav-buttons-button">
                <img src={CalendarBackward} alt="Calendar Backward" />
              </div>
              <div className="header-section-month-navigation-nav-buttons-button">
                <img src={CalendarFrontward} alt="Calendar Frontward" />
              </div>
            </div>
          </div>

          <div className="header-section-month-navigation-filter-buttons">
            <button className="header-section-month-navigation-filter-buttons-selected">
              전체
            </button>
            <button>일정</button>
            <button>할 일</button>
          </div>
        </div>

        <div className="header-section-weekdays">
          {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
            <div key={day} className="header-section-weekdays-weekday">
              {day}
            </div>
          ))}
        </div>
      </div>
    );
};

export default HeaderSection;
