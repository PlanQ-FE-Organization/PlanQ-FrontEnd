import React from 'react';
import './HeaderSection.scss';

const HeaderSection: React.FC = () => {
    return (
      <div className="header-section">
        <div className="header-section-month-navigation">
          <div className="header-section-month-navigation-month-year">October, 2024</div>
          <div className="header-section-month-navigation-nav-buttons">
            <div className="header-section-month-navigation-nav-buttons-button">〈</div>
            <div className="header-section-month-navigation-nav-buttons-button">〉</div>
          </div>
          <div className="header-section-month-navigation-filter-buttons">
            <button className="selected">전체</button>
            <button>일정</button>
            <button>할 일</button>
          </div>
        </div>

        <div className="weekdays">
          {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
            <div key={day} className="weekday">
              {day}
            </div>
          ))}
        </div>
      </div>
    );
};

export default HeaderSection;
